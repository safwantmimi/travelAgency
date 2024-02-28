import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthRouters from "./routes/authRouters/authRouters"
import ToursRouter from "./routes/toursRouter/toursRouter"
import CountriesRouter from "./routes/countriesRoute/countriesRouter"
import BlogRouter from "./routes/blogRoutes/blogRouter"
import TestimonialsRouter from "./routes/testimonialsRoute/testimonialsRouter"
import DiscoverRouter from './routes/discoverRoutes/discoverRouter';
import FooterRouter from "./routes/footerRoutes/footerRoute"
function App() {
  return (
   <BrowserRouter>
   <AuthRouters></AuthRouters>
   <CountriesRouter></CountriesRouter>
   <ToursRouter></ToursRouter>
   <BlogRouter></BlogRouter>
   <TestimonialsRouter></TestimonialsRouter>
   <DiscoverRouter></DiscoverRouter>
   <FooterRouter></FooterRouter>
   </BrowserRouter>
  );
}

export default App;
