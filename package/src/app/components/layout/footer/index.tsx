import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
          <div className="relative flex items-center w-full">
            <div className="grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="grow h-px bg-black" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
