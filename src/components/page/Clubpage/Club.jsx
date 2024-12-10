import { useEffect } from "react";
import ClubHero from "./ClubHero";
import NightClub from "./NightClub";
import ClubCarusole from "./ClubCarusole";
import ClubMap from "./ClubMap";

const Club = () => {
  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");

    // Cleanup: Reset body background to white on unmount
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, []);
  return (
    <>
      <ClubHero />
      <NightClub title={"Popular Night Clubs"} />
      <ClubCarusole />
      <NightClub title={"Bars and Night clubs near you"} />
      <ClubMap />
    </>
  );
};

export default Club;
