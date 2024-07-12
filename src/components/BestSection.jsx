import heroImage from "../assets/heroImage.png";

const BestSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-8 items-center rounded-sm bg-slate-200">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img className="w-full" src={heroImage} alt="Hero Image" />
      </div>
      <div className="w-full md:w-2/3 px-4">
        <h1 className="text-2xl md:text-4xl font-medium mb-3">
          Which WordPress Hosting is Best for You?
        </h1>
        <p className="text-sm md:text-base">
          Unsure which WordPress hosting company to choose? Simply answer a few
          questions, and our recommendation engine will <br /> identify the best
          option for you.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <svg
            className="text-[#2980B9] w-5 h-5 md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"
            />
          </svg>
          <p className="text-sm md:text-base font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <svg
            className="text-[#2980B9] w-5 h-5 md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"
            />
          </svg>
          <p className="text-sm md:text-base font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <button className="bg-neutral-900 font-medium text-white px-4 py-2 rounded-[3px] mt-4">
          TAKE THE QUIZ
        </button>
      </div>
    </div>
  );
};

export default BestSection;
