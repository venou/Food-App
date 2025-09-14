const ItemList = ({ items }) => {
  console.log("items", items);
  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/";

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-4 border-b border-gray-200 flex justify-between items-start"
        >
          <div className="w-8/12">
            <h3 className="font-semibold text-lg">
              {item.card.info.name} - ₹
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative w-32 h-32">
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-md px-2 py-1 text-sm shadow-md">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
