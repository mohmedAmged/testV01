import { useState } from 'react';
import './App.css';
import MyNav from './components/myNav/MyNav';
import { Route, Routes } from 'react-router-dom';
import CarHome from './pages/carHome/CarHome';
import NewCar from './pages/newCarPage/NewCar';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';
import DiscoverHome from './pages/discoverHome/DiscoverHome';
import DiscoverCategoryPage from './pages/discoverCategoryPage/DiscoverCategoryPage';
import MyFooter from './components/myFooter/MyFooter';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import SaveHome from './pages/saveHome/SaveHome';
import SaveSubPage from './pages/saveSubPage/SaveSubPage';
import UserDashBoard from './pages/userDashboard/UserDashBoard';
import MyMainHome from './pages/myMainHome/MyMainHome';
import { useQuery } from '@tanstack/react-query';
import { baseURL } from './functions/BaseURL';
import DefaultPage from './pages/defaultPage/DefaultPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';

function App() {
  const [scrollToggle, setScrollToggle] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });

  const { data } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/countries`);
      const response = await fetchData.json();
      return response.data;
    },
  });
  const [firstRender, setFirstRender] = useState(true)
  const currCountryCode = localStorage.getItem('curr-country')
  return (
    <>
      <MyNav countriesData={data?.countries} scrollToggle={scrollToggle} />
      <ScrollToTopButton />
      <Routes>
        {/* home for valuereach progres.. */}
        <Route path='/' element={<DefaultPage countriesData={data?.countries} setFirstRender={setFirstRender} />} />
        <Route path={`/${currCountryCode}`} element={<MyMainHome />} />
        {/* home for valuereach progres.. */}
        <Route path={`/${currCountryCode}/cars`} element={<CarHome />} />
        <Route path={`/${currCountryCode}/new-cars` || `/${currCountryCode}/new-cars?:slug`} element={<NewCar />} />
        <Route path={`/${currCountryCode}/car-Info/:carId`} element={<SingleProductPage />} />
        <Route path={`/${currCountryCode}/discover`} element={<DiscoverHome />} />
        <Route path={`/${currCountryCode}/discover/category/:categoryName`} element={<DiscoverCategoryPage />} />
        <Route path={`/${currCountryCode}/save`} element={<SaveHome />} />
        <Route path={`/${currCountryCode}/save/:pageName`} element={<SaveSubPage />} />
        <Route path={`/${currCountryCode}/user/dashboard`} element={<UserDashBoard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
