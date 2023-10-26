function Info() {
    return (
        <section className="info">
            <div className="info__part1">
                <img className="info__part1-image" src='images/info1.svg' alt="welcome photo"></img>
                <div className="info__part1-text">
                    <h2 className="info__part1-text-title">Welcome to the store!</h2>
                    <p className="info__part1-text-pharagraph">We open the door to a world of elegance and comfort,
                        where the table will become the heart of your home. In our store you will find exquisite tables
                        for various styles and designs - from classic to modern, from wood to glass. We have the perfect
                        table for every interior. Come to us and help us make your home even more elegant and cozy.
                    </p>
                </div>
            </div>
            <div className="info__part2">
                <div className="info__part2-column1">
                    <img className="info__part2-image" src='./images/info2.svg' alt="price photo"></img>
                    <h3 className="info__part2-text-title">Price</h3>
                    <p className="info__part2-text-pharagraph">Choosing our tables, you not only create an elegant interior,
                        but also save your budget. You can find the perfect table without extra costs.
                    </p>
                </div>
                <div className="info__part2-column2">
                    <img className="info__part2-image" src='./images/info3.svg' alt="quality photo"></img>
                    <h3 className="info__part2-text-title">Quality</h3>
                    <p className="info__part2-text-pharagraph">You get not just furniture,
                        but a symbol of quality that will stand the test of time and decorate your home for many years to come.
                    </p>
                </div>
                <div className="info__part2-column3">
                    <img className="info__part2-image" src='./images/info4.svg' alt="speed photo"></img>
                    <h3 className="info__part2-text-title">Speed</h3>
                    <p className="info__part2-text-pharagraph">Our team is committed
                        to providing you with fast and efficient service so that you can receive your order as soon as possible.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Info;