import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/home/Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './component/router/routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>

      <ToastContainer/>
      <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
