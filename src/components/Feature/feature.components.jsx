const Feature = (props) => {
  return (
    <div className="grid place-items-center">
      <img className="" src={props.img} alt="feature" />
      <h3 className="mt-5 text-dark-blue text-xl font-light">{props.heading}</h3>
      <p className="text-center text-grayish-blue text-base font-light mt-4 mb-9">
        {props.para}
      </p>
    </div>
  );
};

export default Feature;
