"use client"
import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="title">Pricing </h2>
        <p className="desc mt-5 max-w-[540px] mx-auto">Free forever. Upgrade for unlimited tasks, better security, and exclusive features</p>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map((items) => (
            <div 
              key={items.title}
              className={`${items.inverse && 'border-black bg-black text-white'} card`}
            >
              <div className='flex justify-between'>
                <h3 className={twMerge('text-lg font-bold text-black/50', items.inverse === true && 'text-white/60')}>
                  {items.title}
                </h3>
                {items.popular && (
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                    <motion.span 
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                      }}
                    className='bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#3BFFFF] [background-size:200%] text-transparent bg-clip-text font-medium'>
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>${items.monthlyPrice}</span>
                <span className='tracking-tight font-bold text-black/50'>/month</span>
              </div>
              <button className={twMerge('btn btn-primary w-full mt-[30px]', items.inverse === true && 'bg-white text-black')}>
                {items.buttonText}
              </button>
              <ul className='flex flex-col gap-5 mt-[32px]'>
                {items.features.map((feature) => (
                  <li 
                    className='text-sm flex items-center gap-4' 
                    key={feature}
                  >
                    <CheckIcon className="h-6 w-6"/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
