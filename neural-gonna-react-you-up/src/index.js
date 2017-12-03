import React from 'react';
import Dropzone from 'react-dropzone';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Basic from './Basic';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Basic />, document.getElementById('up'));
registerServiceWorker();
