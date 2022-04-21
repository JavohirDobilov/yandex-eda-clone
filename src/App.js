import './App.css';
import React, { useState, useLayoutEffect } from "react"
import chat from "./img/chat.png"
import arrow from "./img/right-arrow.png"
import x from "./img/x.png"
import Header from './components/Header/Header';

import ProductScroll from './components/ProductScroll/ProductScroll';
import RestoranScroll from './components/restoranScroll/restoranScroll';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import VseProducts from './page/VseProducts/VseProducts';
import TopProducts from './page/TopProducts/TopProducts';
import Footer from './components/Footer/Footer';


function App() {
  const [message, setMessage] = useState(false)

  const messageItem = [
    { id: 1, title: "Хочу сделать заказ" },
    { id: 2, title: "Что-то не так с приложением" },
    { id: 3, title: "Хочу сотрудничать" },
    { id: 4, title: "Хочу Яндекс Еду в своем городе" },
    { id: 5, title: "Хочу Лавку в своем городе" },
    { id: 6, title: "Хочу стать курьером" },
    { id: 7, title: "Хочу сказать спасибо" },
    { id: 8, title: "Xoчу пожаловаться " }
  ]


  const [scroll, setScroll] = useState(false)





  useLayoutEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <div className="App">
        <div className='header'>
          <Header scroll={scroll} />
          <ProductScroll />
          <RestoranScroll />
          <Navbar />
          <Routes>
            <Route path='/' element={<VseProducts />} />
            <Route path='/top' element={<TopProducts />} />
          </Routes>
          <Footer />
        </div>
        <div className='message-button'>
          <div onClick={() => setMessage(!message)} className='message'>
            <div className='message-icon'>
              <img src={!message ? chat : x} />
            </div>
          </div>
          <div className='message-content'>
            <div className={(message && "active") + (' message-content-items')}>
              {messageItem.map(item => (
                <div key={item.id} className='message-item-box'>
                  <div  className='message-content-item'>
                    {item.title}
                    <img src={arrow}/>
                  </div>
                  <div className='message-item-liner'>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
