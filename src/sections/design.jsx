const Design = () => {
  return (
    <section className="w-full lg:bg-[#FCFCFD] bg-white py-12 lg:pt-24 flex justify-center">
      <div className="lg:w-[90%] w-[95%] max-w-[1600px]">
        <Cards />
      </div>
    </section>
  );
};

const Cards = () => {
  const Card = [
    {
      image: "images/paint.png",
      tag: "All",
      color: "#F2F4F7",
    },
    {
      image: "images/course.png",
      tag: "Design Course",
      color: "#F5EDEA",
    },
    {
      image: "images/lightbulb.png",
      tag: "Design Tips",
      color: "#F9F0B0",
    },
    {
      image: "images/clip.png",
      tag: "Dev Source",
      color: "#DCFFD1",
    },
  ];
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-4">
      {Card.map((item) => (
        <div
          style={{
            backgroundColor: item.color,
          }}
          className="rounded-2xl overflow-hidden w-full  h-[190px]  relative"
        >
          <div className="absolute  right-0 top-0 rotate-[20]">
            <img
              className="object-cover w-full h-full"
              src={item.image}
              alt=""
            />
          </div>
          <button className=" absolute bottom-5 px-8 py-2 left-7 rounded-xl bg-white text-[#1D2939] font-[500]">
            {item.tag}
          </button>
        </div>
      ))}
    </div>
  );
};

export { Design };
