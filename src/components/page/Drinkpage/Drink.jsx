import DrinkCarusole from "./DrinkCarusole"
import DrinkFrom from "./DrinkFrom"
import DrinkHero from "./DrinkHero"
import DrinkMap from "./DrinkMap"
import Drinkresturants from "./Drinkresturants"


const Drink = () => {
  return (
    <>
       <DrinkHero />
       <DrinkFrom />
       <Drinkresturants title={"Popular restuarants in Lagos"} />
       <DrinkCarusole />
       <Drinkresturants title={"Resturants nearby"} />
       <DrinkMap />
    </>
  )
}

export default Drink
