import Card from "./Card";
// import restaurantData from '../utils/restaurant_data.json'
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6319864&lng=88.4165549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Filter
      </button>
      <section id="foodMenu">
        {listOfRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </section>
    </>
  );
};

export default Body;
