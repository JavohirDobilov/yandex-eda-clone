
import '@splidejs/react-splide/css';
import React, { useState } from 'react'
import "../ProductScroll/productScroll.css"
import img1 from "../../img/productcard/1.png"
import img2 from "../../img/productcard/2.png"
import img3 from "../../img/productcard/3.png"
import img4 from "../../img/productcard/4.png"
import img5 from "../../img/productcard/5.png"

import prev from "../../img/productcard/arrow.png"
import next from "../../img/productcard/arrow.png"


const ProductScroll = () => {
    const [xitpage, setXitPage] = useState(1)

    const xitprodaj = [
        {
            id: 1,
            image: img4,
            color: "rgb(24, 216, 65)"
        },
        {
            id: 2,
            image: img1,
            title: 'Диван "Ergonomic Rubber Shoes”',
            color: "rgb(22, 31, 24)"
        },
        {
            id: 3,
            image: img2,
            title: 'Диван "Ergonomic Rubber Shoes”',
            color: "rgb(6, 28, 156)"
        },
        {
            id: 4,
            image: img3,
            title: 'Диван "Ergonomic Rubber Shoes”',
            color: "rgb(200, 24, 216)"
        },
        {
            id: 5,
            image: img4,
            title: 'Диван "Ergonomic Rubber Shoes”',
            price: "35 990 ₽"
        }, {
            id: 6,
            image: img5,
            title: 'Диван "Ergonomic Rubber Shoes”',
            color: "rgb(216, 139, 24)"
        }, {
            id: 7,
            image: img1,
            title: 'Диван "Ergonomic Rubber Shoes”',

        }, {
            id: 8,
            image: img2,
            title: 'Диван "Ergonomic Rubber Shoes”',

        },
        {
            id: 9,
            image: img3,
            title: 'Диван "Ergonomic Rubber Shoes”',

        },
        {
            id: 10,
            image: img4,
            title: 'Диван "Ergonomic Rubber Shoes”',

        },
        {
            id: 11,
            image: img5,
            title: 'Диван "Ergonomic Rubber Shoes”',

        },
        {
            id: 12,
            image: img1,
            title: 'Диван "Ergonomic Rubber Shoes”',

        },
        {
            id: 13,
            image: img2,
            title: 'Диван "Ergonomic Rubber Shoes”',
        }
    ];

    const sliderXitbody = {
        width: `${(100 / 5) * xitprodaj.length}%`,
        display: 'flex',
        transform: `translateX(-${100 * (xitpage - 1) / xitprodaj.length}%)`,
        transition: 'all 0.4s ease'
    }
    const sliderXitItem = {
        width: `${(100 / xitprodaj.length)}%`,
    }
    return (

        <div className='product-carousel'>
            <div className='container'>
                <div className='slider-xit-prodaj'>
                    <div className='product-slider-vse'>
                        <div className='slider-xit-prodaj-title'>
                            Продукты
                            
                        </div>
                        <button className='slider-xit-prodaj-btn'>
                            <div className='slider-xit-prodaj-btn-tit'>
                                все
                                <img src={next} />
                            </div>
                        </button>
                    </div>
                    <div className='product-carousel-wrapper'>
                        <div className='productslider-next-prev'>
                            <button className={(xitpage <= 1 && 'hide') + (' slider-btn1')} onClick={() => xitpage > 1 && setXitPage(xitpage - 1)}>
                                <img src={prev} />
                            </button>
                            <button className={(xitpage >= (xitprodaj.length - 5) && 'hide') + (' slider-btn2')} onClick={() => xitpage < (xitprodaj.length - 5) && setXitPage(xitpage + 1)}>
                                <img src={next} />
                            </button>
                        </div>
                        <div className='products-slider'>
                            <div style={sliderXitbody}>
                                {xitprodaj.map(item => (
                                    <div style={sliderXitItem} key={item.id} className="product-slider-item">

                                        {/* <img src={item.image} /> */}
                                        <div className='product-card' style={{ backgroundColor: item.color }}>
                                            <img src={item.image} />
                                            {item.text ? item.text : ""}
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

export default ProductScroll