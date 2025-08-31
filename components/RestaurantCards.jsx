const RestaurantCards = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        src={
          resData?.info?.cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
              resData.info.cloudinaryImageId
            : "#"
        }
      />
      <h3> {resData?.info?.name} </h3>
      <h4> {resData?.info?.costForTwo} </h4>
      <h4> {resData?.info?.cuisines.join(" , ")} </h4>
      <h4> Rating {resData?.info?.avgRating}⭐ </h4>
      <h4> {resData?.info?.areaName} </h4>
    </div>
  );
};
export default RestaurantCards;
