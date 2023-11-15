
import React, { useState } from "react";
import ItemsHomePage from "../itemsHomePage/itemsHomePage";
import Button from "../button/button";

const info2Data = [
    {
        imageSrc: './images/info2.svg',
        alt: 'price photo',
        title: 'Price',
        text: 'Choosing our tables, you not only create an elegant interior, but also save your budget. You can find the perfect table without extra costs.',
    },
    {
        imageSrc: './images/info3.svg',
        alt: 'quality photo',
        title: 'Quality',
        text: 'You get not just furniture, but a symbol of quality that will stand the test of time and decorate your home for many years to come.',
    },
    {
        imageSrc: './images/info4.svg',
        alt: 'speed photo',
        title: 'Speed',
        text: 'Our team is committed to providing you with fast and efficient service so that you can receive your order as soon as possible.',
    },
    {
        imageSrc: './images/info5.jpg',
        alt: 'comfort photo',
        title: 'Comfort',
        text: 'Our furniture is designed for maximum comfort, so you can relax and enjoy your time at home.'
    },
    {
        imageSrc: './images/info6.jpg',
        alt: 'style photo',
        title: 'Style',
        text: 'Elevate your home with our stylish furniture that adds a touch of elegance to any room.',
    },
    {
        imageSrc: './images/info7.jpg',
        alt: 'durability photo',
        title: 'Durability',
        text: 'We use high-quality materials to ensure the durability and longevity of our furniture.',
    },
];

const Info2 = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="info2">
            <div className="info__part2">
                {info2Data.slice(0, showMore ? info2Data.length : 3).map((info, index) => (
                    <ItemsHomePage
                        key={index}
                        imageSrc={info.imageSrc}
                        alt={info.alt}
                        title={info.title}
                        text={info.text}
                    />
                ))}
            </div>
            <Button showMore={showMore} setShowMore={setShowMore} />
        </section>
    );
};

export default Info2;