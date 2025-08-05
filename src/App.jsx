import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { RootLayout } from './Layout/RootLayout';
import { AboutUs } from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import { Statistics } from './pages/Statistics';
import { Learn } from './pages/Learn';
import { QuizPage } from './pages/Quiz';
import { ContactForm } from './components/Contact/ContactForm';

function App() {
     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<AboutUs />} />
                    <Route path='statistics' element={<Statistics />} />
                    <Route path='learn' element={<Learn/>} />
                    <Route path='quiz' element={<QuizPage/>} />
                    <Route path='contact' element={<ContactForm/>} />
               </Route>
          )
     );

     return <RouterProvider router={router} />;
}

export default App;
