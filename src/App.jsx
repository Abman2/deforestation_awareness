import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { RootLayout } from './Layout/RootLayout';
import { AboutUs } from './pages/AboutUs';

function App() {
     const router = createBrowserRouter(
          createRoutesFromElements(
             
                    <Route path='/' element={<RootLayout />}>
                         <Route index element={<Home />} />
                         <Route path='about' element={<AboutUs/>}/>
                        
                    </Route>
                   
              
          )
     );

     return (
          
          
               <RouterProvider router={router} />
           
         
     );
}

export default App;
