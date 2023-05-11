import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Just+Another+Hand&family=Roboto+Slab:wght@400;500;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <script src='/admin.js'></script>
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
