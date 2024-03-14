const Header = () => {
  return (
    <header className="w-full pt-0  lg:h-auto h-28 lg:pt-0  relative  flex justify-center items-center ">
      <Union />
      <div className="max-w-[1600px] ">
        <Nav />
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="w-full sticky   lg:pt-0 ">
      <Button />
    </nav>
  );
};
const Button = () => {
  return (
    <button className="flex  bg-[#FCFCFD] lg:mt-16 lg:w-[234px] rounded-full lg:h-[117px] w-[140px] h-[56px] items-center justify-center border border-[#D0D5DD] gap-6  lg:gap-8">
      <Logo />
      <Line />
      <Menu />
    </button>
  );
};
const Logo = () => {
  return <img className="lg:w-[51px] w-[24px]" src="images/Union.png" alt="" />;
};

const Line = () => {
  return <div className="h-full border border-gray-200"></div>;
};

const Menu = () => {
  return <img className="lg:w-[41px] w-[27px]" src="images/menu.png" alt="" />;
};

const Union = () => {
  return (
    <>
      <img
        className="w-full lg:block hidden  h-[155px] absolute top-0"
        src="images/union1.png"
        alt=""
      />
      <img
        className="w-full lg:hidden opacity-30 h-[155px] absolute top-0"
        src="images/union 3.png"
        alt=""
      />
    </>
  );
};

export { Header };
