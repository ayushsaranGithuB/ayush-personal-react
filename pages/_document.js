import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap" />        
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
