import Card from "./Card";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalListOfRestaurants] = useState([]);
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > 4.2
  );

  if (listOfRestaurants.length === 0) return <h1>Loading...</h1>;
  return (
    <div className="md:mx-auto max-w-screen-lg my-2">
      <button
        className={`${
          filtered === false ? "bg-gray-300" : "bg-gray-500"
        } hover:bg-gray-500 text-white font-bold py-2 px-2 rounded`}
        onClick={() => {
          filtered === false
            ? (setFiltered(true), setListOfRestaurants(filteredList))
            : (setFiltered(false), setListOfRestaurants(originalRestaurants));
        }}
      >
        Filter
      </button>
      <section className="grid grid-cols-5 gap-5 py-5">
        {listOfRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </section>
    </div>
  );
};

export default Body;
