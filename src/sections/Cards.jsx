const Cards = () => {
  return (
    <section className="w-full lg:py-6 py-12 bg-[#FCFCFD] flex justify-center">
      <div className="lg:w-[90%] w-[95%] max-w-[1600px]">
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  const Cardcontent = [
    {
      image: "images/frame1.png",
      text: "How to prepare Your design Portfolio on Behance",
      tags: ["Design Tips"],
    },
    {
      image: "images/frame2.png",
      text: "How to Make Epic Websites Devlopment",
      tags: ["Design Tips", "Html", "CSS"],
    },
    {
      image: "images/frame3.png",
      text: "Fluid Card Animation in After Effects",
      tags: ["Design Tips", "UI UX", "Branding"],
    },
    {
      image: "images/frame1.png",
      text: "How to prepare Your design Portfolio on Behance",
      tags: ["Design Tips"],
    },
    {
      image: "images/frame2.png",
      text: "How to Make Epic Websites Development",
      tags: ["Development", "Html", "CSS"],
    },
    {
      image: "images/frame3.png",
      text: "Fluid Card Animation in After Effects",
      tags: ["Design", "UI UX", "Branding"],
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3  lg:gap-x-6 lg:gap-y-12 grid grid-cols-1 gap-8">
      {Cardcontent.map((card) => (
        <div className="lg:h-[509px] h-[400px] overflow-hidden border-[5px] border-white  rounded-3xl">
          <div className="w-full">
            <img src={card.image} alt="" />
          </div>
          <div className="w-full  h-full p-6 bg-[#F9FAFB]">
            <p className="lg:text-[32px] text-[22px] text-[#344054] font-[500]">
              {card.text}
            </p>
            <div className="flex gap-4">
              {card.tags.map((tag) => (
                <div className="px-4 cursor-pointer py-2 lg:mt-4 mt-2 text-[14px] bg-white rounded-full text-[#667085] font-[500]">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

export { Cards };
