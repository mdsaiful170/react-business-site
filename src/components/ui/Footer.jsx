import { ContainerTage } from "../material/ContainerTage";
import {
  Facebook,
  Instagram,
  Linkedin,
  LoaderPinwheel,
  Twitter,
  PencilRuler,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { ButtonTag } from "../material/ButtonTag";

const logoicon = [
  { icon: Facebook },
  { icon: Twitter },
  { icon: Instagram },
  { icon: Linkedin },
  { icon: Youtube },
  { icon: LoaderPinwheel },
];

const MenuBox = [
  {
    name: "Menu",
    gridcols: "grid-cols-2",
    menulist: [
      "Home",
      "Eat",
      "Drink",
      "Events",
      "Club",
      "Recreation",
      "Blog",
      "careers",
      "Contact",
      "FAQs",
    ],
  },
  {
    name: "Utility Pages",
    gridcols: "grid-cols-1",
    menulist: [
      "Changelog",
      "Licenses",
      "404 Not Found",
      "Password Protected",
      "Style Guide",
      "Pay with Crypto",
      "Start Here",
      "Utility Pages",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <ContainerTage>
          <div className="grid items-start grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 ">
            <div className=" col-span-2 sm:col-span-1">
              <img
                src="./logo.svg"
                className="max-w-full h-auto object-cover "
                alt=""
              />
              <p className="py-3">Copyright {new Date().getFullYear()} © </p>

              <div className="flex gap-x-2 items-center pt-4 ">
                {logoicon.map((icon, i) => (
                  <div key={i}>
                    {
                      <icon.icon
                        size={24}
                        fill="#0E8BFF"
                        strokeWidth={2}
                        color="#FFFFFF"
                      />
                    }
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[#F5FAFF] px-6 py-7 md:hidden block rounded-2xl shadow-custom-1">
              <div className="rounded-2xl p-4 bg-primary inline-block">
                <PencilRuler size={28} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-bold text-secondary py-4">
                Become a Partner
              </h3>
              <p className="text-base font-normal text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
                pellentesque posuere.
              </p>
              <ButtonTag className={"w-full mt-4"}>Join Now</ButtonTag>
            </div>

            {MenuBox.map((res, i) => (
              <div key={i}>
                <h3 className="text-base font-bold pb-5 ">{res.name}</h3>
                <span className="h-[1px] bg-secondary/25 w-3/4 block mb-2"></span>
                <ul
                  className={`grid ${
                    res.gridcols === "grid-cols-2"
                      ? "grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {res.menulist.map((res, i) => (
                    <li
                      key={i}
                      className="pt-4 gap-x-1 group/box flex items-center  text-[#656B89] cursor-pointer font-normal"
                    >
                      <ArrowRight
                        size={17}
                        className="group-hover/box:text-primary"
                      />{" "}
                      <a
                        href="#"
                        className="group-hover/box:ps-1 group-hover/box:text-primary transition-all duration-200 ease-linear"
                      >
                        {res}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-[#F5FAFF] px-6 py-7 hidden md:block rounded-2xl shadow-custom-1">
              <div className="rounded-2xl p-4 bg-primary inline-block">
                <PencilRuler size={28} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-bold text-secondary py-4">
                Become a Partner
              </h3>
              <p className="text-base font-normal text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
                pellentesque posuere.
              </p>
              <ButtonTag className={"w-full mt-4"}>Join Now</ButtonTag>
            </div>
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Footer;
