import { ServiceCard } from "./cards";
import development from "../assets/development.svg";

const Services = () => {
  return (
    <div className={"py-12"}>
      <div className={"mb-6"}>
        <h1 className="text-3xl text-center mb-5">Pro Services</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          hic nobis ab aspernatur nemo, recusandae suscipit fuga dolores ad,
          quod id amet natus dolorum maxime veniam necessitatibus, mollitia at
          unde.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard
            image={development}
            title="Website Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestiae quisquam. Quasi voluptas iste inventore amet tempora repellat ipsa quo."
          />
          <ServiceCard
            image={development}
            title="Website Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestiae quisquam. Quasi voluptas iste inventore amet tempora repellat ipsa quo."
          />
          <ServiceCard
            image={development}
            title="Website Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestiae quisquam. Quasi voluptas iste inventore amet tempora repellat ipsa quo."
          />
          <ServiceCard
            image={development}
            title="Website Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestiae quisquam. Quasi voluptas iste inventore amet tempora repellat ipsa quo."
          />
          <ServiceCard
            image={development}
            title="Website Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestiae quisquam. Quasi voluptas iste inventore amet tempora repellat ipsa quo."
          />
          <ServiceCard
            image={development}
            title="Website Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, molestiae quisquam. Quasi voluptas iste inventore amet tempora repellat ipsa quo."
          />
        </div>
        <div className={"text-center mt-8"}>
          <button
            className={
              " font-medium bg-neutral-900 text-sm text-white border-black uppercase px-6 pt-2 pb-2.5 rounded-[3px] transition-all" +
              " duration-150 ease-in-out hover:bg-neutral-800 "
            }
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
