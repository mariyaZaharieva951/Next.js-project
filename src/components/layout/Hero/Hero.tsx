import Image from "./Image";
import Introduction from "./Introduction";


const Hero = () => {
  

  return (
    <div className="flex lg:flex-row flex-col lg:mx-auto mx-10 mt-10 pt-10 gap-2">
        <Introduction/>
        <Image/>
    </div>
  );
};

export default Hero;