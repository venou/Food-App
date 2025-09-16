import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "Dummy Data"
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null); // initially none open

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="bg-gray-100 px-6 py-10 pt-28">
        <h1 className=" text-center font-bold text-2xl my-4">{name}</h1>
        <p className="text-center text-lg font-bold">{cuisines?.join(" , ")}</p>
      </div>

      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title || index}
            data={category?.card?.card}
            showItems={index === showIndex} // true only for selected index
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
