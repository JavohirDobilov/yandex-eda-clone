
import '@splidejs/react-splide/css';
import React, { useState } from 'react'
import "../AksiyaSlider/aksiyaslider.css"
import image from "../../img/aksiya/img1.jpg"

import flame from "../../img/aksiya/flamepng.png"

import prev from "../../img/productcard/arrow.png"
import next from "../../img/productcard/arrow.png"

import img1 from "../../img/Novinki/1.jpg"
import img2 from "../../img/Novinki/2.jpg"
import img3 from "../../img/Novinki/3.jpg"
import img4 from "../../img/Novinki/4.jpg"
import img5 from "../../img/Novinki/5.jpg"
import img6 from "../../img/Novinki/6.jpg"
import img7 from "../../img/Novinki/7.jpg"
import img8 from "../../img/Novinki/8.jpg"



const Novinki = () => {
    const [aksiyaPage, setAksiyaPage] = useState(1)

    const askiyaProduct = [
        {
            id: 1,
            image: img1,
            title:"VerryBeryLab"
         
        },
        {
            id: 2,
            image: img2,
            title: 'Ma Mi Ханонская Лапша',
            
        },
        {
            id: 3,
            image: img3,
            title: 'Шаурма и лепёшка',
            
        },
        {
            id: 4,
            image: img4,
            title: 'Айва',
            
        },
        {
            id: 5,
            image: img5,
            title: 'Варламов.Есть',
            
        }, {
            id: 6,
            image: img6,
            title: 'Ведомостию.Ланч',
            
        }, {
            id: 7,
            image: img7,
            title: 'Shuk na Karmel',

        }, {
            id: 8,
            image: img8,
            title: 'EazzyPizzy',

        },
        
    ];

    const sliderXitbody = {
        width: `${(100 / 4) * askiyaProduct.length}%`,
        display: 'flex',
        transform: `translateX(-${100 * (aksiyaPage - 1) / askiyaProduct.length}%)`,
        transition: 'all 0.4s ease'
    }
    const sliderXitItem = {
        width: `${(100 / askiyaProduct.length)}%`,
    }
    return (

        <div className='product-carousel'>
            <div className='container'>
                <div className='slider-xit-prodaj'>
                    <div className='product-slider-vse'>
                        <div className='aksiyaslider-xit-prodaj-title'>
                           Новинки недели
                            
                        </div>
                        <div className='slider-xit-prodaj-btnn'>
                            
                        </div>
                    </div>
                    <div className='product-carousel-wrapper'>
                        <div className='slider-next-prev'>
                            <button className={(aksiyaPage <= 1 && 'hide') + (' aksiyaslider-btn1')} onClick={() => aksiyaPage > 1 && setAksiyaPage(aksiyaPage - 1)}>
                                <img src={prev} />
                            </button>
                            <button className={(aksiyaPage >= (askiyaProduct.length - 5) && 'hide') + (' aksiyaslider-btn2')} onClick={() => aksiyaPage < (askiyaProduct.length - 5) && setAksiyaPage(aksiyaPage + 1)}>
                                <img src={next} />
                            </button>
                        </div>
                        <div className='aksiyaproduct-slider'>
                            <div style={sliderXitbody}>
                                {askiyaProduct.map(item => (
                                    <div style={sliderXitItem} key={item.id} className="aksiyaproduct-slider-item">

                                        {/* <img src={item.image} /> */}
                                        <div className='aksiyacard' style={{ backgroundColor: item.color }}>
                                            <img src={item.image} />
                                            <div className='aksiyacard-text'>
                                                {item.title}
                                                <div className='aksiyacard-rekomend'>
                                                    <img src={flame}/>
                                                    4.8 Рекомендуем 
                                                </div>
                                            </div>
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

export default Novinki