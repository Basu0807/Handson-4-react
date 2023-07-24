
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouteCompo from './components/RouteCompo';
import LinkCompo from './components/LinkCompo';

function App() {
  return (
   <>
   <BrowserRouter>
   <LinkCompo/>
   <RouteCompo/>
   </BrowserRouter>
  
   </>
  );
}

export default App;
