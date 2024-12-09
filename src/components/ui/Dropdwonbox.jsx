import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { UserRound } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Dropdwonbox = (props) => {
  const submenu = props?.submenu;
  const location = useLocation();
  const path = () => {
    return location.pathname === "/club" ? "white" : "secondary";
  };

  return (
    <>
      <Dropdown
        className={`${location.pathname === "/club"? "bg-black" :"bg-white"}`}
      >
        <DropdownTrigger>
          <Button
            variant="light"
            disableAnimation={true}
            className={` text-${path()} text-lg font-medium hover:!opacity-100 hover:!bg-transparent`}
          >
            <UserRound className={`${path()}`} size={22} strokeWidth={2} />
            Account{" "}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          className="text-left w-[170px]"
        >
          {submenu &&
            submenu?.map((items, i) => (
              <DropdownItem
                key={i}
                color="#D6EBFD"
                className={`hover:bg-[#D6EBFD] group/box }`}
              >
                <NavLink
                  to={`/${items.replace(/\s+/g, "").trim().toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-medium text-base ${
                      isActive ? "!text-primary" : `text-${path()}`
                    } group-hover/box:text-secondary  `
                  }
                >
                  {items}
                </NavLink>
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default Dropdwonbox;
