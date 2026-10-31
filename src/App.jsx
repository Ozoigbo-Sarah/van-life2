import React from 'react';
import './App.css';
import HomePage from './pages/homepage.jsx';
import AboutPage from './pages/aboutpage.jsx';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route , Link} from 'react-router-dom';
import Vans,{Loader as vansLoader} from './pages/vans.jsx';
import VanDetail,{Loader as vandetailLoader} from './pages/vandetails.jsx';
import Layout from './components/layout.jsx';
import Income from './pages/income.jsx';
import Dashboard, {Loader as dashboardLoader} from './pages/dashboard.jsx';
import Review from './pages/review.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans ,{Loader as hostVanLoader}from './pages/HostVans.jsx';
import HostVansDetail, {Loader as hostVanDetailLoader} from './pages/hostvansdetails.jsx';
import HostVanPricing from './pages/hostvanpricing.jsx';
import HostVanphoto from './pages/hostVanphoto.jsx';
import Hostvanprofile from './pages/hostvanprofile.jsx';
import NotFound from './pages/404page.jsx';
import Error from './components/error.jsx';
import Login , {Loader as loginloader,Action as ActionFunction} from './pages/loginpage.jsx';
import { requireAuth } from './utils.js';
import FakeLogout from './pages/fakelogout.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
    path="/" 
    element={<Layout />}>
    
      <Route 
      index 
      element={<HomePage />} />
      <Route 
      path="login" 
      element={<Login />} 
      loader={loginloader}
      action={ActionFunction}
      />
      <Route 
      path="logout" 
      element={<FakeLogout />} />
      <Route 
      path="about" 
      element={<AboutPage />} />
      <Route 
      path="vans" 
      element={<Vans />} 
      loader={vansLoader}
      errorElement={<Error />} />

      <Route //
      path="vans/:id" 
      loader={vandetailLoader}
       errorElement={<Error />}
      element={<VanDetail />} />


      <Route 
      path="host"
      loader={async ({ request })=>await requireAuth( request )}
      element={<HostLayout />}>
       
        <Route 
        index
        errorElement={<Error />} 
        element={<Dashboard />}
      loader={dashboardLoader}

        />
        <Route 
        path="income" 
        element={<Income />}
        loader={async ({ request })=>await requireAuth( request )}
        />
        <Route 
        path="review" 
        element={<Review />} 
       loader={async ({ request })=>await requireAuth( request )}
         />
        <Route
        path="vans" 
        loader={hostVanLoader}
        errorElement={<Error />}
        element={<HostVans />} 
        />

        <Route 
        path="vans/:id" 
        element={<HostVansDetail />}
        errorElement={<Error />}
        loader={hostVanDetailLoader} >

          <Route index 
          element={<Hostvanprofile />} 
          errorElement={<Error />}
        loader={async ({ request })=>await requireAuth( request )}
          />
          <Route 
          path="photo" 
          element={<HostVanphoto />}
        loader={async ({ request })=>await requireAuth( request )}
           />
          <Route 
          path="pricing" 
          element={<HostVanPricing />}
        loader={async ({ request })=>await requireAuth( request )}
           />
        </Route>

      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  // The site lives under /van-life2/ on GitHub Pages, so every route needs that prefix
  { basename: import.meta.env.BASE_URL }
);




function App(){
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
        