import { useContext, useEffect, useState } from "react";
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { motion } from "framer-motion";

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

const DrinkCarusole = () => {
  const [carusoleData, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [currentIndex, setIndex] = useState(0);
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

  const fetchdata = async () => {
    try {
      setloading(true);
      const response = await fetch("../../../../lib/data.json");
      if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
      }
      const resualt = await response.json();
      setData(resualt.clubcarusole);
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-secondary font-bold text-xl">Loading...</p>
    );
  }

  // Error state
  if (error) {
    return (
      <p className="text-center text-secondary font-bold text-xl">
        {error.message}
      </p>
    );
  }
  const handelPrevious = () => {
    setIndex(function (prevousindex) {
      if (prevousindex === carusoleData.length - 1) {
        return 0;
      } else {
        return prevousindex + 1;
      }
    });
  };

  const handelNext = () => {
    setIndex(function (nextindex) {
      if (nextindex === 0) {
        return carusoleData.length - 1;
      } else {
        return nextindex - 1;
      }
    });
  };
  const ActiveSlide = (index) => {
    setIndex(index);
  };
  const carusole = carusoleData[currentIndex];

  return (
    <>
      <section className="py-9">
      {message && (
          <p className="text-center text-xl top-0 fixed  left-0 right-0 bg-white py-4 z-10  font-bold  text-red-400">{message}</p>
        )}
        <ContainerTage className={"relative px-4 lg:px-10"}>
          <HeadingTag className={"text-3xl font-bold text-secondary pb-9"}>
            Upcoming Eat & Drink Events
          </HeadingTag>

          <button
            className="absolute -left-8 top-[45%] md:top-1/2"
            onClick={handelPrevious}
          >
            <ChevronLeft size={65} color="#26395C" strokeWidth={1} />{" "}
          </button>

          <button
            className="absolute -right-8 top-[45%] md:top1/2 "
            onClick={handelNext}
          >
            <ChevronRight size={65} color="#26395C" strokeWidth={1} />{" "}
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
              <HeadingTag className={"text-4xl pb-5"}>
                {carusole.name}
              </HeadingTag>
              <p className="text-xl font-normal text-secondary pb-4">
                {carusole.des}
              </p>
              <p className="text-secondary  text-lg font-bold">
                {" "}
                Our Price:  <span className="text-xl">-/{carusole.price}$</span>
              </p>


              <div className="grid grid-cols-2 gap-5 pt-4">
                {dateBox.map((res, i) => (
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
                  onclick={addToCart}
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
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-x-3 pt-10">
            {carusoleData.map((_, index) => (
              <span
                key={index}
                onClick={() => {
                  ActiveSlide(index);
                }}
                className={` ${
                  index === currentIndex ? "bg-secondary" : "bg-[#969DAA]"
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

export default DrinkCarusole;
