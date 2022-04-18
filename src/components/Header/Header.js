import React from 'react'
import "../Header/header.css"
import logo from "../../img/header/edaLogo.png"
import searchSvg from "../../img/header/searchSvg.svg"
import telegram from "../../img/header/telegram.png"
import menu from "../../img/header/list.png"
import user from "../../img/header/user.png"

const Header = ({ scroll }) => {

    if (scroll) {
        return (
            <div className='header-1'>
                <div className='header-container'>
                    <div className='header-row'>
                        <div className='header-logo-search-container'>
                            <div className='header-logo'>
                                {/* <img src={logo} /> */}
                                Яндекс Еда
                            </div>
                            <div className='header-search-adress'>
                                <div className='header-search'>
                                    <div className='header-search-input-flex'>
                                        <img src={searchSvg} />
                                        <input placeholder='fdsfdfsdfsdf' type="text" />
                                    </div>
                                    <button className='header-search-but'>
                                        Найти
                                    </button>
                                </div>
                                <button className='header-adress'>
                                    <img src={telegram} />
                                    <div className='header-adress-title'>
                                        Укажите адрес доставки
                                    </div>
                                </button>
                            </div>
                        </div>


                        <div className='header-zakaz-menu-login'>
                            <div className='header-zakaz-menu'>
                                <img src={menu} />
                                Заказы
                            </div>
                            <div className='header-zakaz-login'>
                                <img src={user} />
                            </div>
                        </div>

                    </div>
                   
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='header-2'>
                <div className='header-container'>
                    <div className='header-row'>
                        <div className='header-logo-search-container'>
                            <div className='header-logo'>
                                {/* <img src={logo} /> */}
                                Яндекс Еда
                            </div>
                            <div className='header-search-adress'>
                                <div className='header-search'>
                                    <div className='header-search-input-flex'>
                                        <img src={searchSvg} />
                                        <input placeholder='fdsfdfsdfsdf' type="text" />
                                    </div>
                                    <button className='header-search-but'>
                                        Найти
                                    </button>
                                </div>
                                <button className='header-adress'>
                                    <img src={telegram} />
                                    <div className='header-adress-title'>
                                        Укажите адрес доставки
                                    </div>
                                </button>
                            </div>
                        </div>


                        <div className='header-zakaz-menu-login'>
                            <div className='header-zakaz-menu'>
                                <img src={menu} />
                                Заказы
                            </div>
                            <div className='header-zakaz-login'>
                                <img src={user} />
                            </div>
                        </div>

                    </div>
                    {/* <div className='header-liner'>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header