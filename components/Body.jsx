import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchList, setSearchList] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6176855&lng=85.1589544&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredList(restaurants);
    console.log(restaurants);
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
            <RestaurantCards key={restaurant.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
