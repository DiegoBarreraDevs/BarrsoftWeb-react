import Layout from "../components/Layout";
import CheckOutCard from '../components/cards/CheckOutCard'
import Form from '../components/Form'

import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";

import Head from 'next/head'

const addUser = async (userObject) => {
    await addDoc(collection(db, "services"), { userObject });
    console.log("new user added");
};

const Nft = async (e) => {
    window.open("https://commerce.coinbase.com/checkout/698b2878-ec07-4f5e-9c31-c1ed99ac680b");
};
const Tokens = async (e) => {
    window.open("https://commerce.coinbase.com/checkout/f8809c51-3d12-4b0b-aead-b24a282726dc");
};
const SmartContract = async (e) => {
    window.open("https://commerce.coinbase.com/checkout/b9339343-ed20-472f-906e-9bdbaa2460bc");
};

const Services = () => (

    <Layout>

        <Head>
            <title>Barrsoft | Services</title>
            <meta name="description" content="All our services in this page, take a look of the prices and descriptions of all services." />
            <link rel="canonical" href="https://barrsoft.com/services" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <section className="checkoutSection">

            <h1 className='checkoutTitle'>Sales</h1>

            <div className="checkoutSales">
                <CheckOutCard
                    img="https://live.staticflickr.com/65535/51865829587_13b6d9bbd8_k.jpg"
                    payment={Nft}
                    title='NFT Collection'
                    price='250'
                    description='You are going to recieve a collection from 10 to 100 NFT. You will need to send our team the files for the creation of the Non Fungible Tokens.'
                    alt='NFT'
                />
                <CheckOutCard
                    img="https://live.staticflickr.com/65535/51867580300_fc7ce3e1b9_k.jpg"
                    payment={SmartContract}
                    title='Smart Contract Pack'
                    price='300'
                    description='You are going recieve up to 5 Smart Contracts that our team will develope for you. You will need to explain the team of developers what is the smart contract is supposed to do.'
                    alt='Smart Contract'
                />
                <CheckOutCard
                    img="https://live.staticflickr.com/65535/51866767816_f46ebe226f_k.jpg"
                    payment={Tokens}
                    title='Token ICO'
                    price='400'
                    description='Our team will develope a new token in any blockchain you want. You need to give us the details of the token as the name, logo, quantity of tokens and some more details.'
                    alt='Token'
                />
            </div>

            <h1 className="checkoutTitle">Custom Budget</h1>

            <Form addUser={addUser} />

        </section>

    </Layout>

);

export default Services;