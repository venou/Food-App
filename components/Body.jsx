import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const listOfRestaurants = useRestaurants();
  const [filteredList, setFilteredList] = useState([]);
  const [searchList, setSearchList] = useState("");

  useEffect(() => {
    setFilteredList(listOfRestaurants);
  }, [listOfRestaurants]);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-10 text-xl font-semibold text-red-600">
        Looks like you are offline 🚫
      </h1>
    );
  return (
   <div className="min-h-screen pt-28  bg-gray-400">
      {/* Filters Section */}
      <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
        {/* Search Section */}
        <div className="flex w-full md:w-auto items-center">
          <input
            className="flex-1 md:w-72 border border-gray-300 text-gray-900 rounded-xl px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="text"
            value={searchList}
            placeholder="Search restaurants..."
            onChange={(e) => {
              setSearchList(e.target.value);
            }}
          />
          <button
            className="ml-2 bg-orange-400 px-4 py-2 rounded-xl text-white font-bold hover:bg-orange-600 transition"
            onClick={() => {
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchList.toLowerCase())
              );
              setFilteredList(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="w-full md:w-auto bg-orange-400 px-4 py-2 rounded-xl text-white font-bold hover:bg-orange-600 transition"
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredList(topRated);
          }}
        >
          ⭐ Top Rated
        </button>
      </div>

      {/* Restaurants Grid */}
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {filteredList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCards resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>

  );
};
export default Body;
