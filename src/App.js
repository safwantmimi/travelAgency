import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthRouters from "./routes/authRouters/authRouters"
import CountriesRouter from './routes/countriesRoute/countriesRouter';
function App() {
  return (
   <BrowserRouter>
   <AuthRouters></AuthRouters>
   <CountriesRouter></CountriesRouter>
   </BrowserRouter>
  );
}

export default App;
