import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null)
    return (
      <div className="grid place-items-center h-[100vh]">
        <h1 className="text-lg">Loading...</h1>
      </div>
    );
  const {
    name = "",
    cuisines = [],
    costForTwo = 0,
  } = resInfo?.data?.cards[0]?.card?.card?.info || {};

  console.log(name);
  const { itemCards = [] } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.categories[0] ||
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    {};

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>Rs. {costForTwo / 100}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
