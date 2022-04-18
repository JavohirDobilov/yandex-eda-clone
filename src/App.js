import './App.css';
import React, {useState ,useLayoutEffect} from "react"
import Header from './components/Header/Header';

import ProductScroll from './components/ProductScroll/ProductScroll';
import RestoranScroll from './components/restoranScroll/restoranScroll';
import Navbar from './components/Navbar/Navbar';
import {Route,Routes} from "react-router-dom";
import VseProducts from './page/VseProducts/VseProducts';
import TopProducts from './page/TopProducts/TopProducts';


function App() {


  const [scroll, setScroll] = useState(false)

  useLayoutEffect(()=>{
    const handleScroll =()=> {
      setScroll(window.scrollY>0)
    }
    window.addEventListener("scroll", handleScroll)

    return () =>window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <>
    <div className="App">
      <div className='header'>
        <Header scroll={scroll}/>
        <ProductScroll/>
        <RestoranScroll/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<VseProducts/>}/>
          <Route path='/top' element={<TopProducts/>}/>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
