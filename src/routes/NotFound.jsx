import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackLoginHandler = () => {
    navigate("/home");
  };

  return (
    <section className="bg-white dark:bg-[#222]">
      <div className="py-5 px-4 mx-auto max-w-screen-xl  lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col justify-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
            className="flex justify-center"
          />
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold text-[#2189b9] lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something`s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can`t find that page. You`ll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="/"
            className=" text-white bg-rose-300 hover:bg-rose-400 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
