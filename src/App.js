import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Route/routes';

function App() {
  return <RouterProvider router={routes} />
}

export default App;
