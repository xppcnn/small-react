export type ElementType = any;
export type Props = any;
export type Ref = any;
export type Key = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	key: Key;
	type: ElementType;
	props: Props;
	ref: Ref;
	__mark: string;
}

export type ReactElementFun = (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
) => ReactElementType;

export type Action<State> = State | ((prevState: State) => State);
