import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { ThemeProvider } from '../src/components/providers/themeProvider';
import {SidebarProvider} from './components/providers/sidebarProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
