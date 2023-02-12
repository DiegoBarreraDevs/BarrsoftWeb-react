import AboutLanding from "../components/about/AboutLanding";
import Layout from "../components/Layout";

import Head from 'next/head'

const About = () => (

    <Layout>

        <Head>
            <title>Barrsoft | About</title>
            <meta name="description" content="Take a look about our team here in Barsoft, where we make blockchain easy." />
            <link rel="canonical" href="https://barrsoft.com/about" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <AboutLanding />
    </Layout>

);


export default About;