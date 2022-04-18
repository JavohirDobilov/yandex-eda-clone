import React, { useState } from 'react'
import "./navbar.css"
import arrow from "../../img/navbar/arr.png"
import filter from "../../img/navbar/filter.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [item, setItem] = useState(1)


    const [eshyo,setEshyo] = useState(false);
    const [dostavka,setDostavka] = useState(false)

    const eshyoOptions = [{id:1,title:"Бургеры"},
                          {id:2,title:"Пицца"},
                          {id:3,title:"Десерты"},
                          {id:4,title:"Постное"},
                          {id:5,title:"Грузия"},
                          {id:6,title:"Шашлык"},
                          {id:7,title:"Здоровая"},
                          {id:8,title:"Вок"},
                          {id:9,title:"Завтраки"},
                          {id:10,title:"Обед"},
                          {id:11,title:"Кофе"},
                          {id:12,title:"Итальянская"},
                          {id:13,title:"Русская"},
                          {id:14,title:"Сендвичи"},
                          {id:15,title:"Шурма"},
                          {id:16,title:"Фастфуд"},
                          {id:17,title:"Морепродукти"},
                          {id:18,title:"Стейки"},
                          {id:19,title:"Пироги"},
                          {id:20,title:"Випечка"},
                          {id:21,title:"Вегги"},
                          {id:22,title:"Для детей"},
                          {id:23,title:"Балчук"},
                          {id:24,title:"Маросейка"},
    ]

    const dostSegodnyaDate = [
        {id:1,date:"сейчас"},
        {id:2,date:"15:30"}
    ]
    const dosSavtraDate = [
        {id:1,date:"12:00"},
        {id:2,date:"14:00"}
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
                        <div onClick={()=>{setEshyo(!eshyo)}} className='navbar-item-2'>
                            <div className='navbar-item-eshyo'>
                                Ещё
                                <img src={arrow}/>
                            </div>
                            <div  className = "navbar-eshyo-content">
                                <div className = {(eshyo && "active")+(" navbar-eshyo-items")}>
                                    
                                    {eshyoOptions.map(item=>(
                                        <div key ={item.id} onClick = {()=>setEshyo(!eshyo)} className='navbar-eshyo-item'>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-sorts'>
                        <div onClick={()=>setDostavka(!dostavka)}className='navbar-sorts-dostavka'>
                            <div className='navbar-sorts-dostavka-title'>
                                Доставка:
                            </div>
                            <div className='navbar-sorts-dostavka-time'>
                                сейчас
                                <img src={arrow}/>
                            </div>
                        </div>

                        <div className='navbar-sorts-sortirovka'>
                            <div className='navbar-sorts-sortirovka-icon'>
                                <img src={filter}/>
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