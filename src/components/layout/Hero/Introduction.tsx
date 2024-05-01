import Form from "./Form";

const Introduction = () => {
  

  return (
    <div className="flex flex-col font-custom-font w-full lg:w-max-[639px] lg:ml-[220px] lg:pr-5">
        <h1 className="w-full lg:text-left text-center lg:text-6xl text-4xl text-blue-h font-bold tracking-[-0.89px] leading-tight">Bringing companies and customers together, anywhere</h1>
        <p className="text-lg lg:text-left text-center leading-7 lg:w-[452px] mt-7 lg:pr-12">An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
        <Form/>

    </div>
  );
};

export default Introduction;