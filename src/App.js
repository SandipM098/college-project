
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Car from './pages/Car';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Car' element={<Car/>}/>
        {/* <Route path='/Bike' element={<Bikes/>}/> */}
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
