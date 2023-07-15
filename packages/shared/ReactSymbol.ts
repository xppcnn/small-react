const supportSymbol: boolean = (typeof Symbol === 'function' &&
	Symbol.for) as boolean;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
