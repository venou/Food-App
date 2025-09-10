import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCarousel from "./RestaurantCarousel";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const menuCarousel =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (m) =>
        m.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
    );
  // console.log(menuCarousel);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 pt-28">
      <h1 className=" text-center font-bold text-2xl my-4">{name}</h1>
      <p className="text-center text-lg font-bold"> {cuisines.join(" ,")} </p>
      {menuCarousel.map((menuCarousels) => ( 
        <RestaurantCarousel key={.id} data = {menuCarousels.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
