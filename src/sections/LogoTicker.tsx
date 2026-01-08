"use client"
import Image from "next/image";
import acmeLogo from '@/assets/logo-acme.png';
import quantum from '@/assets/logo-quantum.png';
import celestial from '@/assets/logo-celestial.png';
import pulse from '@/assets/logo-pulse.png';
import apex from '@/assets/logo-apex.png';
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 pr-14 flex-none"
            animate={{
              translateX: "-50%"
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: 'loop'
            }}
          >
            <Image 
              className="logo-ticker-image" 
              src={acmeLogo} 
              alt="Acme Logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={quantum} 
              alt="quantum logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={celestial} 
              alt="celestial Logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={pulse} 
              alt="pulse Logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={apex} 
              alt="Apex Logo"
            />


            {/* second set of images for animation */}
            <Image 
              className="logo-ticker-image" 
              src={acmeLogo} 
              alt="Acme Logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={quantum} 
              alt="quantum logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={celestial} 
              alt="celestial Logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={pulse} 
              alt="pulse Logo"
            />
            <Image 
              className="logo-ticker-image" 
              src={apex} 
              alt="Apex Logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
