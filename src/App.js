import './App.css';
import { BrowserRouter ,Routes,Route ,} from 'react-router-dom';
import MainRouters from "./routes/mainRouters/mainRouters.js"
import { Suspense } from 'react';
function App() {
  return (
    <>
  <BrowserRouter basename="/">
        <MainRouters></MainRouters>
  </BrowserRouter>
 
   </>
  );
}

export default App;
