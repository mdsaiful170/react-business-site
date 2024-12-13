import { Mail, Phone } from "lucide-react";
import { ContainerTage } from "../../material/ContainerTage";
import { ButtonTag } from "../../material/ButtonTag";
import { motion } from "framer-motion";

const ContactFrom = () => {
  return (
    <div>
      <section className="py-14 md:py-16 lg:py-10 px-5">
        <ContainerTage>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20  ">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
              className=" md:place-items-center"
            >
              <div className=" w-full md:max-w-md md:mt-10 md:ms-10  ">
                <h2 className="text-4xl font-bold text-secondary">
                  Contact Us
                </h2>
                <p className="text-[#656B89] max-w-md font-normal pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  nunc, quisque ultricies netus elit massa aliquam quis cras.
                  Enim leo, in massa sapien facilisi netu.
                </p>
                <p className="text-base font-bold pt-4 flex items-center gap-x-2">
                  {" "}
                  <Phone
                    fill="#0E8BFF"
                    size={22}
                    className="text-primary"
                  />{" "}
                  (840) 371 - 2514{" "}
                </p>
                <p className="text-base font-bold pt-3 flex items-center gap-x-2">
                  {" "}
                  <Mail fill="#0E8BFF" size={24} className="text-white" />{" "}
                  chills@chillsbay.com{" "}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
              className=""
            >
              <form className="box-border bg-[#FFFFFF] shadow-custom-2 rounded-[24px] px-7 py-12">
                <div className="grid gap-4  md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium border-0 outline-none text-secondary  "
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-[#F5FAFF] placeholder:font-medium  py-3 px-2  border-0 outline-none text-secondary  text-base font-medium rounded-lg w-full"
                      placeholder="Frist Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      className="block mb-2 text-sm font-medium border-0 outline-none text-secondary  "
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-[#F5FAFF] placeholder:font-medium   py-3 px-2  border-0 outline-none text-secondary  text-base font-medium rounded-lg w-full "
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="company"
                      className="block mb-2 text-sm font-medium border-0 outline-none text-secondary  "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="company"
                      className="bg-[#F5FAFF] py-3 px-2 placeholder:font-medium  
                    font-medium   border-0 outline-none text-secondary  text-base rounded-lg w-full"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      className="block mb-2 text-sm font-medium border-0 outline-none text-secondary  "
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="bg-[#F5FAFF] py-3 px-2 placeholder:font-medium text-base font-medium  border-0 outline-none text-secondary   rounded-lg w-full"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      for="countries"
                      className="block mb-2 text-sm font-medium text-secondary"
                    >
                      Subject
                    </label>
                    <select
                      id="countries"
                      className="bg-[#F5FAFF] placeholder:font-medium w-full text-secondary text-base font-medium outline-none py-3 rounded-lg px-2"
                    >
                      <option selected disabled>
                        Choose a country
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium border-0 outline-none text-secondary  "
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm border-0 outline-none text-secondary  bg-[#F5FAFF] rounded-lg   resize-none"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                </div>

                <ButtonTag className={"w-full mt-5 "}>Submit Now</ButtonTag>
              </form>
            </motion.div>
          </div>
        </ContainerTage>
      </section>
    </div>
  );
};

export default ContactFrom;
