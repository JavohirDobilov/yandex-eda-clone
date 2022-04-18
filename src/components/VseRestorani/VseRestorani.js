import React from 'react'
import "../VseRestorani/vseRestorani.css"
import image1 from "../../img/VseRestoranProducts/1.jpg"
import image2 from "../../img/VseRestoranProducts/2.jpeg"
import image3 from "../../img/VseRestoranProducts/3.jpg"
import image4 from "../../img/VseRestoranProducts/4.jpg"
import image5 from "../../img/VseRestoranProducts/5.jpg"
import image6 from "../../img/VseRestoranProducts/6.jpeg"
import image7 from "../../img/VseRestoranProducts/7.jpg"
import image8 from "../../img/VseRestoranProducts/8.jpg"
import image9 from "../../img/VseRestoranProducts/9.jpeg"
import image10 from "../../img/VseRestoranProducts/10.jpg"
import image11 from "../../img/VseRestoranProducts/11.jpg"
import image12 from "../../img/VseRestoranProducts/12.jpg"
import image13 from "../../img/VseRestoranProducts/13.jpg"
import image14 from "../../img/VseRestoranProducts/14.jpeg"
import image15 from "../../img/VseRestoranProducts/15.jpg"
import image16 from "../../img/VseRestoranProducts/16.jpg"
import image17 from "../../img/VseRestoranProducts/17.jpg"
import image18 from "../../img/VseRestoranProducts/18.jpg"
import star from "../../img/VseRestoranProducts/star.png"
import gift from "../../img/VseRestoranProducts/gift.png"

const VseRestorani = () => {

    const vseRestoranProducts = [
        {
            id: 1,
            img: image1,
            title: "True Bread Bakery",
            rekomend: 4.7
        },
        {
            id: 2,
            img: image2,
            title: "True Bread Bakery",
            rekomend: 4.6
        },
        {
            id: 3,
            img: image3,
            title: "True Bread Bakery",
            rekomend: 4.5
        },
        {
            id: 4,
            img: image4,
            title: "True Bread Bakery",
            rekomend: 4.7
        },
        {
            id: 5,
            img: image5,
            title: "True Bread Bakery",
            rekomend: 4.6
        },
        {
            id: 6,
            img: image6,
            title: "True Bread Bakery",
            rekomend: 4.8
        },
        {
            id: 7,
            img: image7,
            title: "True Bread Bakery",
            rekomend: 4.3
        },
        {
            id: 8,
            img: image8,
            title: "True Bread Bakery",
            rekomend: 4.9
        },
        {
            id: 9,
            img: image9,
            title: "True Bread Bakery",
            rekomend: 4.5
        },
        {
            id: 10,
            img: image10,
            title: "True Bread Bakery",
            rekomend: 4.6
        },
        {
            id: 11,
            img: image11,
            title: "True Bread Bakery",
            rekomend: 4.3
        },
        {
            id: 12,
            img: image12,
            title: "True Bread Bakery",
            rekomend: 4.6
        },
        {
            id: 13,
            img: image13,
            title: "True Bread Bakery",
            rekomend: 4.7
        },
        {
            id: 14,
            img: image14,
            title: "True Bread Bakery",
            rekomend: 4.5
        },
        {
            id: 15,
            img: image15,
            title: "True Bread Bakery",
            rekomend: 4.6
        },
        {
            id: 16,
            img: image16,
            title: "True Bread Bakery",
            rekomend: 4.8
        },
        {
            id: 17,
            img: image17,
            title: "True Bread Bakery",
            rekomend: 4.6
        },
        {
            id: 18,
            img: image18,
            title: "True Bread Bakery",
            rekomend: 4.7
        },
    ]
    return (
        <div className='vse-products'>
            <div className='container'>
                <div className='vse-products-title'>
                    Все рестораны 
                </div>
                <div className='vse-products-contens'>
                    {vseRestoranProducts.map(item => (
                        <div key={item.id} className='vse-restoran-product'>
                            <div className='vse-restoran-card'>
                                <div className='sale-off'>
                                    <img src={gift}/>
                                </div>
                                <div className='vse-restoran-card-image'>
                                    <img src={item.img} />
                                </div>
                                <div className='vse-restoran-card-context'>
                                    <div className='vse-restoran-context-box'>
                                        {item.title}
                                    </div>
                                    <div className='vse-restoran-context-box-recom'>
                                        <img src={star}/>
                                        {item.rekomend}
                                        Хорошо
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VseRestorani