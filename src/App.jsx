import './App.css';
import Login from './Login';
import Register from './Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';

function App() {
  const routes = createBrowserRouter([{

    path:"",
    element:<Register/>
  },
  {
    path:"Login",
    element:<Login/>
  },
  {
    path:"home",
    element:<Home/>
  }
  
  ])
  return (
    <RouterProvider router={routes}/>
    
  );
}

export default App;
