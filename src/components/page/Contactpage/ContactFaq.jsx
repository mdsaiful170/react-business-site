import { Accordion, AccordionItem } from "@nextui-org/react";
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { Plus, X } from "lucide-react";
import { motion } from "framer-motion";

const ContactAccordionData = [
  {
    id: 1,
    title: (
      <HeadingTag className={"text-xl font-bold text-secondary"}>
        Do you offer refunds for purchased products?
      </HeadingTag>
    ),
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.",
  },
  {
    id: 2,
    title: (
      <HeadingTag className={"text-xl font-bold text-secondary"}>
        How does Chillsbay work?
      </HeadingTag>
    ),
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.",
  },
  {
    id: 3,
    title: (
      <HeadingTag className={"text-xl font-bold text-secondary"}>
        Can I pay with Crypto on Chillsbay.com?
      </HeadingTag>
    ),
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.",
  },
  {
    id: 4,
    title: (
      <HeadingTag className={"text-xl font-bold text-secondary"}>
        How can I become a Chillsbay Host?
      </HeadingTag>
    ),
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.",
  },
];

const ContactFaq = () => {
  return (
    <>
      <section className="py-10 md:py-12">
        <ContainerTage className={"mx-auto max-w-full md:max-w-[777px]"}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "circOut" }}
            className="text-center max-w-full md:max-w-[631px] mx-auto"
          >
            <HeadingTag className={"text-3xl"}>
              Frequently Asked Questions
            </HeadingTag>
            <p className="mx-auto text-base font-normal text-[#656B89] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
              nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget
              venenatis tristique morbi.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
            className="pt-6"
          >
            <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
              {ContactAccordionData.map((item) => (
                <AccordionItem
                  className="my-2 shadow-custom-1"
                  key={item.id}
                  title={item.title}
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <X
                        size={36}
                        className="text-white bg-primary rounded-full p-1 "
                      />
                    ) : (
                      <Plus
                        size={36}
                        className="text-secondary rounded-full p-1 "
                      />
                    )
                  }
                >
                  <p className="-mt-4 -ms-5 text-secondary text-base font-normal">
                    {item.subtext}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </ContainerTage>
      </section>
    </>
  );
};

export default ContactFaq;
