function ProductCard() {
  return (
    <div className="bg-white text-center shadow px-4 p-6 flex flex-col items-center gap-3 rounded-md">
      <svg
        className={" w-14 h-14"}
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
      <h3 className="text-2xl font-medium">WordPress Product 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
        aut iure nam nesciunt provident rem sapiente.
      </p>
    </div>
  );
}

export default ProductCard;
