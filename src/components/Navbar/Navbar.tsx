import { useEffect, useState } from "react";
import CompanyLogo from "../../assets/abstractly-logo.png";
import Icon from "../Icons/Icon";
import NavbarLinks from "./NavbarLinks";

function useMobileView() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobileView();

  const renderIcon = (iconName: string) => (
    <Icon size={25} name={iconName} fill="black" stroke="black" color="black" />
  );

  return (
    <>
      <div className={`${isOpen ? "w-[95%]" : "w-full"}`}>
        <div
          className={`flex items-center justify-between gap-8 ${isOpen ? "bg-white" : ""} ${isMobile ? "p-6" : "p-4"}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <img src={CompanyLogo} />
            </div>
            {!isMobile && <NavbarLinks />}
          </div>
          <div className="flex gap-4">
            <button>
              {!isOpen || !isMobile ? renderIcon("shoppingBag") : null}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? renderIcon("close") : renderIcon("menu")}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="h-screen bg-white">
            <NavbarLinks direction="stacked" />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed inset-y-0 right-0 w-[5%] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
