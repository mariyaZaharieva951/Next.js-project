import Benefits from "@/components/layout/Benefits/Benefits";
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/layout/Hero/Hero";
import Sales from "@/components/layout/Hero/Salex";
import Marketing from "@/components/layout/Marketing/Marketing";


export default function Home() {
  return (
    <main>
      <div className='bg-gray-bg pb-12'>
        <Header/>
        <Hero/>
      </div>
      <Benefits/>
      <div className="mt-[120px]">
        <Sales/>
        <Marketing/>
      </div>
      
    </main>
  );
}
