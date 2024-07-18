export const Tabs = ({ selectedTab, onSelect }) => {
  const tabs = ["reviews", "news", "latest", "editorials", "categories"];

  return (
    <div className={"flex items-center gap-6"}>
      {tabs.map((title) => (
        <button
          onClick={() => onSelect(title)}
          key={title}
          className={
            (selectedTab === title ? " bg-neutral-900 text-white " : "") +
            " border-2 font-medium border-black uppercase px-4 pt-1 pb-1.5 rounded-[3px] transition-all duration-150 ease-in-out " +
            " hover:bg-neutral-900" +
            " hover:text-white"
          }
        >
          {title}
        </button>
      ))}
    </div>
  );
};
