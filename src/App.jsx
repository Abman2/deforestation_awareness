import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { RootLayout } from './layout/RootLayout';
import { AboutUs } from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import { Statistics } from './pages/Statistics';
import { Learn } from './pages/Learn';
import { QuizPage } from './pages/Quiz';
import { ContactForm } from './components/Contact/ContactForm';
import { Blog } from './pages/Blog';
import BlogPostPage from './components/Blog/BlogPostPage';
import AdminPanel from './components/CSV printer/AdminPanel';
import { initGA, trackPageView, logUserDetails } from './utils/tracker';

function App() {
     useEffect(() => {
          initGA();
     }, []);

     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<AboutUs />} />
                    <Route path='statistics' element={<Statistics />} />
                    <Route path='learn' element={<Learn />} />
                    <Route path='quiz' element={<QuizPage />} />
                    <Route path='contact' element={<ContactForm />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="/admin" element={<AdminPanel />} />
               </Route>
          )
     );

     // Track page visits
     router.subscribe((state) => {
          const page = state.location.pathname;
          trackPageView(page);
          logUserDetails(page);
     });

     return <RouterProvider router={router} />;
}

export default App;
