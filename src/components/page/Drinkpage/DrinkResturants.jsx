import { useEffect, useState } from "react";
import { ContainerTage } from "../../material/ContainerTage";
import { ResturantCard } from "../../ui/ResturantCard";
import { HeadingTag } from "../../material/HeadingTag";

const Drinkresturants = ({ title }) => {
  const [resturentdata, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    fetch("../../../../lib/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.statusText}`);
        }
        return response.json();
      })
      .then((result) => {
        setdata(result.resturant);
        setloading(false);
      })
      .catch((error) => {
        seterror(error);
        setloading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-secondary text-base font-bold ">
        Loding...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-secondary text-base font-bold ">
        Error: {error.message}
      </p>
    );

  return (
    <>
      <section className="md:py-12 :py-16 bg-[#F5FAFF]  shadow-custom-4">
        <ContainerTage>
          <div className="flex items-center justify-between pb-4 ">
            <HeadingTag
              className={"font-bold text-3xl mb-4 mt-4 text-secondary"}
            >
              {title && title}
            </HeadingTag>
            <p className=" cursor-pointer text-2xl font-semibold text-primary">
              see more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
            {resturentdata.map((data, i) => (
              <ResturantCard key={i} resturent={data} />
            ))}
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Drinkresturants;
