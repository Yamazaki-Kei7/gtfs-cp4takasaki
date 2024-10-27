<script lang="ts">
	import Slider from '@smui/slider';
	import { DateInput } from 'date-picker-svelte';
	import { createEventDispatcher } from 'svelte';

	let date = new Date();
	export let minutes: number = 0;
	export let dayType: string = '';
	const dispatch = createEventDispatcher();

	// dateの値が実装されたら、datermineDayType関数を呼び出して、日付タイプを取得する
	$: if (date) updateDayType();

	async function updateDayType() {
		dayType = await determineDayType(date);

		const handleMinutesChange = (newMinutes: any) => {
			minutes = newMinutes;
			// 親コンポーネントに通知
			dispatch('updateMinutes', { minutes });
			console.log(minutes);
		};
	}

	const determineDayType = async (date: Date): Promise<string> => {
		const day = date.getDay();
		const isHoliday = await holidayCheck(date);
		if (isHoliday || day === 0) {
			return '日祝';
		} else if (day === 6) {
			return '土曜';
		} else {
			return '平日';
		}
	};

	const formatTime = (minutes: number) => {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
	};

	const holidayCheck = async (date: Date) => {
		// 祝日かどうか外部APIを使って判定する
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるため、1を加える
		const day = date.getDate().toString().padStart(2, '0');
		const apiUrl = `https://api.national-holidays.jp/${year}/${month}/${day}`;
		// fetchでAPIを叩いて、祝日かどうかを判定する
		const res = await fetch(apiUrl);
		const data = await res.json();
		// dataがエラーの場合はfalseを返す
		if (data.error === 'not_found') {
			return false;
		} else {
			return true;
		}
	};
</script>

<div class="settings ml-3">
	<div class="flex items-center">
		<DateInput bind:value={date} format="yyyy-MM-dd" class="mt-2 border-blue-900" />
		<pre class="status mt-2 ml-3">（{dayType}）</pre>
		<pre class="status mt-2 ml-3">時刻: {formatTime(minutes)}</pre>
	</div>
	<Slider
		bind:value={minutes}
		min={0}
		max={1440}
		step={1}
		tickMarks
		input$aria-label="Discrete slider"
	/>
</div>
