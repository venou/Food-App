import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info || {};

  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categeories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categeories);

  return (
    <div>
      <div className="bg-gray-100 px-6 py-10 pt-28">
        <h1 className=" text-center font-bold text-2xl my-4">{name}</h1>
        <p className="text-center text-lg font-bold"> {cuisines.join(" ,")} </p>
      </div>
      <div>
        {categeories.map((categeory) => (
          <RestaurantCategory
            key={categeory?.card?.card.categoryId}
            data={categeory?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
