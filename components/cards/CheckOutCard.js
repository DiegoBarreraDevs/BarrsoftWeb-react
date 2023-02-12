export default function CheckOutCard({img, payment, title, price, description, alt}) {
    return (
        <div className="checkOutCard">

            <div className="checkOutCardImg">
                <img src={img} alt={alt} className="checkOutCardImage" />
            </div>

            <div className="checkOutCardContent">
                <h2 className="checkOutCardTitle">{title}</h2>
                <h2 className="checkOutCardPrice">Price: {price} USD</h2>
                <p>{description}</p>
            </div>

            <div className="checkOutCardBtn">
                <button 
                className="checkOutCardButton"
                onClick={payment} 
                >Buy</button>
            </div>

        </div>
    );
}
