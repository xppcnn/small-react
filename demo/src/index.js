import React from 'react';
import ReactDom from 'react-dom';
console.log('🚀 ~ file: index.js:3 ~ ReactDom:', ReactDom);

const App = () => {
	return (
		<div>
			<span>3333</span>
		</div>
	);
};
console.log('🚀 ~ file: index.js:8 ~ app:', 	<App />);

const root = document.getElementById('root');
// ReactDom.createRoot(root)
ReactDom.createRoot(root).render(<App />);
