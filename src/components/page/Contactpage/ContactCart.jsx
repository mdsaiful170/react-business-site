
import { ContainerTage } from "../../material/ContainerTage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const ContactCart = () => {
  const [contactData, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await fetch("../../../../lib/data.json");
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const resualt = await response.json();
      setdata(resualt.contactData);
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-xl text-center text-secondary">Loading...</p>;
  }
  if (error) {
    return (
      <p className="text-xl text-center text-secondary">{error.message}</p>
    );
  }

  return (
    <div>
      <section className="py-8 px-3">
        <ContainerTage>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8 ">
            {contactData.map((item) => (
              <motion.div
                initial={{opacity: 0, y:60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay:item.delay, ease: "backOut" }}
               key={item.id}

               className="text-center border border-stone-100 p-4 rounded-lg shadow-custom-1 ">
                <img src={item.img} className="max-w-full mx-auto h-auto pb-4" alt="" />
                <h3 className="text-lg font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="text-base mx-auto max-w-xs py-3 font-normal text-[#656B89]">
                  {item.subtext}
                </p>
                <p className="text-primary font-normal ">
                  <a href="#">{item.email}</a>
                </p>
              </motion.div>
            ))}
          </div>
        </ContainerTage>
      </section>
    </div>
  );
};

export default ContactCart;
