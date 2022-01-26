import './App.css';
import Navbar from './Components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Mount from './Components/Mount';
import Unmount from './Components/Unmount';
import Update from './Components/Update';


function App() {
  return (
    <div>
    <h1 className='text-center bg-success text-white p-5'>COMPONENT LIFECYCLE</h1>
      <Navbar/>
      <Routes>
          <Route exact path="/mount" element={<Mount/>} />
           
          
          <Route path="/update" element={<Update/>} />
            
          
          <Route path="/unmount" element={<Unmount/>} />
            
          
        </Routes>
    </div>
  );
}

export default App;
