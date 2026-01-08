"use client"
import Image from "next/image";
import productImage from '@/assets/product-image.png'
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform( scrollYProgress, [0,1], [150, -150])

  return (
    <section 
      ref={scrollRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="title mt-5">A more effective way to track your progress</h2>
          <p className="desc mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
            <Image 
              src={productImage} 
              alt="product image" 
              className="mt-10"
            />
            <motion.img 
              src={pyramid.src} 
              alt="pyramid image" 
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-32" 
              style={{
                translateY: translateY,
              }}
            />
            <motion.img 
              src={tube.src} 
              alt="tube image" 
              height={248}
              width={248}
              className="hidden md:block absolute -left-36 bottom-24" 
              style={{
                translateY: translateY,
              }}
            />
          </div>
      </div>
    </section>
  );
};
