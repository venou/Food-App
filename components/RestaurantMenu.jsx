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
   <div className="min-h-screen bg-gray-400 px-6 py-10 pt-28">
  {/* Restaurant Info */}
  <div className="bg-gray-300 shadow-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-3">{name}</h1>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-yellow-600">
          ⭐ {avgRatingString} ({totalRatingsString})
        </h3>
        <p className="text-gray-600">{cuisines?.join(", ")}</p>
      </div>
      <div className="text-gray-700 text-sm">
        <h4 className="font-medium">Outlet: {areaName}</h4>
        <h4>{sla?.slaString}</h4>
        <p className="font-semibold mt-1">{costForTwoMessage}</p>
      </div>
    </div>
  </div>

  {/* Recommended Items */}
  <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    🍴 Recommended Dishes
  </h1>

  <div className="space-y-6">
    {itemCards.map((item) => (
      <div
        key={item.card.info.id}
        className="bg-gray-300 rounded-2xl shadow-md hover:shadow-lg transition p-5 flex items-center gap-5"
      >
        {/* Image on Left */}
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
          alt={item.card.info.name}
          className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
        />

        {/* Details on Right */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {item.card.info.name}
          </h3>

          <h4 className="text-amber-600 font-bold mb-1">
            ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </h4>

          <h5 className="text-sm text-gray-600 mb-2">
            ⭐ {item.card.info.ratings?.aggregatedRating?.rating || "No rating"} (
            {item.card.info.ratings?.aggregatedRating?.ratingCount || "0"} ratings)
          </h5>

          <p className="text-gray-600 text-sm line-clamp-2">
            {item.card.info.description || "No description available"}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default RestaurantMenu;
