import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCards = ({ resData }) => {
  const { loggedInUser } = useContext(userContext);
  // console.log(resData);
  return (
    <div className="w-80 bg-gray-100 m-6 p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={
          resData?.info?.cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
              resData.info.cloudinaryImageId
            : "https://via.placeholder.com/400x250?text=No+Image"
        }
        alt={resData?.info?.name}
      />
      <h3 className="mt-4 text-xl font-bold text-gray-900 truncate">
        {resData?.info?.name}
      </h3>
      <h4 className="text-base text-gray-700">{resData?.info?.costForTwo}</h4>
      <h4 className="text-sm text-gray-600 truncate">
        {resData?.info?.cuisines.join(", ")}
      </h4>
      <h4
        className={`text-sm font-semibold ${
          resData?.info?.avgRating >= 4
            ? "text-green-600"
            : resData?.info?.avgRating >= 3
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        ⭐ {resData?.info?.avgRating || "N/A"}
      </h4>
      <h4 className="text-sm text-gray-500">{resData?.info?.areaName}</h4>
      <h4 className="text-sm text-gray-500">{loggedInUser}</h4>
    </div>
  );
};
export default RestaurantCards;
