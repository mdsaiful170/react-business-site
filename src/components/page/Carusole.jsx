import { ContainerTage } from "../material/ContainerTage";
import { HeadingTag } from "../material/HeadingTag";
import { ButtonTag } from "../material/ButtonTag";
import {
  Instagram,
  Twitter,
  MapPin,
  Tag,
  Clock,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const CarusoleData = [
  {
    img: "carusole-img-1.png",
    title: "Wizkid made in lagos tour",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    dateBox: [
      {
        icon: Wallet,
        subtext: "Dec 12 2022",
      },
      {
        icon: MapPin,
        subtext: "TBS  Lagos",
      },
      {
        icon: Clock,
        subtext: "9:00 PM ",
      },
      {
        icon: Tag,
        subtext: "N20,000",
      },
    ],
  },
  {
    img: "carusole-img-2.png",
    title: "Upcoming events this weekend",
    des: "Lorem ipsum dolor Enjoy the freedom of universal payments for a seamless marketplace experience sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Enjoy the freedom of universal payments for a seamless marketplace experience ",
    dateBox: [
      {
        icon: Wallet,
        subtext: "Dec 12 2022",
      },
      {
        icon: MapPin,
        subtext: "TBS  Lagos",
      },
      {
        icon: Clock,
        subtext: "9:00 PM ",
      },
      {
        icon: Tag,
        subtext: "N20,000",
      },
    ],
  },
  {
    img: "carusole-img-3.png",
    title: "Pay with Crypto on the go",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enjoy the freedom of universal payments for a seamless marketplace experience",
    dateBox: [
      {
        icon: Wallet,
        subtext: "Dec 12 2022",
      },
      {
        icon: MapPin,
        subtext: "TBS  Lagos",
      },
      {
        icon: Clock,
        subtext: "9:00 PM ",
      },
      {
        icon: Tag,
        subtext: "N20,000",
      },
    ],
  },
];

const Carusole = () => {
  const [currentIndex, setIndex] = useState(0);

  const handelPrevious = () =>
    setIndex((previous) => {
      return previous === CarusoleData.length - 1 ? 0 : previous + 1;
    });

  const handelNext = () =>
    setIndex((next) => {
      return next === 0 ? CarusoleData.length - 1 : next - 1;
    });

  const handelDotbox = (index) => setIndex(index);

  const carusole = CarusoleData[currentIndex];
  return (
    <>
      <section className="py-8 pb-12 border border-[#9A9FBF1A] bg-white">
        <HeadingTag
          className={
            "text-[42px] font-bold text-secondary text-center pb-10 pt-8"
          }
        >
          See How People are Chilling On Chillsbay
        </HeadingTag>
        <ContainerTage className={"relative  px-4 lg:px-10 "}>
          <HeadingTag
            className={"text-left text-3xl font-bold text-secondary pb-8"}
          >
            Upcoming events this weekend
          </HeadingTag>

          <button
            className="absolute -left-8 top-[45%] md:top-1/2"
            onClick={handelPrevious}
          >
            <ChevronLeft size={60} color="#26395C" strokeWidth={1} />{" "}
          </button>

          <button
            className="absolute -right-8 top-[45%] md:top1/2 "
            onClick={handelNext}
          >
            <ChevronRight size={60} color="#26395C" strokeWidth={1} />{" "}
          </button>

          <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <img
                src={carusole.img}
                className="w-full h-auto md:h-[460px] lg:h-[580px] object-cover max-w-full rounded-2xl shadow-custom-1"
                alt="img"
              />
            </div>

            <div className="col-span-4 md:col-span-2 ">
              <HeadingTag className={"text-[42PX] pb-5"}>
                {carusole.title}
              </HeadingTag>
              <p className="text-xl font-normal text-secondary pb-6">
                {carusole.des}
              </p>

              <div className="grid grid-cols-2 gap-5">
                {carusole.dateBox.map((res, i) => (
                  <div key={i} className="flex items-center gap-x-3 gap-y-4">
                    <div>
                      {<res.icon size={28} fill="#0E8BFF" color="#FFFFFF" />}
                    </div>
                    <p className="font-bold text-xl text-secondary">
                      {res.subtext}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 space-x-4">
                <ButtonTag
                  varient={"bordered"}
                  className={
                    " !text-primary hover:!text-white hover:!border-secondary "
                  }
                >
                  Add to Cart
                </ButtonTag>
                <ButtonTag className={""}>Book Now </ButtonTag>
              </div>

              <p className="text-xl gap-x-2 font-normal text-secondary pt-7 flex items-center">
                Connect with us on:{" "}
                <Twitter size={24} fill="#0E8BFF" color="#FFFFFF" />{" "}
                <Instagram size={24} fill="#0E8BFF" color="#FFFFFF" />
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-3 pt-8">
            {CarusoleData.map((_, index) => (
              <button
                className={` size-3 rounded-full  ${
                  index === currentIndex ? "bg-secondary" : "bg-secondary/50"
                }`}
                key={index}
                onClick={() => handelDotbox(index)}

              > </button>
       
            ))}
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Carusole;
