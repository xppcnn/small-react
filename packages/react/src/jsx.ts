import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbol';
import {
	ElementType,
	ReactElementFun,
	Key,
	Props,
	Ref
} from 'shared/ReactTypes';

const ReactElement: ReactElementFun = (type, key, ref, props) => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'xppcnn'
	};
	return element;
};
export const jsx = (type: ElementType, config: any, ...mayChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
		const mayChildrenLength = mayChildren.length;
		if (mayChildrenLength) {
			if (mayChildrenLength === 1) {
				props.children = mayChildren[0];
			} else {
				props.children = mayChildren;
			}
		}
	}
	return ReactElement(type, key, ref, props);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};
