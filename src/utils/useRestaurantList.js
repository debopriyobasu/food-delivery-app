import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "./constants";

const useRestaurantList = () => {
  //   const [restaurantList, setRestaurantList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurants);
  return [listOfRestaurants, originalRestaurants, setListOfRestaurants];
};
export default useRestaurantList;
