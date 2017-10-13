import React from 'react';
import ReactDOM from 'react-dom';
import Hall from './Hall';
//import Block3 from './Hall2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hall rows = {10} cols = {10} />, document.getElementById('root'));
//ReactDOM.render(<Block3 />, document.getElementById('root'));

registerServiceWorker();
