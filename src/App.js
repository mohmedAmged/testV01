import { useState } from 'react';
import './App.css';
import MyNav from './components/myNav/MyNav';
import { Route, Routes } from 'react-router-dom';
import MyHome from './pages/myHome/MyHome';
import HeroSec from './components/myHeroSec/HeroSec';
import NewCar from './pages/newCarPage/NewCar';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';

function App() {
  const [scrollToggle, setScrollToggle] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });
  return (
    <>
    <MyNav scrollToggle={scrollToggle}/>
    <Routes>
      <Route path='/' element={<MyHome/>}/>
      <Route path='/new-cars' element={<NewCar/>}/>
      <Route path='/car-Info' element={<SingleProductPage />}/>
    </Routes>
    </>
  );
}

export default App;
