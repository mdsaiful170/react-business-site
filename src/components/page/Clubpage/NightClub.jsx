import { useEffect, useState } from "react";
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { NightCard } from "../../ui/NightCard";

const NightClub = ({ title }) => {
  const [nightdata, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    fetch("../../../../lib/data.json")
      .then(function (responseData) {
        if (!responseData.ok) {
          throw new Error(`HTTP Error: ${responseData.status}`);
        }
        return responseData.json();
      })
      .then(function (resualtData) {
        setdata(resualtData.nightClub);
        setloading(false);
      })
      .catch(function (error) {
        seterror(error);
        setloading(false);
      });
  }, []);
  if (loading) {
    return (
      <p className="text-white text-xl font-bold text-center py-4">
        Loadding...
      </p>
    );
  }
  if (error) {
    return (
      <p className="text-white text-xl font-bold text-center py-4">
        Error: {error.message}
      </p>
    );
  }

  return (
    <>
      <section className="py-16">
        <ContainerTage>
        <ContainerTage>
          <div className="flex items-center justify-between pb-5 ">
            <HeadingTag
              className={"font-bold text-3xl mb-4 mt-4 text-white"}
            >
              {title && title}
            </HeadingTag>
            <p className=" cursor-pointer text-2xl font-semibold text-whit">
              see more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
            {nightdata.map((data, i) => (
              <NightCard key={i} Night={data} />
            ))}
          </div>
        </ContainerTage>

        </ContainerTage>
      </section>
    </>
  );
};

export default NightClub;
