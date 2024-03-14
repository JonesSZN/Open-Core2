const Hero = () => {
  return (
    <section className="lg:w-full  flex justify-center relative py-12 lg:py-16 bg-gradient-to-b from-white to-white via-[#F4F4F4]">
      <img
        className="w-full lg:block hidden h-24 absolute bottom-0"
        src="images/Union2.png"
        alt=""
      />
      <img
        className="w-full lg:hidden rotate-180 h-24 absolute bottom-0"
        src="images/Union 3.png"
        alt=""
      />
      <div className="flex flex-col   items-center">
        <Top />

        <BottomImages />
      </div>
    </section>
  );
};

const Top = () => {
  return (
    <div className="flex  flex-col items-center gap-3">
      <h1 className="lg:text-8xl text-[40px] text-center lg:max-w-[800px] text-[#294F74] font-[600]">
        Development and Design{" "}
        <span className="text-black font-[600]">Resources</span>
      </h1>
      <p className="text-[#667085] max-w-[350px] lg:max-w-[800px] text-center lg:text-[32px] text-[16px] font-[500]">
        Return to our Homepage or explore our Services. The key destinations are
        just a click away.
      </p>
    </div>
  );
};

const BottomImages = () => {
  return <img className="lg:mt-48 mt-24 " src="images/heroimage.png" alt="" />;
};

export { Hero };
