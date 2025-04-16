import Header from "@/src/components/Header"
import Footer from "../components/Footer"




function AppRally({Component, pageProps}){
    return(
        <div>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </div>
    )
}

export default AppRally