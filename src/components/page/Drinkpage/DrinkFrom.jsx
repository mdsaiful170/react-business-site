import { DatePicker, Select, SelectItem, TimeInput } from "@nextui-org/react";
import { ContainerTage } from "../../material/ContainerTage";
import { motion } from "framer-motion";
import { ButtonTag } from "../../material/ButtonTag";
import { HeadingTag } from "../../material/HeadingTag";

const DrinkFrom = () => {
  const location = ["BD", "USA", "US", "PK", "IRAN", "UK"];
  const active = ["chainess", "japan", "tueday", "thusday", "friday", "donday"];
  const pepole = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];
  return (
    <>
      <section className="py-7">
        <ContainerTage className={"px-7 py-8"}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <HeadingTag className={"text-3xl pb-4"}>
              Find the best places to eat and drink for any occasion
            </HeadingTag>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
                <DatePicker
                  color="none"
                  size="lg"
                  placeholder="Birth date"
                  className="border border-[#D6EBFD] rounded-xl bg-white"
                />
              </div>
              <div>
                <p className="text-base font-normal ms-1 text-secondary">
                  Time
                </p>
                <TimeInput
                  size="lg"
                  placeholder="time date"
                  className="border border-[#D6EBFD] rounded-xl"
                />
              </div>

              <div>
                <p className="text-base font-normal ms-1 text-secondary">
                  Cuisine
                </p>
                <Select
                  placeholder="Cuisine"
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
              <div>
                <p className="text-base font-normal ms-1 text-secondary">
                  Pepole
                </p>
                <Select
                  placeholder="0"
                  size="lg"
                  className="border border-[#D6EBFD] rounded-2xl !text-secondary !font-bold"
                >
                  {pepole.map((loc) => (
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

              <div className=" self-end border">
                <ButtonTag className={" py-7 lg:py-8 w-full tracking-wider"}>
                  Search
                </ButtonTag>
              </div>
            </div>
          </motion.div>
        </ContainerTage>
      </section>
    </>
  );
};

export default DrinkFrom;
