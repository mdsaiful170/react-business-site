import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  Link,
  Button,
  Chip,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ButtonTag } from "../material/ButtonTag";
import Dropdwonbox from "../ui/Dropdwonbox";
import Modelbox from "../ui/Modelbox";
import { NavLink } from "react-router-dom";
const subMenuOne = ["water Sports", "Day Parties", "Outdoors", "Rentals"];
const subMenuTwo = ["My Profile", "My History", "singOut"];
const subMenuThree = [
  "My Profile",
  "Pay With Crypto",
  "Cart",
  "Contact Us",
  "Log Out",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const value = true;
  const menuToggleHandel = () => setIsMenuOpen((prv) => !prv);
  return (
    <Navbar
      isBlurred={false}
      isSticky
      shouldHideOnScroll={false}
      maxWidth="xl"
      className="bg-white w-full py-5 mx-auto !overflow-y-auto"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={isMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <NavLink to={"/"}>
            <img
              src="./logo.svg"
              alt=""
              className=" w-[130px] lg:w-[166px] object-cover "
            />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-x-4 lg:gap-x-10"
        justify="end"
      >
        <NavbarItem>
          <NavLink
            to={"/drink"}
            className={({ isActive }) =>
              `font-medium text-lg ${
                isActive ? "text-primary" : "text-secondary"
              }`
            }
          >
            Eat & drink
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={"/club"}
            className={({ isActive }) =>
              `font-medium text-lg ${
                isActive ? "text-primary" : "text-secondary"
              }`
            }
            aria-current="page"
          >
            Club{" "}
            <sup>
              <Chip
                className="px-2 mb-2 font-bold !py-0 text-[10px] h-[18px]"
                size="sm"
                color="primary"
              >
                hot
              </Chip>
            </sup>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                disableAnimation={true}
                className="text-secondary text-lg font-medium hover:!opacity-100"
              >
                Things to do{" "}
                <ChevronDown color="#0E8BFF" size={20} strokeWidth={3} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              className="text-left  rounded-xl w-[170px]"
            >
              {subMenuOne.map((items, i) => (
                <DropdownItem
                  key={i}
                  color="#D6EBFD"
                  className="hover:bg-[#D6EBFD]"
                >
                  <NavLink
                    to={`/${items.replace(/\s+/g, "").trim().toLowerCase()}`}
                    className={({ isActive }) =>
                      `font-medium text-lg ${
                        isActive ? "!text-primary" : "!text-secondary"
                      }`
                    }
                  >
                    {items}
                  </NavLink>
                  {console.log(items.trim())}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem className="flex items-center gap-x-4">
          <NavbarItem>
            <Badge
              className=""
              content={3}
              color="primary"
              placement="top-right"
            >
              <NavLink
                to={"/shopingcart"}
                className={({ isActive }) =>
                  `font-medium text-lg ${
                    isActive ? "!text-primary" : "!text-secondary"
                  }`
                }
              >
                <ShoppingCart strokeWidth={2} />
              </NavLink>
            </Badge>
          </NavbarItem>

          <NavbarItem>
            {value === true ? (
              <Modelbox />
            ) : (
              <Dropdwonbox submenu={subMenuTwo} />
            )}
          </NavbarItem>
        </NavbarItem>

        <NavbarItem>
          <ButtonTag>contact now</ButtonTag>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden space-x-3" justify="end">
        <NavbarItem>
          {value === true ? <Modelbox /> : <Dropdwonbox submenu={subMenuTwo} />}
        </NavbarItem>

        <NavbarItem>
          <Badge className="" content={3} color="primary" placement="top-right">
            <NavLink
              to={"/shopingcart"}
              className={({ isActive }) =>
                `font-medium text-lg ${
                  isActive ? "!text-primary" : "!text-secondary"
                }`
              }
            >
              <ShoppingCart strokeWidth={2} />
            </NavLink>
          </Badge>
        </NavbarItem>

        <NavbarItem>
          <button onClick={menuToggleHandel}>
            {isMenuOpen ? (
              <X color="#26395C" size={24} strokeWidth={3} />
            ) : (
              <AlignJustify color="#26395C" size={24} strokeWidth={3} />
            )}
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* mobile menu bar */}
      <NavbarMenu
        className="w-full mt-10 py-5 !h-auto z-10 !overflow-auto bg-bgcolor"
        onAnimationIteration={true}
      >
        <NavbarItem className="pb-8 cursor-pointer">
          <NavLink
            to={"/drink"}
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive ? "text-primary" : "text-secondary"
              }`
            }
          >
            Eat & drink
          </NavLink>
        </NavbarItem>
        <NavbarItem className="pb-8 cursor-pointer">
          <NavLink
            to={"/events"}
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive ? "text-primary" : "text-secondary"
              }`
            }
          >
            Events
          </NavLink>
        </NavbarItem>
        <NavbarItem className="pb-8 cursor-pointer">
          <NavLink
            to={"/club"}
            className={({ isActive }) =>
              `font-medium text-2xl ${
                isActive ? "text-primary" : "text-secondary"
              }`
            }
          >
            Club
          </NavLink>
        </NavbarItem>

        <Accordion variant="light">
          <AccordionItem
            key="1"
            aria-label="things list"
            title={
              <h3 className="text-2xl font-medium text-secondary">
                Things to do
              </h3>
            }
            className="!text-left border-b border-secondary/25 pb-2 !-ms-2 !-mt-2"
            indicator={<ChevronDown color="#26395C" size={24} />}
          >
            {subMenuThree.map((item, i) => (
              <NavbarItem className="-ms-6 pb-8" key={i}>
                <NavLink
                  to={`/${item.replace(/\s+/g, "").trim().toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-medium text-2xl ${
                      isActive ? "text-primary" : "text-secondary"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </NavbarItem>
            ))}
          </AccordionItem>
        </Accordion>

        <ButtonTag className={"px-6 w-1/2 py-5 font-bold mt-6"}>
          Get Started
        </ButtonTag>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;