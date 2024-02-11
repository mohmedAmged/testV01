import { useEffect, useState } from 'react';
import './App.css';
import MyNav from './components/myNav/MyNav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { baseURL, currCountryCode } from './functions/BaseURL';
import DefaultPage from './pages/defaultPage/DefaultPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import SingleDiscoverNamePage from './pages/singleDiscoverNamePage/SingleDiscoverNamePage';
import Register from './components/register/Register';
import Login from './components/login/Login';
// import { useCookies } from 'react-cookie';

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [scrollToggle, setScrollToggle] = useState(false);
  const navigator = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });

  const { data, error } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/countries`);
      const response = await fetchData.json();
      return response.data;
    },
  });

  useEffect(() => {
    if (currCountryCode === location?.pathname.split('/')[1]) {
      navigator(`${location?.pathname}${location?.search ? location?.search : ""}`);
    } else if (localStorage.getItem('curr-country')) {
      if (currCountryCode !== location?.pathname.split('/')[1] && location?.pathname.split('/')[1]) {
        localStorage.setItem('curr-country', location?.pathname.split('/')[1]);
        navigator(`${location?.pathname}${location?.search ? location?.search : ""}`);
        window.location.reload();
      } else {
        navigator(`/${currCountryCode}`);
        window.location.reload();
      }
    } else if (!currCountryCode && location?.search) {
      localStorage.setItem('curr-country', location?.pathname.split('/')[1]);
      navigator(`${location?.pathname}${location?.search ? location?.search : ""}`);
      window.location.reload();
    } else {
      navigator("/");
    }
  }, [currCountryCode]);

  const [token, setToken] = useState(localStorage.getItem('userToken') || '');
  const handleLoginOrRegister = (tok) => {
    // const expirationDate = new Date();
    // expirationDate.setFullYear(expirationDate.getFullYear() + 1000);
    const userToken = tok;
    localStorage.setItem('userToken',userToken);
    // setCookie('userToken', userToken , {path: `/` ,maxAge: expirationDate });
    setToken(userToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
      navigator(`${location.pathname}${location.search? location.search : ''}`);
    }else {
      navigator(`/${currCountryCode}`);
    }
  }, [localStorage.getItem('userToken')]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setToken('');
  };

  return (
    <>
      {
        !(
          (currentRoute.toLowerCase() === `/${currCountryCode}/login`.toLowerCase())
          ||
          (currentRoute.toLowerCase() === `/${currCountryCode}/register`.toLowerCase())
        ) &&
        <>
          <MyNav token={token} handleLogout={handleLogout} countriesData={data?.countries} scrollToggle={scrollToggle} />
          <ScrollToTopButton />
        </>
      }
      <Routes>
        <Route path='/' element={<DefaultPage countriesData={data?.countries} />} />
        <Route path={`/${currCountryCode}`} element={<MyMainHome />} />
        <Route path={`/${currCountryCode}/cars`} element={<CarHome />} />
        <Route path={`/${currCountryCode}/new-cars`} element={<NewCar />} />
        <Route path={`/${currCountryCode}/new-cars?:slug`} element={<NewCar />} />
        <Route path={`/${currCountryCode}/car-Info/:carId`} element={<SingleProductPage />} />
        <Route path={`/${currCountryCode}/discover`} element={<DiscoverHome />} />
        <Route path={`/${currCountryCode}/discover/:categoryName`} element={<DiscoverCategoryPage />} />
        <Route path={`/${currCountryCode}/:discoverName`} element={<SingleDiscoverNamePage token={token}/>} />
        <Route path={`/${currCountryCode}/save`} element={<SaveHome />} />
        <Route path={`/${currCountryCode}/save/:pageName`} element={<SaveSubPage />} />
        {
          token && <Route path={`/${currCountryCode}/user/dashboard`} element={<UserDashBoard countriesData={data?.countries} token={token} />} />
        }
        <Route
          path={`/${currCountryCode}/register`}
          element={<Register handleLoginOrRegister={handleLoginOrRegister} countriesData={data?.countries} />}
        />
        <Route
          path={`/${currCountryCode}/login`}
          element={<Login handleLoginOrRegister={handleLoginOrRegister} />}
        />
        <Route path='*' element={<PageNotFound error={error || 'Page Not Found'} />} />
      </Routes>
      {
        !(
          (currentRoute.toLowerCase() === `/${currCountryCode}/login`.toLowerCase())
          ||
          (currentRoute.toLowerCase() === `/${currCountryCode}/register`.toLowerCase())
        ) &&
        <MyFooter />
      }
    </>
  );
}

export default App;
