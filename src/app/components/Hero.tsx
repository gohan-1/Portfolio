import React  from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../utils/cn";
import { TextGenerateEffect } from "./ui/TextGenarateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";


const Hero =()=>{
return(
    <div className=" pb-20 pt-36 ">
        <div>
<Spotlight className="-top-40  -left-10 md:-left-32 md:-top-20 h-screen "fill="white"/>
<Spotlight className="top-10  -left-full h-[80vh] w-[50vw] "fill='purple'/>
<Spotlight className="top-28  left-80  h-[80vh] w-[50vw]  "fill= "blue"/>

        </div>
        <div>
        <div className="absolute top-0 left-0 flex h-[50rem] w-full items-center justify-center bg-black dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.08)_1px,transparent_1px)]",
"dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.08)_1px,transparent_1px)]",

          
        )}
      />
      {/* Radial gradient for the container to give a faded look */}

    </div>
        </div>
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
                <h2 className="Uppercase tracking-widest text-xl text-center  text-blue-100 max-w-80:">
                    Dynamic web page 
                </h2>
                <TextGenerateEffect 
                className=" text-center  text-[40px]  lg:text-6xl md:text-10x drop-shadow-lg"
                words="Transforming concept into seemless Experiences"/>
                

              <p className="text-center py-1  text-blue-100 md:tracking-wider mb:10 text-sm md:text-lg lg:text-2xl">Hi, I'm Vishnu </p>
              <a href="#about" ><MagicButton  title="Show my work "icon={<FaLocationArrow/>} position="right"/> </a>
            </div>

        </div>
    </div>
)
}

export default Hero