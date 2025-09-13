const ItemList = ({ items }) => {
    console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-1">
          <span>{item.card.info.name}</span>
          <span>{item.card.info.description}</span>
        </div>  
      ))}
    </div>
  );
};

export default ItemList;
