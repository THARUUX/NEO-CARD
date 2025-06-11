import "@/styles/globals.css";
import Header from '@/components/Header'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Lenis from "lenis";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });

    new kursor({
        type: 1,
        color: '#ffffff'
    })
  }, []);

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness, lower is faster
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
      direction: 'vertical',
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-screen h-screen flex justify-between flex-col items-center bg-black text-white cursor-none">
      <Header />
      <div className="w-full max-w-[2000px] grow">
        <Component {...pageProps} />
      </div>
    </div>
  ) ;
}
