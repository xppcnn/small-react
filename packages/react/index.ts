import currentDispatcher, {
	Dispatcher,
	resolveDispatcher
} from './src/currentDispatcher';
import { jsx, isValidElement as isValidElementFn } from './src/jsx';

export const useState: Dispatcher['useState'] = (initialState) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useState(initialState);
};

// 内部数据层

export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
	currentDispatcher
};
export const version = '1.0.0';

export const isValidElement = isValidElementFn;
export const createElement = jsx;
// export default {
// 	version: '1.0.0',
// 	createElement: jsxDEV
// };
