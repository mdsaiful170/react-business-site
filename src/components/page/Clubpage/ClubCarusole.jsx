import { useContext, useEffect, useState } from "react";
import { ContainerTage } from "../../material/ContainerTage";
import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Instagram,
  MapPin,
  Tag,
  Twitter,
  Wallet,
} from "lucide-react";
import { HeadingTag } from "../../material/HeadingTag";
import { ButtonTag } from "../../material/ButtonTag";
import { CartContext } from "../../ui/ContextBox";

const dateBox = [
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
];

const ClubCarusole = () => {
  const [carausoleData, setData] = useState([]);
  const [loadingData, setloadingData] = useState(true);
  const [error, seterror] = useState(false);
  const [currentIndexData, setIndex] = useState(0);
  const carusole = carausoleData[currentIndexData];
  const { dispatch } = useContext(CartContext);
  const [message, setmessage] = useState("");
  const addToCart = () => {
    if (carusole) {
      dispatch({ type: "ADD_TO_CART", payload: carusole }); // Use the current carousel item
      setmessage(`${carusole.name} added to cart successfully!`);
      setTimeout(() => {
        setmessage(""); // Hide message after 2 seconds
      }, 2000);
    }
  };

  const handelPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === carausoleData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handelNext = () => {
    setIndex((nextIndex) =>
      nextIndex === 0 ? carausoleData.length - 1 : nextIndex - 1
    );
  };

  const ActiveSlide = (index) => {
    setIndex(index);
  };

  const fetchDatabox = async () => {
    try {
      setloadingData(true);
      const responseCarusoleData = await fetch("../../../../lib/data.json");
      if (!responseCarusoleData.ok) {
        throw new Error("HTTP error: " + responseCarusoleData.status);
      }
      const resualteData = await responseCarusoleData.json();
      setData(resualteData.clubcarusole);
    } catch (error) {
      seterror(error);
    } finally {
      setloadingData(false);
    }
  };
  useEffect(() => {
    fetchDatabox();
  }, []);

  if (loadingData)
    return (
      <p className="text-xl font-bold text-white text-center py-4">
        loading...
      </p>
    );
  if (error)
    return (
      <p className="text-xl font-bold text-white text-center py-4">
        {error.message}
      </p>
    );

  return (
    <>
      <section className="py-9">
        {message && (
          <p className="text-center text-xl top-0 fixed left-0 z-10 right-0 bg-black py-4   font-bold  text-emerald-400">{message}</p>
        )}
        <ContainerTage className={"relative px-4 lg:px-10"}>
          <HeadingTag className={"text-3xl font-bold text-white pb-9"}>
            Tonight In Lagos
          </HeadingTag>

          <button
            className="absolute -left-8 top-[45%] md:top-1/2"
            onClick={handelPrevious}
          >
            <ChevronLeft size={65} color="#FFFFFF" strokeWidth={1} />{" "}
          </button>

          <button
            className="absolute -right-8 top-[45%] md:top1/2 "
            onClick={handelNext}
          >
            <ChevronRight size={65} color="#FFFFFF" strokeWidth={1} />{" "}
          </button>

          <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="col-span-4 md:col-span-2 lg:col-span-3"
            >
              <div className="w-full h-[420px] lg:h-[580px]">
                <img
                  src={carusole.img}
                  className="w-full h-full  object-cover max-w-full rounded-2xl shadow-custom-1"
                  alt="img"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="col-span-4 md:col-span-2 "
            >
              <HeadingTag className={"text-4xl pb-5 text-white"}>
                {carusole.name}
              </HeadingTag>
              <p className="text-xl font-normal text-white pb-6">
                {carusole.des}
              </p>

              <div className="grid grid-cols-2 gap-5">
                {dateBox.map((res, i) => (
                  <div key={i} className="flex items-center gap-x-3 gap-y-4">
                    <div>
                      {<res.icon size={28} fill="#0E8BFF" color="#FFFFFF" />}
                    </div>
                    <p className="font-bold text-xl text-white">
                      {res.subtext}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white mt-4 text-base font-bold">
                {" "}
                Our Price: -/{carusole.price}$
              </p>
              <div className="pt-6 space-x-4">
                <ButtonTag
                  varient={"bordered"}
                  onclick={addToCart}
                  className={
                    " !text-primary hover:!text-white hover:!border-secondary "
                  }
                >
                  Add to Cart
                </ButtonTag>
                <ButtonTag className={""}>Book Now </ButtonTag>
              </div>

              <p className="text-xl gap-x-2 font-normal text-white pt-7 flex items-center">
                Connect with us on:{" "}
                <Twitter size={24} fill="#FFFFFF" color="#000000" />{" "}
                <Instagram size={24} fill="#FFFFFF" color="#000000" />
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-x-3 pt-10">
            {carausoleData.map((_, index) => (
              <span
                key={index}
                onClick={() => {
                  ActiveSlide(index);
                }}
                className={` ${
                  index === currentIndexData ? "bg-primary" : "bg-[#969DAA]"
                } size-4  rounded-full cursor-pointer  block `}
              ></span>
            ))}
          </div>
          <br />
        </ContainerTage>
      </section>
    </>
  );
};

export default ClubCarusole;
