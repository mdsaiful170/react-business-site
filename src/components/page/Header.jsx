import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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
import { AlignJustify, ChevronDown, UserRound, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ButtonTag } from "../material/ButtonTag";
const subMenuOne = ["Water Sports", "Day Parties", "Outdoors", "Rentals"];
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
  const menuToggleHandel = () => setIsMenuOpen((prv) => !prv);
  return (
    <Navbar
      isBlurred={false}
      isSticky
      shouldHideOnScroll={false}
      maxWidth="2xl"
      className="bg-white w-full py-5 mx-auto !overflow-y-auto"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={isMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <img
            src="./logo.svg"
            alt=""
            className=" w-[130px] lg:w-[166px] object-cover "
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-x-4 lg:gap-x-10"
        justify="end"
      >
        <NavbarItem>
          <Link color="secondary" className="font-medium text-lg " href="#">
            Eat & drink
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            color="secondary"
            className="font-medium text-lg"
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
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className="!w-[90px] shadow-none">
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
              className="text-left border border-stone-200 shadow-sm rounded-xl w-[170px]"
            >
              {subMenuOne.map((items, i) => (
                <DropdownItem
                  key={i}
                  color="#D6EBFD"
                  className="hover:bg-[#D6EBFD]"
                >
                  <Link
                    href={`"#"${items}`}
                    className="text-secondary text-base font-medium"
                  >
                    {items}
                  </Link>
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
              placement="top-left"
            >
              <Link color="secondary" className="font-medium text-lg " href="#">
                <ShoppingCart color="#26395C" strokeWidth={2} />
              </Link>
            </Badge>
          </NavbarItem>

          <NavbarItem>
            <Dropdown className="!w-[50px] shadow-none">
              <DropdownTrigger>
                <Button
                  variant="light"
                  disableAnimation={true}
                  className="text-secondary text-lg font-medium hover:!opacity-100"
                >
                  <UserRound color="#26395C" size={22} strokeWidth={2} />
                  Account{" "}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                className="text-left border border-stone-200 shadow-sm rounded-xl w-[170px]"
              >
                {subMenuTwo.map((items, i) => (
                  <DropdownItem
                    key={i}
                    color="#D6EBFD"
                    className="hover:bg-[#D6EBFD]"
                  >
                    <Link
                      href={`"#"${items}`}
                      className="text-secondary text-base font-medium"
                    >
                      {items}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarItem>

        <NavbarItem>
          <ButtonTag>contact now</ButtonTag>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
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

      <NavbarMenu
        className="w-full mt-12 py-5 !h-auto z-10 !overflow-auto bg-bgcolor"
        onAnimationIteration={true}
      >
        <NavbarItem className="pb-8 cursor-pointer">
          <Link className="text-2xl font-medium text-secondary">
            Eat & Drink
          </Link>
        </NavbarItem>
        <NavbarItem className="pb-8 cursor-pointer">
          <Link className="text-2xl font-medium text-secondary">Events</Link>
        </NavbarItem>
        <NavbarItem className="pb-8 cursor-pointer">
          <Link className="text-2xl font-medium text-secondary">Club</Link>
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
                <Button
                  className=" text-secondary !bg-none hover:!bg-bgcolor   text-2xl font-medium hover:!opacity-80 hover:!bg-none"
                  disableAnimation={true}
                  href="#"
                  variant="light"
                >
                  {item}
                </Button>
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
