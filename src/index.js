import ReactDOM from 'react-dom/client';
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PerfectScrollbar>
      <App />
    </PerfectScrollbar>
  </BrowserRouter>
);
