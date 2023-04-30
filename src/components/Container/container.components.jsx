import mockups from "../../assets/images/image-mockups.png";

const Container = () => {
  return (
    <main>
      <div className=" absolute top-8 -z-30 w-full h-[340px] bg-cover bg-no-repeat bg-[url('./assets/images/bg-intro-mobile.svg')]">
        <img className=" absolute -top-[6rem]" src={mockups} alt="mockups" />
      </div>

      <section className=" absolute top-[25rem] grid place-items-center">
        <h1 className=" text-4xl text-dark-blue text-center mb-3">
          Next generation digital banking
        </h1>
        <p className=" text-center text-grayish-blue text-base font-light mb-10">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a href="/#" className=" bg-bright-cyan text-white py-4 px-8 rounded-full text-xl font-bold">Request Invite</a>
      </section>
    </main>
  );
};

export default Container;
