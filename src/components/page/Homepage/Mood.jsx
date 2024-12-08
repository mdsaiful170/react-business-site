import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { MoodCard } from "../../ui/MoodCard";


const moodData = [
  {
    img: "./moon-1.png",
    title: "Eat & Drink",
  },
  {
    img: "./moon-2.png",
    title: "Events",
  },
  {
    img: "./moon-3.png",
    title: "Club",
  },
  {
    img: "./moon-4.png",
    title: "Things to do",
  },
];

const Mood = () => {
  return (
    <>
      <section className="pt-12">
        <ContainerTage>
          <HeadingTag className={"text-4xl text-center pb-7"}>What are you in the mood for?</HeadingTag>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-2">
            {moodData.map((res, i) => (
              <MoodCard key={i} {...res} />
            ))}
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Mood;
