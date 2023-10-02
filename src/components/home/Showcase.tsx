import InfoCard from "./InfoCard";

const intropage = [
  {
    title: "Innovative AI Solutions",
    description:
      "🚀 Leverage the most advanced Artificial Intelligence techniques to develop custom solutions tailored to your unique needs.",
    link: "",
  },
  {
    title: "Seamless Digital Transformation",
    description:
      "🌟 Ensure smooth and efficient digital transformation, Enhancing customer experiences, streamline processes, and stay ahead of the competition.",
    link: "",
  },
  {
    title: "Modern Full-Stack Development",
    description:
      "💼 Excel in full-stack development, integrating the latest technologies and tech stacks to create robust and scalable applications.",
    link: "",
  },
];

const Showcase = () => {
  return (
    <div
      className="grid grid-cols-3 
    h-[90vh]  gap-5  
    px-8 mt-8
    items-baseline justify-center"
    >
      {intropage.map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Showcase;
