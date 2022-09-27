import React from 'react';
import {createRoot} from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GifExpertApp />);

