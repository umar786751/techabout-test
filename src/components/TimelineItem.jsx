export default function TimelineItem({ post }) {
  return (
    <div className="flex gap-6 border-b pb-5">
      <img
        className={"h-[150px] object-cover w-[250px] border-2 rounded-[4px]"}
        src={post.image}
        alt={post.title}
      />
      <div className={"h-full flex flex-col gap-6 items-start"}>
        <p className={"text-xl font-medium"}>{post.title}</p>
        <p className={"text-sm font-medium"}>
          Updated by: <span className={"text-[#6188ae]"}>{post.updatedBy}</span>
        </p>
        <p className={"text-sm"}>{post.description}</p>
      </div>
    </div>
  );
}
