export type Container = Element;
export type Instance = Element;
export type TextInstance = Text;
export function createInstance(type: string, props: any): Instance {
	const element = document.createElement(type);
	return element;
}
export function createTextInstance(content: string) {
	return document.createTextNode(content);
}
export function appendInitialChild(
	parent: Container | Instance,
	child: Instance
) {
	parent.appendChild(child);
}
export const appendChildToContainer = appendInitialChild;

export function commitTextUpdate(textInstance: TextInstance, content: string) {
	textInstance.textContent = content;
}

export function removeChild(
	child: Instance | TextInstance,
	container: Container
) {
	container.removeChild(child);
}
