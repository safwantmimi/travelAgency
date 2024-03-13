import './App.css';
import { BrowserRouter ,Routes,Route ,} from 'react-router-dom';
import AuthRouters from "./routes/authRouters/authRouters"

function App() {
  return (
    <>
  <BrowserRouter basename="/">
        <AuthRouters></AuthRouters>
    </BrowserRouter>
 
   </>
  );
}

export default App;
