import Layout from "../components/Layout";
import LandingHome from '../components/home/LandingHome';
import BlockHome from '../components/home/BlockHome';
import ServicesHome from '../components/home/ServicesHome';

import Button from '../components/buttoms/Button';
import Title from '../components/Title';
import ContactComplete from '../components/contact/ContactComplete';

import Head from 'next/head'
import Web3 from "../components/home/Web3";
// import Clients from "../components/Clients";

const Index = () => (

    <Layout>

        <Head>
            <title>Barrsoft | Home</title>
            <meta name="description" content="Welcome to the offcial website of Barsoft, we create nft, tokens, dapps and much more in blockchains for you." />
            <link rel="canonical" href="https://barrsoft.com"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="homePage">
            <LandingHome />
            <Web3/>
            <BlockHome />
            <Title title="Services" />
            <ServicesHome
                number='01.'
                img="https://live.staticflickr.com/65535/51865829587_13b6d9bbd8_k.jpg"
                title='Non Fungible Tokens (NFT)'
                description='A non-fungible token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded.
        NFT ledgers claim to provide a public certificate of authenticity or proof of ownership.'
                alt='NFT'
                number3='03.'
                img3='https://live.staticflickr.com/65535/51866767816_f46ebe226f_k.jpg'
                title3='Tokens'
                description3='Unlike coins, tokens do not have their own blockchain. Instead, they operate on other crypto coins blockchains, such as Ethereum. Some of the most commonly seen tokens on Ethereum include BAT, BNT, Tether, and USDC. '
                alt3='Token'
                number2='02.'
                img2="https://live.staticflickr.com/65535/51868385025_4fbf56d5df_k.jpg"
                title2='Decentralized Apps (DApps)'
                description2='Decentralized applications are digital applications that run on a blockchain network of computers instead of relying on a single computer or server. Because dApps are decentralized, they are free from the control and interference of a single authority.'
                alt2='Decentralized applications'
            />
            <ServicesHome
                number='04.'
                img="https://live.staticflickr.com/65535/51867653846_8dec0003c8_k.jpg"
                title='Smart Contracts'
                description='Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss.'
                alt='Smart Contract'
                number2='05.'
                img2="https://live.staticflickr.com/65535/51868321535_0fc25af39c_k.jpg"
                title2='Crypto Payments'
                description2='Cryptocurrency is considered more secure than credit and debit card payments. This is because they do not need third-party verification. When a customer pays with cryptocurrency, their data isn’t stored in a centralized hub where data breaches commonly occur.'
                alt2='Crypto'
                number3='06.'
                img3="https://live.staticflickr.com/65535/51868321580_e4e435f7e8_k.jpg"
                title3='Crypto Web Pages'
                description3='Think about the benefits of having a web page that accepts payments in crypto or that the users do not need anymore to create an account in your website, instead they can simply conncet with their wallet and make the user experience greatter.'
                alt3='Web page'
            />
            <Button />
            {/* <Clients/> */}
            <ContactComplete />

        </div>
    </Layout>

);

export default Index;