import { useEffect, useState } from "react";
import CompanyLogo from "./assets/abstractly-logo.png";
import MenuIcon from "./assets/menu-line.svg";
import ShoppingBagIcon from "./assets/shopping-bag-3-line.svg";
import CloseIcon from "./assets/close-line.svg";
import Icon from "./Icon";

interface NavBarContentsProps {
  isMobile?: boolean;
}

function NavBarLinks({ isMobile = false }: NavBarContentsProps) {
  return (
    <ul
      className={`flex ${isMobile ? "flex-col gap-4 p-6" : "gap-8"} text-sm text-black sm:text-base md:text-lg`}
    >
      <li>
        <a>Shop all</a>
      </li>
      <li>
        <a>Latest arrivals</a>
      </li>
    </ul>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderIcon = (url: string, condition = true) =>
    condition && (
      <Icon size={25} url={url} fill="black" stroke="black" color="black" />
    );

  return (
    <div>
      <div className={`${isOpen ? "w-[95%]" : "w-full"}`}>
        <div
          className={`flex items-center justify-between gap-8 ${isOpen ? "bg-white" : ""} p-4 pt-2`}
        >
          <div className="flex items-center justify-between">
            <div>
              <img src={CompanyLogo} />
            </div>
            {!isMobile && <NavBarLinks isMobile={isMobile} />}
          </div>
          <div></div>
          <div className="flex gap-4">
            <button>{renderIcon(ShoppingBagIcon, !isOpen || !isMobile)}</button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? renderIcon(CloseIcon) : renderIcon(MenuIcon)}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="h-screen bg-white">
            <NavBarLinks isMobile={isMobile} />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed inset-y-0 right-0 w-[5%] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default NavBar;
