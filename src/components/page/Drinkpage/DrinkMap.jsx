import { ContainerTage } from "../../material/ContainerTage"
import Map from "/drinkmap.png"
const DrinkMap = () => {
  return (
    <>
      <section className="bg-[#F5FAFF] pt-10 pb-20">
        <ContainerTage>
            <div className="w-full h-[430px]">
                <img src={Map} alt="" className="w-full max-w-full h-full object-cover rounded-xl" />
            </div>
        </ContainerTage>
      </section> 
    </>
  )
}

export default DrinkMap
