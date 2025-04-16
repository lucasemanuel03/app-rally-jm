import '@/src/app/globals.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Index from "../pages/Index";
import localFont from 'next/font/local';

const kdamFont = localFont({src: '../../fonts/KdamThmorPro-Regular.ttf'})




export default function Home() {
  return (
    <div className={`${kdamFont.className}`}>
      <Header/>
      <main>
        <Index/>
      </main>

      <Footer/>
    </div>
  );
}
