import { ReactElementType } from 'shared/ReactTypes';
import { FiberNode, createFiberFromELement } from './fiber';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbol';
import { Placement } from './fiberFlags';
import { HostText } from './workTags';

function ChildReconciler(shouldTrackEffect: boolean) {
	function reconcileSingleElement(
		returnFiber: FiberNode,
		currentFirstChild: FiberNode | null,
		element: ReactElementType
	) {
		// 根据element 创建
		const fiber = createFiberFromELement(element);
		fiber.return = returnFiber;
		return fiber;
	}

	function reconcileSingleTextNode(
		returnFiber: FiberNode,
		currentFirstChild: FiberNode | null,
		content: string | number
	) {
		const fiber = new FiberNode(HostText, { content }, null);
		fiber.return = returnFiber;
		return fiber;
	}
	function placeSingleChild(fiber: FiberNode) {
		if (shouldTrackEffect) {
			fiber.flags |= Placement;
		}
		return fiber;
	}
	function reconcileChildFibers(
		returnFiber: FiberNode,
		currentFirstChild: FiberNode | null,
		newChild?: ReactElementType
	): FiberNode | null {
		if (typeof newChild === 'object' && newChild !== null) {
			switch (newChild.$$typeof) {
				case REACT_ELEMENT_TYPE:
					return placeSingleChild(
						reconcileSingleElement(returnFiber, currentFirstChild, newChild)
					);
				default:
					if (__DEV__) {
						console.warn('暂未实现的child类型');
					}
			}
			return null;
		}
		if (typeof newChild === 'number' || typeof newChild === 'string') {
			return placeSingleChild(
				reconcileSingleTextNode(returnFiber, currentFirstChild, newChild)
			);
		}
		if (__DEV__) {
			console.warn('暂未实现的child类型');
		}
		return null;
	}
	return reconcileChildFibers;
}

export const reconcileChildFibers = ChildReconciler(true);
export const mountChildFibers = ChildReconciler(false);
