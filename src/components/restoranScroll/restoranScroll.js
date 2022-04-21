
import React, { useState } from 'react'
import "../restoranScroll/restoranScrool.css"
import img1 from "../../img/productcard/img1.jpg"
import prev from "../../img/productcard/arrow.png"
import next from "../../img/productcard/arrow.png"
import obed from  "../../img/restocard/obedd.png"
import hamburger from "../../img/restocard/hamburger.png"


const RestoranScroll = () => {
    const [restopage, setRestoPage] = useState(1)

    const restoprodaj = [
        {
            id: 1,
            image: hamburger,
            title: 'Фасфуд',

        },
        {
            id: 2,
            image: hamburger,
            title: 'Скидки до 30%     ',

        },
        {
            id: 3,
            image: hamburger,
            title: 'Блюдо в подарок  ',

        },
        {
            id: 4,
            image: hamburger,
            title: 'Аксия 1+1  ',

        }, {
            id: 5,
            image: hamburger,
            title: 'Еда с кешбэком  ',

        }, {
            id: 6,
            image: hamburger,
            title: 'Сытная еда   ',

        }, {
            id: 7,
            image: hamburger,
            title: 'Сочная бургеры   ',

        },
        {
            id: 8,
            image: hamburger,
            title: 'Еда из Депо',

        },
        {
            id: 9,
            image: hamburger,
            title: 'Ужинаем красиво',

        },
        {
            id: 10,
            image: hamburger,
            title: 'Класная пицца',

        },
        {
            id: 11,
            image: hamburger,
            title: 'Как вы Азии',

        },
        {
            id: 12,
            image: hamburger,
            title: 'Как дома',

        }
    ];

    const sliderXitbody = {
        width: `${(100 / 7) * restoprodaj.length}%`,
        display: 'flex',
        transform: `translateX(-${100 * (restopage - 1) / restoprodaj.length}%)`,
        transition: 'all 0.4s ease'
    }
    const sliderXitItem = {
        width: `${(100 / restoprodaj.length)}%`,
    }
    return (

        <div className='product-carousel'>
            <div className='container'>
                <div className='slider-xit-prodaj'>
                    <div className='product-slider-vse'>
                        <div className='slider-xit-prodaj-title'>
                            Рестораны
                        </div>
                        <div className=''>
                            
                        </div>
                    </div>

                    <div className='product-carousel-wrapper'>
                        <div className='restoslider-next-prev'>
                            <button className={(restopage <= 1 && 'hide') + (' slider-btn1')} onClick={() => restopage > 1 && setRestoPage(restopage - 1)}>
                                <img src={prev} />
                            </button>
                            <button className={(restopage >= (restoprodaj.length - 5) && 'hide') + (' slider-btn2')} onClick={() => restopage < (restoprodaj.length - 5) && setRestoPage(restopage + 1)}>
                                <img src={next} />
                            </button>
                        </div>
                        <div className='restoran-slider'>
                            <div style={sliderXitbody}>
                                {restoprodaj.map(item => (
                                    <div style={sliderXitItem} key={item.id} className="product-slider-item">

                                        <div className='resto-slider-card'>
                                            <div className='resto-cart-title'>
                                                {item.title}
                                            </div>
                                            <img src={item.image} />
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestoranScroll