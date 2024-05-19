import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Kactivities } from '../pages/Kactivities';
import { Kevents } from '../pages/Kevents';
import { Kworkshops } from '../pages/Kworkshops';
import { Kemistryfestival } from '../pages/Kemistryfestival';

function Rutas () {
  return (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Kactivities' element={<Kactivities/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Kevents' element={<Kevents/>}></Route>
      <Route path='/Kworkshops' element={<Kworkshops/>}></Route>
      <Route path='/Kemistryfestival' element={<Kemistryfestival/>}></Route>
    </Routes>


  );
}

export default Rutas;