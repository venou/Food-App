import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchList, setSearchList] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredList(restaurants);
    // console.log(restaurants);
  };
  return (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchList}
            placeholder="Search..."
            onChange={(e) => {
              setSearchList(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredList(topRated);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCards resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
