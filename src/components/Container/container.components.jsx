import mockups from "../../assets/images/image-mockups.png";
import Feature from "../Feature/feature.components";
import banking from "../../assets/images/icon-online.svg";
import budgeting from "../../assets/images/icon-budgeting.svg";
import onboarding from "../../assets/images/icon-onboarding.svg";
import api from "../../assets/images/icon-api.svg";

const Container = () => {
  return (
    <main>
      <div className=" absolute top-8 -z-30 w-full h-[340px] bg-cover bg-no-repeat bg-[url('./assets/images/bg-intro-mobile.svg')]">
        <img className=" absolute -top-[6rem]" src={mockups} alt="mockups" />
      </div>

      <section className=" w-full absolute top-[25rem] grid place-items-center mt-8 mb-9">
        <h1 className=" max-w-xs text-4xl text-dark-blue text-center mb-3">
          Next generation digital banking
        </h1>
        <p className=" max-w-[19rem] text-center text-grayish-blue text-sm font-light mb-10">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a
          href="/#"
          className=" bg-gradient-to-r from-lime-green to-bright-cyan text-white py-3 px-8 rounded-full text-xl font-bold"
        >
          Request Invite
        </a>
      </section>

      <section className=" w-full absolute top-[46rem] bg-light-grayish-blue py-12">
        <h2 className=" max-w-sm mx-auto text-center text-4xl text-dark-blue">
          Why choose Easybank?
        </h2>
        <p className="text-center mx-auto max-w-[19rem] text-grayish-blue text-sm font-light mt-5 mb-12">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <Feature
          img={banking}
          heading="Online Banking"
          para="Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
        />
        <Feature
          img={budgeting}
          heading="Simple Budgeting"
          para="See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits."
        />
        <Feature
          img={onboarding}
          heading="Fast Onboarding"
          para="We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away."
        />
        <Feature
          img={api}
          heading="Open API"
          para="Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier."
        />
      </section>
    </main>
  );
};

export default Container;
