import { routesColor } from './routeNameColor';

export const createColorMatchExpression = (defaultColor: string = 'black') => {
	const expression: (string | string[])[] = ['match', ['get', 'route_long_name']];
	routesColor.forEach((route) => [expression.push(route.route), expression.push(route.color)]);
	expression.push(defaultColor);
	return expression;
};
