import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import image2 from '@/public/image2.png'
import image3 from '@/public/image3.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SiNfc } from "react-icons/si";
import { IoRocket } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";

export default function Home() {
  return (
    <main className='h-full  w-full bg-black'>
        <div className='w-full flex flex-col sm:flex-row h-full max-h-screen sm:max-h-[90vh] bg-black'>
          <div className='w-full sm:w-full md:w-full lg:w-1/2 flex items-center justify-center p-10 sm:p-20'>
            <div className='flex flex-col gap-1'>
              <div className='text-3xl font-pri font-black' data-aos="fade-in" data-aos-delay="300">Grew up your business with </div>
              <div className='text-5xl font-pri' data-aos="fade-in" data-aos-delay="400">NEO CARD</div>
            </div>
          </div>
          <div className='w-full sm:w-full md:w-full lg:w-1/2 grow lg:h-full' data-aos="fade-in" data-aos-duration="3000" data-aos-delay="500">
            <Spline
              scene="https://prod.spline.design/Gpw3Ppjl6uz0OcCo/scene.splinecode" 
            />
          </div>
        </div>
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='w-full sm:w-full md:w-1/2 flex justify-center items-center'>
            <Image src={image2} height={0} width={0} className='w-8/12' data-aos="fade-right"/>
          </div>
          <div className='w-full sm:w-full md:w-1/2 flex flex-col p-10 sm:p-20 gap-10'>
            <div>
              <div className='font-pri text-xl' data-aos="fade-up">Meet the future of sharing</div>
              <div className='font-pri text-3xl font-black' data-aos="fade-up">Contact & Information</div>
            </div>
            <div data-aos="fade-up">Seamlessly connect and share your contact details, social profiles, or business info with a simple tap. This NFC tag is your modern digital card—no apps, no friction, just instant connection.</div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center py-20 sm:py-30 bg-1">
          <div className='flex justify-center font-pri text-3xl items-center gap-5' data-aos="fade-up">
            <animated-icons
              src="https://animatedicons.co/get-icon?name=lightbulb&style=minimalistic&token=06bcc1a8-eb2e-4ff3-9dfb-e3bcb5267e38"
              trigger="loop"
              attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":1,"defaultColours":{"group-1":"#FFFFFFFF","background":"#E2E2E200"}}'
              height="50"
              width="50"
            ></animated-icons>
            How It Works
          </div>
          <div className='flex flex-col sm:flex-row w-full'>
            <div className="w-full sm:w-1/2 p-10 lg:px-40 sm:pt-32 tracking-wider flex flex-col gap-15">
              <div data-aos="fade-in">
                Your NEO Card has an NFC (Near Field Communication) tag inside. When someone taps their smartphone on the card (or holds it near), it instantly opens your personal web page — your virtual business card.
              </div>
              <div className='w-full flex justify-center' data-aos="fade-in"><SiNfc className='text-9xl' /></div>
            </div>
            <div className="w-full sm:w-1/2 px-10 lg:px-40 pt-20 sm:pt-32 tracking-wider">
              <div className='text-xl' data-aos="fade-in">This web page includes:</div>
              <div className='flex flex-col gap-2 mt-5'>
                <div className='flex items-center gap-3' data-aos="fade-left"><FaPhoneAlt /> <div>Your contact details (phone, email, etc.)</div></div>
                <div className='flex items-center gap-3' data-aos="fade-left"><IoIosLink /> <div>Links to your social media, website, or portfolio</div></div>
                <div className='flex items-center gap-3' data-aos="fade-left"><FaLocationDot /> <div>Location, appointment booking links, or any other URLs you choose</div></div>
              </div>
              <div className='text-xl mt-15 flex items-center gap-2' data-aos="fade-in">No App Needed 
                <animated-icons
                  src="https://animatedicons.co/get-icon?name=Success&style=minimalistic&token=2cb0da6b-0dad-4d02-8599-79b76c0333fb"
                  trigger="loop"
                  attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":2.5,"defaultColours":{"group-1":"#000000FF","background":"#FFFFFFFF"}}'
                  height="30"
                  width="30"
                ></animated-icons>
              </div>
              <div className='mt-5' data-aos="fade-in">Anyone with an NFC-enabled smartphone can access your info instantly — no app or scanning required.</div>
            </div>
          </div>
        </div>

        <div className='w-full flex p-10 py-30  h-auto flex-col justify-center items-center relative'>
              <Image src={image3} width={0} height={0} className='w-full md:w-2/3 lg:w-1/3 z-10 sm:mb-30' data-aos="fade-up" />
              <div className='font-pri text-3xl md:text-5xl lg:text-9xl  absolute w-fullflex text-center justify-center bottom-22 sm:bottom-15 z-[0]' data-aos="fade-in" data-aos-duration="3000">Tailor Your Virtual Card, Your Way</div>
        </div>

        <div className='w-full flex flex-col py-30 gap-20 sm:gap-30 px-10 sm:px-20 bg-2'>
          <div className="w-full flex justify-center text-3xl font-pri items-center gap-5 text-center" data-aos="fade-up">
            <animated-icons
              src="https://animatedicons.co/get-icon?name=credit%20card&style=minimalistic&token=2f40e1e0-8391-4dee-a481-9feef9969c5e"
              trigger="loop"
              attributes='{"variationThumbColour":"#FFFFFF","variationName":"Normal","variationNumber":1,"numberOfGroups":1,"backgroundIsGroup":false,"strokeWidth":0.88,"defaultColours":{"group-1":"#FFFFFFFF","background":"#00000000"}}'              height="50"
              width="50"
            ></animated-icons>
            Why Use NEO Card?</div>
            <div className='w-full flex flex-col lg:flex-row justify-around items-center gap-10 h-full'>
              <div className='w-[300px]' data-aos="fade-up">
                <div className='pt-15 pb-10 px-8 bg-white/20 brightness-105 hover:brightness-125 duration-300 backdrop-blur-sm rounded-xl flex flex-col  justify-center items-center gap-2 h-full' >
                  <div className='text-7xl justify-center items-center'><IoRocket /></div>
                  <div className='font-pri text-center mt-15'>Contactless, quick, and professional</div>
                  <div className='text-sm text-center'>Instantly share your details with a tap — no apps or paper needed.</div>
                </div>
              </div>
              <div className='w-[300px]' data-aos="fade-up">
                <div className='pt-15 pb-10 px-8 bg-white/20 brightness-105 hover:brightness-125 duration-300 backdrop-blur-sm rounded-xl flex flex-col  justify-center items-center gap-2 h-full' >
                  <div className='text-7xl justify-center items-center'><MdDesignServices /></div>
                  <div className='font-pri text-center mt-15'>Premium Designs & Tailored UI</div>
                  <div className='text-sm text-center'> Stylish, high-quality layouts that leave a lasting impression.</div>
                </div>
              </div>
              <div className='w-[300px]' data-aos="fade-up">
                <div className='pt-15 pb-10 px-8 bg-white/20 brightness-105 hover:brightness-125 duration-300 backdrop-blur-sm rounded-xl flex flex-col  justify-center items-center gap-2 h-full' >
                  <div className='text-7xl justify-center items-center'><MdTipsAndUpdates /></div>
                  <div className='font-pri text-center mt-15'>Easy to update your info anytime online</div>
                  <div className='text-sm text-center'> Edit your virtual card details anytime — no reprinting required.</div>
                </div>
              </div>
            </div>
            <div className='w-full justify-center text-center font-pri tracking-widest'>Just tap and connect. It’s that simple!</div>
        </div>
        
        
    </main>
  );
}
