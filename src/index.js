import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import products from './data';

ReactDOM.render(<App products={products} />, 
	document.getElementById('root')
);
registerServiceWorker();
