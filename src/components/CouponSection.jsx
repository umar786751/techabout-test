import development from "../assets/development.svg";
import { CouponCard } from "./cards/index";

const CouponSection = () => {
  return (
    <section className="py-12">
      <h1 className={"text-4xl text-center mb-6"}>WPArena Featured Products</h1>
      <p className={"text-center max-w-screen-lg mx-auto mb-6"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
        assumenda corporis exercitationem explicabo facilis harum hic maiores
        minima modi nam nobis nulla porro quae repellendus reprehenderit,
        soluta, voluptates. Necessitatibus.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CouponCard
          title="Site Ground"
          image={development}
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
        <CouponCard
          title="Site Ground"
          image={development}
          desc="lorem ipsum"
          discountTitle="dfsdfdf"
          discount="40% Off"
        />
      </div>
      <div className={"text-center mt-8"}>
        <button
          className={
            " font-medium bg-neutral-900 text-sm text-white border-black uppercase px-6 pt-2 pb-2.5 rounded-[3px] transition-all" +
            " duration-150 ease-in-out hover:bg-neutral-800 "
          }
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default CouponSection;
