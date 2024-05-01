import Image from "./Image";
import Introduction from "./Introduction";


const Hero = () => {
  

  return (
    <div className="flex mx-auto mt-10 pt-10 gap-2">
        <Introduction/>
        <Image/>

    </div>
  );
};

export default Hero;