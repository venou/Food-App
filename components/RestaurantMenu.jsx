import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6176855&lng=85.1589544&restaurantId=81232&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  const { name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } =
    resMenu?.cards[2]?.card?.card?.info || {};

  return resMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-card">
      <h1>{name}</h1>
        <h3>{avgRatingString} ({totalRatingsString}) . {costForTwoMessage}</h3>
        <h5> {cuisines.join(", ")} </h5>
        <h5>Outlet {areaName} </h5>
        <h5> {sla.slaString} </h5>
      </div>

    </div>
  );
};
export default RestaurantMenu;
