import { ButtonTag } from "../material/ButtonTag";
import { ContainerTage } from "../material/ContainerTage";
import { DatePicker, Select, SelectItem } from "@nextui-org/react";

const location = ["BD", "USA", "US", "PK", "IRAN", "UK"];
const active = ["monday", "sunday", "tueday", "thusday", "friday", "donday"];
const Hero = () => {
  return (
    <>
      <section className="bg-[url(./hero.png)] bg-no-repeat object-cover bg-top min-h-[82vh] md:pt-16 lg:pt-20 ">
        <ContainerTage>
          <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-full   md:max-w-2xl">
            Find amazing things to do anytime, anywhere in Lagos.
          </h1>
          <div className="bg-white p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-xl mt-10 max-w-3xl">
            <div>
              <p className="text-base font-normal ms-1 text-secondary">
                Location
              </p>
              <Select
                placeholder="Oshodi"
                size="lg"
                className="border border-[#D6EBFD] rounded-2xl !text-secondary !font-bold box-s"
              >
                {location.map((loc) => (
                  <SelectItem
                    color="primary"
                    className="!text-xl font-bold box-i"
                    key={loc}
                  >
                    {loc}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <p className="text-base font-normal ms-1 text-secondary">
                Date
              </p>
              <DatePicker size="lg" placeholder="Birth date" className="" />
            </div>
            <div>
              <p className="text-base font-normal ms-1 text-secondary">
              Activities
              </p>
              <Select
                placeholder="Night Clubs"
                size="lg"
                className="border border-[#D6EBFD] rounded-2xl !text-secondary !font-bold"
              >
                {active.map((loc) => (
                  <SelectItem
                    color="primary"
                    className="!text-xl font-bold"
                    key={loc}
                  >
                    {loc}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <ButtonTag  className={"h-full py-3 tracking-wider"} >Search</ButtonTag>
          </div>
        </ContainerTage>
      </section>
    </>
  );
};

export default Hero;
