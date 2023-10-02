import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className=" text-center p-6 ">
      <a href="#">
        <h5
          className="my-4 text-2xl font-bold 
        tracking-tight
         text-gray-900 hover:text-cyan-600
          dark:text-white"
        >
          {title}
        </h5>
      </a>
      <p className="mb-3 text-justify h-[160px]  text-sm text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center 
        px-3 py-2 text-sm font-medium text-center
         text-white bg-cyan-700 rounded-lg
          hover:bg-cyan-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300
            dark:bg-cyan-600
            dark:hover:bg-cyan-700
             dark:focus:ring-cyan-800"
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default InfoCard;
