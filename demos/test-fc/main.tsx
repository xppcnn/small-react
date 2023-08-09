import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	const [num, setNum] = useState(100);
	return (
		<div>
			<span onClick={() => setNum((c) => c + 1)}>{num}</span>
		</div>
	);
};
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
