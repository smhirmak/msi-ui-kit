import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './layout/Layout';
import Home from './pages/Home';
import BackToTopButton from './components/BackToTopButton';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

const App = () => (
  <div>
    <ToastContainer newestOnTop toastClassName="rounded-lg" bodyStyle={{ fontSize: '.9rem' }} theme="colored" />
    <RouterProvider router={router} />
    <BackToTopButton />
  </div>
);

export default App;
