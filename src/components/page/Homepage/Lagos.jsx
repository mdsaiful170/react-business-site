import { ContainerTage } from "../../material/ContainerTage";
import { LagosCard } from "../../ui/LagosCard";
import { HeadingTag } from "../../material/HeadingTag";

const LagosData = [
  {
    img: "./img2.png",
    dely: 0.2,
    title: "Sight Seeing",
  },
  {
    img: "./img3.png",
    dely: 0.4,
    title: "Sight Seeing",
  },
  {
    img: "./img1.png",
    dely: 0.6,
    title: "Volley Ball Game",
  },
  {
    img: "./img1.png",
    dely: 0.8,
    title: "Wizkid Show",
  },
  {
    img: "./img2.png",
    dely: 0.2,
    title: "Sight Seeing",
  },
  {
    img: "./img3.png",
    dely: 0.4,
    title: "Sight Seeing",
  },
  {
    img: "./img1.png",
    dely: 0.6,
    title: "Volley Ball Game",
  },
  {
    img: "./img1.png",
    dely: 0.8,
    title: "Wizkid Show",
  },
];

const Lagos = () => {
  return (
    <>
      <section className="bg-[#F5FAFF] shadow-[#9A9FBF1A] shadow py-8">
        <ContainerTage>
          <HeadingTag className={"pt-12 pb-10 text-4xl"}>
            Top things to do in Lagos
          </HeadingTag>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
            {LagosData.map((res, i) => (
              <LagosCard key={i} {...res} />
            ))}
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Lagos;
