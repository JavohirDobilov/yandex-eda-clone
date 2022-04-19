import React, { useState } from 'react'
import "./navbar.css"
import arrow from "../../img/navbar/arr.png"
import filter from "../../img/navbar/filter.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [item, setItem] = useState(1)


    const [eshyo, setEshyo] = useState(false);
    const [dostavkaFilter, setDostavkaFilter] = useState("")
    const [dostavka, setDostavka] = useState(false)
    const [sortirovkaFilter, setSortirovkaFilter] = useState("")
    const [sortirovka, setSortirovka] = useState(false)


    const [sevodzav,setSevodZav] = useState(1)

    const eshyoOptions = [{ id: 1, title: "Бургеры" },
    { id: 2, title: "Пицца" },
    { id: 3, title: "Десерты" },
    { id: 4, title: "Постное" },
    { id: 5, title: "Грузия" },
    { id: 6, title: "Шашлык" },
    { id: 7, title: "Здоровая" },
    { id: 8, title: "Вок" },
    { id: 9, title: "Завтраки" },
    { id: 10, title: "Обед" },
    { id: 11, title: "Кофе" },
    { id: 12, title: "Итальянская" },
    { id: 13, title: "Русская" },
    { id: 14, title: "Сендвичи" },
    { id: 15, title: "Шурма" },
    { id: 16, title: "Фастфуд" },
    { id: 17, title: "Морепродукти" },
    { id: 18, title: "Стейки" },
    { id: 19, title: "Пироги" },
    { id: 20, title: "Випечка" },
    { id: 21, title: "Вегги" },
    { id: 22, title: "Для детей" },
    { id: 23, title: "Балчук" },
    { id: 24, title: "Маросейка" },
    ]

    const dostSegodnyaDate = [
        { id: 1, date: "сейчас" },
        { id: 2, date: "17:00" },
        { id: 3, date: "17:30" },
        { id: 4, date: "18:00" },
        { id: 5, date: "18:30" },
        { id: 6, date: "19:00" },
        { id: 7, date: "19:30" },
        { id: 8, date: "20:00" },
        { id: 9, date: "20:30" },
        { id: 10, date: "21:00" },
        { id: 11, date: "21:30" },
        { id: 12, date: "22:00" },
        { id: 13, date: "22:30" }
    ]
    const dosSavtraDate = [
        { id: 1, date: "00:00" },
        { id: 2, date: "01:00" },
        { id: 3, date: "01:30" },
        { id: 4, date: "02:00" },
        { id: 5, date: "02:30" },
        { id: 6, date: "03:00" },
        { id: 7, date: "03:30" },
        { id: 8, date: "04:00" },
        { id: 9, date: "04:30" },
        { id: 10, date: "05:00" },
        { id: 11, date: "05:30" }
    ]
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar-contents'>
                    <div className='navbar-items'>
                        <Link to="/"><div onClick={() => setItem(1)} className={(item === 1 && "active") + (' navbar-item')}>
                            Все
                        </div>
                        </Link>
                        <Link to="/top"><div onClick={() => setItem(2)} className={(item === 2 && "active") + (' navbar-item')}>
                            Топ
                        </div>
                        </Link>
                        <Link to="/"><div onClick={() => setItem(3)} className={(item === 3 && "active") + (' navbar-item')}>
                            Китайская
                        </div>
                        </Link>
                        <Link to="/"><div onClick={() => setItem(4)} className={(item === 4 && "active") + (' navbar-item')}>
                            Суши
                        </div>
                        </Link>
                        <div onClick={() => { setEshyo(!eshyo) }} className='navbar-item-2'>
                            <div className='navbar-item-eshyo'>
                                Ещё
                                <img src={arrow} />
                            </div>
                            <div className="navbar-eshyo-content">
                                <div className={(eshyo && "active") + (" navbar-eshyo-items")}>

                                    {eshyoOptions.map(item => (
                                        <div key={item.id} onClick={() => setEshyo(!eshyo)} className='navbar-eshyo-item'>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-sorts'>
                        <div className='navbar-sorts-dostavka'>
                            <div onClick={() => setDostavka(!dostavka)} style={{display:'flex'}}>
                            <div className='navbar-sorts-dostavka-title'>
                                Доставка:
                            </div>
                            <div className='navbar-sorts-dostavka-time'>
                                сейчас
                                <img src={arrow} />
                            </div>
                            </div>
                            <div className='navbar-dostavka-content'>
                                <div className={(dostavka && "active") + (" content")}>
                                    <div className='navbar-dostavka-content-button'>
                                        <div onClick={()=>setSevodZav(1)}className={(sevodzav ===1 && "active")+(' navbar-dostavka-content-button-box')}>
                                            Сегодня
                                        </div>
                                        <div onClick={()=>setSevodZav(2)}className={(sevodzav ===2 && "active")+(' navbar-dostavka-content-button-box')}>
                                            Завтра
                                        </div>
                                    </div>
                                </div>
                                <div className={(dostavka && "active") + (" navbar-dostavka-items")}>
                                    {sevodzav ===1 ? 
                                      dostSegodnyaDate.map(item => (
                                        <div key={item.id} onClick={() => setDostavka(!dostavka)} className="navbar-dostavka-item">

                                            {item.date}
                                        </div>
                                    )) :
                                        dosSavtraDate.map(item => (
                                          <div key={item.id} onClick={() => setDostavka(!dostavka)} className="navbar-dostavka-item">
  
                                              {item.date}
                                          </div>
                                      ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div onClick={()=>setSortirovka(!sortirovka)} className='navbar-sorts-sortirovka'>
                            <div className='navbar-sorts-sortirovka-icon'>
                                <img src={filter} />
                            </div>
                            <div className='navbar-sorts-sortirovka-title'>
                                Сортировка
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar