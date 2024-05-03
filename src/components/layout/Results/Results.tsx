const Results = () => {
    return (
        
        <div className="custom-container font-custom-font pt-[180px]">
            <div className="mb-12">
                <h3 className="font-bold lg:text-5xl text-3xl mb-3">Real-life results and revenue</h3>
                <p className="text-lg">See how companies like yours have smashed their sales success goals</p>
            </div>
            <div>
                <article className="flex justify-between items-start border-t-2 border-[#787878] py-12">
                    <div className="flex flex-col">
                        <p className="lg:text-7xl text-3xl text-nowrap">$2.5 M</p>
                        <p className="text-xl">Generate sales</p>
                    </div>
                    <div className="lg:w-[749px] ">
                        <p className="text-lg">Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.</p>
                        <div className="flex gap-2 mt-5">
                            <img src="./assets/user1.png"/>
                            <div className="text-base">
                                <p className="font-bold">Nellie Foster</p>
                                <p>Founder & CEO, Foster Business Strategies</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex justify-between items-start border-t-2 border-[#787878] py-10">
                    <div className="flex flex-col">
                        <p className="lg:text-7xl text-3xl text-nowrap">45%</p>
                        <p className="text-xl">Grew revenue</p>
                    </div>
                    <div className="lg:w-[749px] ">
                        <p className="text-lg">Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
                        <div className="flex gap-2 mt-5">
                            <img src="./assets/user2.png"/>
                            <div className="text-base">
                                <p className="font-bold">Lawrence Gibbs</p>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
  };
  
  export default Results;