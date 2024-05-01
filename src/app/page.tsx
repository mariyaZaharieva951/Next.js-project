import Header from "@/components/layout/Header/Header";
import Clients from "@/components/layout/Hero/Clients";
import Hero from "@/components/layout/Hero/Hero";


export default function Home() {
  return (
    <main>
      <div className='bg-gray-bg'>
        <Header/>
        <Hero/>
        <Clients/>
      </div>
      
    </main>
  );
}
