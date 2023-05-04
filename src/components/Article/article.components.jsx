/* eslint-disable react/prop-types */
const Article = (props) => {
  return (
    <article className="bg-white rounded-b-md w-72 mx-auto md:mb-16">
      <img
        className=" rounded-t-md object-cover h-40 w-72"
        src={props.img}
        alt="article image"
      />
      <div className=" px-8">
        <p className=" text-grayish-blue pt-10 pb-2 text-xs">{props.author}</p>
        <h3 className="text-dark-blue text-lg pb-2 md:hover:text-lime-green"><a href="">{props.header}</a></h3>
        <p className=" max-w-[19rem] text-grayish-blue text-xs font-light pb-6 mb-10 md:mb-0">{props.body}</p>
      </div>
    </article>
  );
};

export default Article;
