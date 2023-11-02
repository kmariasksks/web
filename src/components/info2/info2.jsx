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
];

const Info2 = () => {
    return (
        <section className="info2">
            <div className="info__part2">
                {info2Data.map((info, index) => (
                    <div className="info__part2-column" key={index}>
                        <div className="info__part2-image-border">
                            <img className="info__part2-image" src={info.imageSrc} alt={info.alt} />
                        </div>
                        <div className='info__part2-text-position'>
                            <h3 className="info__part2-text-title">{info.title}</h3>
                            <p className="info__part2-text-pharagraph">{info.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Info2;