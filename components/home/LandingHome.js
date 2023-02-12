export default function LandingHome() {
    return (
        <section className="landingSection">

            <div className="leftLanding">
                <div className="leftLandingContent">
                    <h2 className="h1Title">Barrsoft</h2>
                    <p className="slogan" >We make Blockchain easy</p>
                    <button className="btnLanding" >
                        <a href="#blockSection" className="btnA">Get Started</a>
                    </button>
                </div>
            </div>

            <div className="rightLanding">
                <img src='blockhome.png' alt="" className="rightLandingImg" />
            </div>

        </section>
    );
}
