import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faLaptop, } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
  return (
    <div className="bg-blue-bg font-custom-font pt-12 text-white-text">
        <div className="lg:w-max-[1140px] mx-auto h-auto flex lg:flex-row justify-center items-end text-white-text pt-10 pb-12 mt-10 mb-12">
            <h2 className="lg:w-[633px] lg:text-5xl font-bold">Here`s how Roooby can benefit your business</h2>
            <p className="lg:w-[487px]">Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
        </div>
        <div className="custom-container flex gap-1 justify-start">
            <section className="lg:w-[374px] lg:h-[439px] flex flex-col justify-evenly bg-blue-benefit rounded-md hover:bg-yellow hover:text-black-tx px-10">
                <div className="lg:w-[63px] lg:h-[72px]">
                    <img src='./assets/b1.svg' className='w-full group-hover:invert'/>
                </div>
                <div className="flex flex-col items-start gap-3 border-t-2 pr-12">
                    <h4 className="text-xl font-bold mt-5">Lead customers to happiness</h4>
                    <p className="text-base">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </section>
            <section className="lg:w-[374px] lg:h-[439px] flex flex-col justify-evenly bg-blue-benefit rounded-md hover:bg-yellow hover:text-black-tx px-10">
                <div className="lg:w-[63px] lg:h-[72px]">
                    <img src='./assets/b2.svg' className='w-full group-hover:invert'/>
                </div>
                <div className="flex flex-col items-start gap-3 border-t-2 pr-12">
                    <h4 className="text-xl font-bold mt-5">Lead customers to happiness</h4>
                    <p className="text-base">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </section>
            <section className="lg:w-[374px] lg:h-[439px] flex flex-col justify-evenly bg-blue-benefit rounded-md hover:bg-yellow hover:text-black-tx px-10">
                <div className="lg:w-[63px] lg:h-[72px]">
                    <img src='./assets/b3.svg' className='w-full group-hover:invert'/>
                </div>
                <div className="flex flex-col items-start gap-3 border-t-2 pr-12">
                    <h4 className="text-xl font-bold mt-5">Lead customers to happiness</h4>
                    <p className="text-base">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
                </div>
            </section>
        </div>
    </div>
  );
};

export default Benefits;