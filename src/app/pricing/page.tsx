import Cta from "@/components/layout/Cta/Cta";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

const Pricing = () => {
  return (
    <div className="bg-gray-bg">
      <Header />
      <div className="lg:w-[1140px] mx-auto h-auto  font-custom-font flex flex-col">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-end my-[80px]">
          <h1 className="lg:w-[689px] lg:text-6xl text-3xl font-bold">Choose the right plan <span className="text-gray-darked">for your business</span></h1>
          <p className="lg:w-[360px] lg:text-lg text-base">
            Built with love for growing businesses. Check out the Roooby CRM
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-2">
            <section className="flex flex-col gap-5 justify-start bg-white-text rounded-xl p-5">
                <h3 className="lg:text-2xl font-bold">Starter</h3>
                <p className="lg:text-base items-end">Get organized and set up simple sales processes lorem ipsum</p>
                <p className="lg:text-5xl font-bold items-end">$8,90<span className="text-gray-darked">/month</span></p>
                <div className="flex flex-col gap-2 text-center">
                    <button className="lg:text-lg font-bold text-center px-10 py-1 border-2 border-gray-dark rounded">Try for Free</button>
                    <p className="lg:text-sm text-gray-dark">Free 14-day trial. No credit card required.</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>2 team members</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>1,000 Contacts & Companies</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>5 Campaign Workflows</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>10 Nodes Per Campaign</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>5 Automation Rules (Triggers)</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>3 Plugins/Integrations</li>
                    <li className="flex gap-2 text-gray-dark line-through"><img src="./assets/ic_done.png"/>Marketing Automation	</li>
                    <li className="flex gap-2 text-gray-dark line-through"><img src="./assets/ic_done.png"/>Custom Deal Tracks</li>
                    <li className="flex gap-2 text-gray-dark line-through"><img src="./assets/ic_done.png"/>Automated Voicemails</li>
                    <li className="flex gap-2 text-gray-dark line-through"><img src="./assets/ic_done.png"/>Post-call Automation</li>
                </ul>
            </section>
            <section className="flex flex-col gap-5 justify-start bg-white-text rounded-xl p-5">
                <h3 className="lg:text-2xl font-bold">Profesional</h3>
                <p className="lg:text-base items-end">Everything you need to boost performance and revenue lorem ipsum</p>
                <p className="lg:text-5xl font-bold items-end">$29,90<span className="text-gray-darked">/month</span></p>
                <div className="flex flex-col gap-2 text-center">
                    <button className="lg:text-lg font-bold text-center px-10 py-1 border-2 border-gray-dark rounded">Try for Free</button>
                    <p className="lg:text-sm text-gray-dark">Free 14-day trial. No credit card required.</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>10 team members</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>2,500 Contacts & Companies</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>5 Campaign Workflows</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>10 Nodes Per Campaign</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>5 Automation Rules (Triggers)</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>3 Plugins/Integrations</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Marketing Automation	</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Custom Deal Tracks</li>
                    <li className="flex gap-2 text-gray-dark line-through"><img src="./assets/ic_done.png"/>Automated Voicemails	</li>
                    <li className="flex gap-2 text-gray-dark line-through"><img src="./assets/ic_done.png"/>Post-call Automation	</li>
                </ul>
            </section>
            <section className="flex flex-col gap-5 justify-start bg-white-text rounded-xl p-5">
                <h3 className="lg:text-2xl font-bold">Enterprise</h3>
                <p className="lg:text-base items-end">Customize without limits and access unrivaled support lorem ipsum</p>
                <p className="lg:text-5xl font-bold items-end">$39,90<span className="text-gray-darked">/month</span></p>
                <div className="flex flex-col gap-2 text-center">
                <button className="lg:text-lg font-bold text-center px-10 py-1 border-2 border-gray-dark rounded">Try for Free</button>
                    <p className="lg:text-sm text-gray-dark">Free 14-day trial. No credit card required.</p>
                </div>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Unlimited team members</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>5,000 Contacts & Companies</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>25 Campaign Workflows</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>20 Nodes Per Campaign</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>15 Automation Rules (Triggers)</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>10 Plugins/Integrations</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Marketing Automation</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Custom Deal Tracks</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Automated Voicemails</li>
                    <li className="flex gap-2"><img src="./assets/ic_done.png"/>Post-call Automation</li>
                </ul>
            </section>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default Pricing;
