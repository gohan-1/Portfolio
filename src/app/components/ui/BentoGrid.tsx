"use client";
import { image, object } from "motion/react-client";
import { cn } from "../../utils/cn";
import { BackgroundGradientAnimation } from "./GradientUi";
import { GlobeDemo } from "./GradientGlobe";
import { MdOpacity } from "react-icons/md";
import Lottie from "lottie-react";
import { useState } from "react";
import animationData from '../../data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  titleClassName,
  img,
  spareImg,
  imgClassName
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number
  imgClassName?:string
  titleClassName?:string;
  img:string,
  spareImg:string
}) => {
    const [copied, setCopied] = useState(false)
    const handleCopy = ()=>{
        navigator.clipboard.writeText("vishnuskris@gmail.com")
        setCopied(true)
    }
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1  overflow-hidden flex flex-col  justify-between items-start space-y-4 relative rounded-3xl   border-white/[0.1] transition duration-200 hover:shadow-xl dark:shadow-none  border-2 ",
        className,
      )}
      style={{
        background: " #01011a",
        backgroundColor:
          "linear-gradient(90deg,rgba(1, 1, 26, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
      }}
    
    >

            <div className={`id===6` && 'flex justify-center h-full'}>
                <div className="w-full h-full absolute">
                    {img && (
                      
                        <img src={img} alt={img} className="object-cover object-center w-full h-full" />
                        
                    )}
                  
                </div>
                
                <div
                    className={`absolute right-6 -bottom-5 ${id === 5 && "w-60 opacity-80"
                        } `}
                    >
                    {spareImg && (
                        <img
                        src={spareImg}
                        alt={spareImg}
                        //   width={220}
                        className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                {id===6 && (
                    <BackgroundGradientAnimation>
       <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                        
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}> 
                        <div className="font-sans text-[13px] md:text-[13px] z-10 font-normal text-neutral-200 dark:text-neutral-200">
                           {description}
                        </div>
                        <div className="font-sans font-semibold text-[13px] md:text-[17px] lg:text-[22px]  tracking-normal leading-relaxed max-w-full z-10 text-slate-200 dark:text-blue-50">
                              {title}
                        </div>

                {
                    id===2 &&( 
                        <GlobeDemo/>
                    ) 
                }
                {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-42 text-amber-50">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {['Express.js,','Blockchain','Python'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-[13px] md:text-[16px] lg:text-[15px] lg:text-bas  e opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {['ReactJS','NodeJs','Docker'].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
              {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie animationData={animationData} 
        loop={true} 
        autoplay={true} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClass="!bg-[#161A31]"
              />
            </div>
          )}
        


              {id===5 &&(
               
                   
                    
                <div className="absolute -right-65 bottom-0 md:w-96 w-60"> <img src="./b5.svg"/></div>
                   
              )}

                
            </div>
            
              
               
            
        
            
            

        <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
      
        
      </div>
    </div>
    </div>

  );
};
