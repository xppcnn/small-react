// @ts-ignore
import ReactDOM from 'react-dom';
// import React from 'react';
import { ReactElementType } from 'shared/ReactTypes';

export const renderIntoDocument = (element: ReactElementType) => {
	const div = document.createElement('div');
	return ReactDOM.createRoot(div).render(element);
};
