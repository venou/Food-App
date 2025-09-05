import useRestaurantMenu from "../utils/useRestaurantMenu";
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

  const itemCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <div className="res-box">
        <h1>{name}</h1>
        <div className="restaurant-card">
          <h3>
            ⭐{avgRatingString} ({totalRatingsString} • {costForTwoMessage})
          </h3>
          <p>{cuisines?.join(", ")}</p>
          <h4>Outlet: {areaName}</h4>
          <h4>{sla?.slaString}</h4>
        </div>
      </div>

      <h1>Recommended</h1>
      <div className="res-menu">
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="menu-item">
            <h3>{item.card.info.name}</h3>
            <h4>
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h4>
            <h5>
              ⭐{" "}
              {item.card.info.ratings?.aggregatedRating?.rating || "No rating"}{" "}
              ({item.card.info.ratings?.aggregatedRating?.ratingCount || "0"}{" "}
              ratings)
            </h5>
            <p className="dish-desc">{item.card.info.description}</p>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
