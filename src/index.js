import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Top10 from './pages/Top 10';
import Trending from './pages/Trending';
import WatchList from './pages/Watchlist';

const Applayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}


const Approuter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/trending", element: <Trending /> },
      { path: "/watchlist", element: <WatchList/> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />)
