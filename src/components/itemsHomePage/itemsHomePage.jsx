const ItemsHomePage = ({ imageSrc,
    alt,
    title,
    text
}) => {
    return (
        <div className="info__part2-column">
            <div className="info__part2-image-border">
                <img className="info__part2-image" src={imageSrc} alt={alt} />
            </div>
            <div className='info__part2-text-position'>
                <h3 className="info__part2-text-title">{title}</h3>
                <p className="info__part2-text-pharagraph">{text}</p>
            </div>
        </div>
    );
}

export default ItemsHomePage;
