const Form = () => {
  return (
    <form className="font-custom-font relative w-[457px] mt-12">
      <div className="">
        <input
          className="relative h-[72px] border-[1px] border-[#DCDCDC] py-3 pr-12 pl-5 w-full rounded-lg placeholder-[#898989]"
          placeholder="Enter your email"
        ></input>
        <button className="absolute w-[142px] h-[56px] top-[8px] right-[8px] border-l-2 bg-white rounded-lg text-white-text bg-button-bg">
          Try for Free
        </button>
      </div>
      <p className="text-sm ml-5 mt-2">Full access. No credit card required.</p>
    </form>
  );
};

export default Form;