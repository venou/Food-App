import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
