import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { UserRound } from "lucide-react";
const Dropdwonbox = (props) => {
  const submenu = props?.submenu;
  return (
    <>
      <Dropdown>
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
          className="text-left w-[170px]"
        >
          {submenu &&
            submenu?.map((items, i) => (
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
    </>
  );
};

export default Dropdwonbox;
