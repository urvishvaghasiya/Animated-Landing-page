"use client"
import ArrowRight from '@/assets/arrow-right.svg';
import starTimage from '@/assets/star.png';
import spring from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';


export const CallToAction = () => {

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])

  return (
    <section
    ref={scrollRef} 
    className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='max-w-[540px] mx-auto relative'>
          <h2 className="title">Sign up for free today</h2>
          <p className="desc mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <motion.img 
            src={starTimage.src} 
            alt='star image' 
            width={360}
            className='absolute -left-[350px] -top-[137px]'
            style={{
              translateY: translateY
            }}
          />
          <motion.img 
            src={spring.src} 
            alt='spring image' 
            width={360}
            className='absolute -right-[331px] -top-[19px]'
            style={{
              translateY: translateY
            }}
          />
        </div>
        <div className="mt-10 justify-center flex gap-2 pt-5">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn  more</span>
            <ArrowRight className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </section>
  );
};
