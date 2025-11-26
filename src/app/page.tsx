import Image from "next/image";
import Hero from './components/Hero'
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { nativeFn } from "three/src/nodes/TSL.js";
import { navItems } from "./data";
import Client from "./components/Client";
import Experience from "./components/Experience";
import {Approch} from "./components/Approch";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main className=" bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      
      <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Client/>
        <Experience/>
        <Approch/>
        <Footer/>
        
      
    </div>
   </main>
  );
}
