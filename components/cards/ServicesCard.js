export default function ServicesCard({number, img, title, description, alt}) {
    return (
        <div className="serviceCard">

            <div className="serviceCardImg">
                <img src={img} alt={alt} className="nftImg" />
                <div className="cardImgNumber">
                    <h2>{number}</h2>
                </div>
            </div>

            <div className="serviceCardText">
                <h2 className="serviceCardTitle">{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
}
