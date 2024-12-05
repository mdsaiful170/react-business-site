import { delay } from "framer-motion";
import { ContainerTage } from "../material/ContainerTage";
import { HeadingTag } from "../material/HeadingTag";
import { ChillsbayCard } from "../ui/ChillsbayCard";

const ChillsbayCardData = [
  {
    img: "./chilly-icon-1.svg",
    title: "Your  entire  tripin one checkout!",
    content: "Add multiple experiences to your cart and checkout on one click.",
   
    delay:0.2
  },
  {
    img: "./chilly-icon-2.svg",
    title: "Pay with Crypto on the go",
    content:
      "Enjoy the freedom of universal payments for a seamless marketplace experience",
    delay:0.4
  },
  {
    img: "./chilly-icon-3.svg",
    title: "Free Cancellationand ticket transfer",
    content:
      "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
    delay:0.6
  },
];

const Chillsbay = () => {
  return (
    <>
      <section className="py-5 pb-10">
        <HeadingTag className={"text-center text-[40px] pt-14 pb-10"}>
          Why Use Chillsbay?
        </HeadingTag>
        <ContainerTage
          className={
            "bg-[#F5FAFF] lg:px-10 px-6 py-10 lg:py-14  shadow-custom-1  rounded"
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8">
            {ChillsbayCardData.map((res, i) => (
              <ChillsbayCard {...res} key={i} />
            ))}
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Chillsbay;
