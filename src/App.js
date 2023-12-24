import { useState } from 'react';
import './App.css';
import MyNav from './components/myNav/MyNav';
import { Route, Routes } from 'react-router-dom';
import MyHome from './pages/myHome/CarHome';
import CarHome from './pages/myHome/CarHome';
import NewCar from './pages/newCarPage/NewCar';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';
import DiscoverHome from './pages/discoverHome/DiscoverHome';
import DiscoverCategoryPage from './pages/discoverCategoryPage/DiscoverCategoryPage';
import MyFooter from './components/myFooter/MyFooter';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import SaveHome from './pages/saveHome/SaveHome';
import SaveSubPage from './pages/saveSubPage/SaveSubPage';
import UserDashBoard from './pages/userDashboard/UserDashBoard';

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
    <ScrollToTopButton />
    <Routes>
      {/* home for valuereach progres.. */}
      <Route path='/' element={<MyHome/>}/>
      {/* home for valuereach progres.. */}
      <Route path='/cars' element={<CarHome/>}/>
      <Route path={`/new-cars` || `/new-cars?:slug`} element={<NewCar/>}/>
      <Route path='/car-Info/:carId' element={<SingleProductPage />}/>
      <Route path='/discover' element={<DiscoverHome />}/>
      <Route path='/discover/category/:categoryName' element={<DiscoverCategoryPage />}/>
      <Route path='/save' element={<SaveHome />}/>
      <Route path='/save/:pageName' element={<SaveSubPage />}/>
      <Route path='/user/dashboard' element={<UserDashBoard />}/>
    </Routes>
    <MyFooter />
    </>
  );
}

export default App;
