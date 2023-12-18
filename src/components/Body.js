import Card from "./Card";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalListOfRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url =
      "https://corsproxy.org/?" +
      encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const data = await fetch(url);

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div className="grid place-items-center h-[100vh]">
        <h1 className="text-lg">
          Looks like you're offline. Please check your internet connection
        </h1>
      </div>
    );
  }

  const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > 4.2
  );

  const searchFilteredList = () => {
    const searchFilter = originalRestaurants.filter((res) =>
      res.info.name
        .toLowerCase()
        .includes(searchTerm === "" ? "" : searchTerm.toLowerCase())
    );
    setListOfRestaurants(searchFilter);
  };

  if (listOfRestaurants.length === 0)
    return (
      <div className="grid place-items-center h-[100vh]">
        <h1 className="text-lg">Loading...</h1>
      </div>
    );
  return (
    <div className="md:mx-auto max-w-screen-lg my-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input
            id="searchField"
            type="text"
            className=""
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="" onClick={searchFilteredList}>
            Search
          </button>
        </div>

        <button
          className={`${
            filtered === false ? "bg-gray-300" : "bg-gray-500"
          } hover:bg-gray-500 text-white font-bold py-1 px-1 rounded`}
          onClick={() => {
            filtered === false
              ? (setFiltered(true), setListOfRestaurants(filteredList))
              : (setFiltered(false), setListOfRestaurants(originalRestaurants));
          }}
        >
          Top Rated
        </button>
      </div>

      <section className="grid grid-cols-4 gap-4 py-4">
        {listOfRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <Card key={restaurant.info.id} restaurantData={restaurant} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Body;
