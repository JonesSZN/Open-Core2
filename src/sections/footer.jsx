const Footer = () => {
  return (
    <footer className="bg-[#294F74] w-full py-12 lg:py-24 flex justify-center">
      <div className="lg:w-[90%] w-[95%] max-w-[1600px]">
        <div className="flex flex-col h-[579px] relative bg-white lg:rounded-[48px] rounded-2xl p-8 lg:p-24 lg:gap-16">
          <TopFooter />
          <BottomFooter />
          <Logo />
        </div>
      </div>
    </footer>
  );
};

const TopFooter = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:justify-between">
      <Topleft />
      <TopRight />
    </div>
  );
};

const Topleft = () => {
  const Socials = () => {
    return (
      <>
        <div className="flex mt-8 lg:justify-normal justify-between lg:gap-8">
          <img className="lg:block hidden" src="images/Socials.png" alt="" />
          <img className="lg:hidden w-full" src="images/Socials2.png" alt="" />
        </div>
      </>
    );
  };
  return (
    <div>
      <h2 className="text-[#1D2939] lg:mb-0 mb-2 lg:text-left text-center lg:text-[32px] text-[20px] font-[600]">
        Say Hello!
      </h2>
      <p className="text-[#667085] lg:text-[24px] gap-2 lg:p-0 p-2 lg:border-none border flex items-center justify-center border-gray-200 rounded-lg text-[16px] font-[400]">
        opencoregroup@gmail.com
        <img className="lg:hidden" src="images/Frame.png" alt="" />
      </p>
      <Socials />
      <Line />
    </div>
  );
};
const TopRight = () => {
  const List = ["Home", "Services", "About Us", "Contact us", "Work"];
  return (
    <>
      <ul className="grid lg:text-[24px] text-[16px] text-[#475467] font-[400] grid-cols-2 gap-x-12 gap-y-4">
        {List.map((list) => (
          <li>
            <a href="/">{list}</a>
          </li>
        ))}
      </ul>
      <Line />
    </>
  );
};

const BottomFooter = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col items-center lg:justify-between cursor-pointer text-[#667085] lg:text-[24px] text-[14px] font-[400]">
      <p>Toronto, ON Canada</p>
      <p>OpenCore. All Rights Reserved</p>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="text-[#294F74] lg:w-auto w-full absolute -bottom-4 lg:-bottom-8 left-1/2 transform -translate-x-1/2">
      <img src="images/Logo2.png" alt="" />
    </div>
  );
};
const Line = () => {
  return (
    <div className="w-full lg:hidden my-8 h-[1px] border border-gray-200"></div>
  );
};

export { Footer };
