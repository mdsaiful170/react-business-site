import { ContainerTage } from "../../material/ContainerTage";
import Map from "/clubmap-img.svg";
const ClubMap = () => {
  return (
    <>
      <section className="pt-10 pb-20">
        <ContainerTage>
          <div className="w-full h-[200px] md:h-[450px]">
            <img
              src={Map}
              alt=""
              className="w-full max-w-full  h-full object-cover  rounded-xl"
            />
          </div>
        </ContainerTage>
      </section>
    </>
  );
};
export default ClubMap;
