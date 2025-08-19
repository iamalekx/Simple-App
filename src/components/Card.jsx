function Card({ title, price, image }) {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="..." />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Card;
