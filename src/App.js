import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthRouters from "./routes/authRouters/authRouters"
import ToursRouter from "./routes/toursRouter/toursRouter"
import CountriesRouter from "./routes/countriesRoute/countriesRouter"
import BlogRouter from "./routes/blogRoutes/blogRouter"
function App() {
  return (
   <BrowserRouter>
   <AuthRouters></AuthRouters>
   <CountriesRouter></CountriesRouter>
   <ToursRouter></ToursRouter>
   <BlogRouter></BlogRouter>
   </BrowserRouter>
  );
}

export default App;
