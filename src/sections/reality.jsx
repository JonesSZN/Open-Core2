const Reality = () => {
  return (
    <section className="w-full bg-[#F9FAFB] lg:py-16 py-12 flex justify-center">
      <div className="lg:w-[90%] w-[95%]  max-w-[1600px]">
        <div className="py-16 lg:py-24  overflow-hidden relative flex justify-center lg:rounded-3xl rounded-2xl bg-gradient-to-b from-[#2F5478] to-[#2F5478] via-[#22405C]">
          <Unions />
          <div className=" lg:flex lg:py-16 lg:flex-row lg:justify-between lg:items-center flex flex-col items-center lg:w-[85%] w-[95%]">
            <Left />
            <Right />
          </div>
        </div>
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div>
      <h2 className="lg:text-8xl text-[40px] max-w-[300px] lg:max-w-[800px] font-[400] text-white">
        Transforming your <span className="font-[600]">ideas into reality</span>
      </h2>
      <p className="font-[500] lg:text-[24px] lg:max-w-[900px] max-w-[330px] text-[16px] mt-4 text-[#EAECF0]">
        Let's build something extraordinary together to captivate your audience.
      </p>
    </div>
  );
};
const Right = () => {
  return (
    <div className="lg:w-[403px] lg:mt-0 mt-16 w-[249px] text-[32px] font-[500] flex justify-center items-center text-white lg:h-[403px] h-[249px] rounded-full border-[2px] border-white">
      Let's Work <br /> Together!
    </div>
  );
};
const Unions = () => {
  return (
    <>
      <img
        className="w-full lg:block hidden   h-[155px] absolute top-0"
        src="images/union4.png"
        alt=""
      />
      <img
        className="w-full lg:hidden    h-[155px] absolute top-0"
        src="images/union7.png"
        alt=""
      />
      <img
        className="w-full lg:block hidden  h-[155px] absolute bottom-0"
        src="images/union5.png"
        alt=""
      />
      <img
        className="w-full lg:hidden   h-[155px] absolute bottom-0"
        src="images/union8.png"
        alt=""
      />
    </>
  );
};

export default Reality;
