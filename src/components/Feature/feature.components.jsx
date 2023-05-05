/* eslint-disable react/prop-types */
const Feature = (props) => {
  return (
    <div className="grid place-items-center lg:place-items-start">
      <img className="" src={props.img} alt="feature" />
      <h3 className="mt-5 text-dark-blue text-xl font-light">{props.heading}</h3>
      <p className="text-center max-w-[19rem] text-grayish-blue text-sm font-light mt-4 mb-9 lg:text-left lg:pr-10 ">
        {props.para}
      </p>
    </div>
  );
};

export default Feature;
