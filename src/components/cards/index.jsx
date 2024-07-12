export const ServiceCard = ({ title, desc }) => {
  return (
    <div className="bg-[#F9FAFE] hover:bg-neutral-800 hover:text-white group border p-6 flex flex-col items-center rounded-md">
      <svg
        className={"text-[#6188ae] group-hover:text-white w-14 h-14"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6" />
          <path d="m4.5 5.25l-1.75 1.5L4.25 8m5.5-2.5l1.5 1.25l-1.75 1.5m-3.25.5l1.5-4.5" />
        </g>
      </svg>
      <h3 className="text-center text-2xl font-medium my-2">{title}</h3>
      <p className="text-center">{desc}</p>
    </div>
  );
};
export const CouponCard = ({ title, image, discount }) => {
  return (
    <div className="flex items-center gap-4 shadow-md border p-3 rounded-[4px]">
      <div className={"border-2 rounded-full p-4"}>
        <img className="w-10 h-10" src={image} alt="" />
      </div>
      <hr className="my-10 block h-full w-0.5 bg-neutral-100" />
      <div>
        <p className={"font-medium"}>{title}</p>
        <p className={"text-sm font-medium text-[#6188ae]"}>{discount}</p>
      </div>
    </div>
  );
};
