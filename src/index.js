import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/app.css';
import { BrowserRouter } from 'react-router-dom';
import TodoApp from './components/TodoApp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
);
