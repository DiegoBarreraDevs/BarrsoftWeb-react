export default function BlockHome() {
    return (
        <section className="blockSection" id="blockSection">

            <div className="leftBlock">
                <img src='blocvioleta.png' alt="blockchain" className="leftBlockImg" />
            </div>

            <div className="rightBlock">
                <h2 className="rightBlockTitle" >Why Blockchain?</h2>
                <p className="rightBlockText">In a few words, a <b>Blockchain</b> is a digital ever-growing list of data records. Such a list is comprised of many <b>blocks of data</b>, which are organized in chronological order and are linked and <b>secured by cryptographic proofs</b>. <br/>
                Blockchain transactions occur within a peer-to-peer network of globally distributed computers (nodes). Each node maintains a copy of the blockchain and contributes to the functioning and security of the network. This is what makes <b>Bitcoin</b> a decentralized digital currency that is borderless, censorship-resistant, and that does not require third-party intermediation.<br />
                Blockchain is a better, safer way to record activity and keep data fresh, while maintaining a record of its history. <b>The data can't be corrupted by anyone or accidentally deleted, and you benefit from both a historical trail of data, plus an instantly up-to-date record.</b> <br />
                The technology of blockchain may also be adapted and implemented in other activities, such as healthcare, insurance, supply chain, IOT, and so on. Although it was designed to operate as a distributed ledger (on decentralized systems), <b>it may also be deployed on centralized systems as a way to assure data integrity or to reduce operational costs.</b>
                </p>
            </div>

        </section>
    );
}
