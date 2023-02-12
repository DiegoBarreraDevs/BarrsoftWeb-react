import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="keywords" content="blockchain, nft, token, dapp, web 3, barsoft, crypto, smart contract" />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="LogoFinalweb4.png" />
                <link rel="apple-touch-icon" href="LogoFinalweb4.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                <script src="https://kit.fontawesome.com/3afeab7e90.js" crossOrigin="anonymous"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}