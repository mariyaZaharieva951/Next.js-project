import Form from "./Form";

const Introduction = () => {
  

  return (
    <div className="flex flex-col font-custom-font w-full w-max-[639px] ml-[220px] pr-5">
        <h1 className="text-6xl text-blue-h font-bold tracking-[-0.89px] leading-tight mt-5">Bringing companies and customers together, anywhere</h1>
        <p className="text-lg leading-7 w-[452px] mt-7 pr-12">An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
        <Form/>

    </div>
  );
};

export default Introduction;