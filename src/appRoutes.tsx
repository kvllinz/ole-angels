import { RouteObject } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const appRoutes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
];

export default appRoutes;
