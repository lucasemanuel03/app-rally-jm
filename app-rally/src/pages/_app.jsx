import Header from "@/src/components/Header"
import Footer from "../components/Footer"
import localFont from 'next/font/local';

const kdamFont = localFont({src: '../../fonts/KdamThmorPro-Regular.ttf'})

function AppRally({Component, pageProps}){
    return(
        <div className={`${kdamFont.className}`}>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </div>
    )
}

export default AppRally