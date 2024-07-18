import { Tabs } from "./Tab.jsx";
import { useEffect, useState } from "react";
import TimelineItem from "./TimelineItem.jsx";
import image from "../assets/pexels.jpg";

const Timeline = () => {
  const tab = localStorage.getItem('key: tab');
  const [selectedTab, setSelectedTab] = useState(() => {
    const savedTab = localStorage.getItem('tab');
    return savedTab || 'reviews'; // 'reviews' is the default if nothing is in localStorage
  });
  const [posts, setPosts] = useState([]);

  function onSelect(currentTab) {
    setSelectedTab(currentTab);
    localStorage.setItem('tab', currentTab);
  }

  useEffect(() => {
    setPosts(data.filter((item) => item.category === selectedTab));
  }, [selectedTab]);

  return (
    <div className="py-12">
      <Tabs selectedTab={selectedTab} onSelect={onSelect} />
      <hr className="my-10 block h-[1px] bg-neutral-100" />
      <div className="border-l-2 relative border-black pl-9 lg:pl-16 ml-9 lg:ml-10 flex flex-grow flex-col gap-5">
        {posts.map((post) => (
          <TimelineItem key={post.id} post={post} />
        ))}
        <div className="h-3 w-3 bg-black absolute top-0 left-[-6.6px] rounded-full" />
        <div className="h-3 w-3 bg-black absolute bottom-0 left-[-6.6px] rounded-full" />
        <div className="absolute top-0 left-[-32px] lg:left-[-45px] bottom-0 flex flex-col justify-between pt-6 pb-10">
          {posts.map((item) => (
            <div
              key={item.id}
              className="rounded-full border-4 border-[#333333]"
            >
              <div className="w-14 h-14 lg:w-20 lg:h-20 flex flex-col items-center justify-center text-center uppercase border-2 border-white text-xs lg:text-sm font-medium text-white rounded-full bg-[#333333]">
                <p>July</p>
                <p>5/2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

const data = [
  {
    id: 1,
    category: "reviews",
    title: "Tech Gadget Review",
    image,
    updatedBy: "John Doe",
    description: "A comprehensive review of the latest tech gadgets.",
  },
  {
    id: 2,
    category: "reviews",
    title: "Smartphone Review",
    image,
    updatedBy: "Sarah Davis",
    description: "In-depth review of the latest smartphones.",
  },
  {
    id: 3,
    category: "reviews",
    title: "Laptop Review",
    image,
    updatedBy: "Anna Williams",
    description: "Detailed review of the newest laptops on the market.",
  },
  {
    id: 4,
    category: "news",
    title: "Tech Industry News",
    image,
    updatedBy: "Jane Smith",
    description: "Breaking news in the tech industry.",
  },
  {
    id: 5,
    category: "news",
    title: "Tech Company Merger",
    image,
    updatedBy: "James Taylor",
    description: "Details on the latest tech company mergers.",
  },
  {
    id: 6,
    category: "news",
    title: "New Tech Regulations",
    image,
    updatedBy: "Olivia Brown",
    description: "Overview of new regulations affecting the tech industry.",
  },
  {
    id: 7,
    category: "latest",
    title: "Latest Tech Trends",
    image,
    updatedBy: "Emily Johnson",
    description: "The latest trends in technology.",
  },
  {
    id: 8,
    category: "latest",
    title: "New Tech Innovations",
    image,
    updatedBy: "Laura Martinez",
    description: "Latest innovations in the tech world.",
  },
  {
    id: 9,
    category: "latest",
    title: "Emerging Technologies",
    image,
    updatedBy: "Daniel Garcia",
    description: "Exploration of emerging technologies.",
  },
  {
    id: 10,
    category: "editorials",
    title: "Tech Editorial",
    image,
    updatedBy: "Michael Brown",
    description: "Opinion pieces on current tech issues.",
  },
  {
    id: 11,
    category: "editorials",
    title: "Tech Policy Analysis",
    image,
    updatedBy: "Robert White",
    description: "Analysis of recent tech policies.",
  },
  {
    id: 12,
    category: "editorials",
    title: "Future of Tech",
    image,
    updatedBy: "Jessica Green",
    description: "Speculations and insights on the future of technology.",
  },
  {
    id: 13,
    category: "categories",
    title: "Tech Categories Overview",
    image,
    updatedBy: "David Wilson",
    description: "An overview of various tech categories.",
  },
  {
    id: 14,
    category: "categories",
    title: "AI and Machine Learning",
    image,
    updatedBy: "Patricia Lee",
    description: "An overview of AI and machine learning technologies.",
  },
  {
    id: 15,
    category: "categories",
    title: "Cybersecurity",
    image,
    updatedBy: "Linda Moore",
    description: "Insights into the field of cybersecurity.",
  },
];
