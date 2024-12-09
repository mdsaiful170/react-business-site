import { useEffect } from "react";
import ClubHero from "./ClubHero";
import NightClub from "./NightClub";

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
    </>
  );
};

export default Club;
