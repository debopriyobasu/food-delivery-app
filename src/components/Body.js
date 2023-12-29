import Card from "./Card";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import useFilterRatings from "../utils/useFilterRatings";
import useSearchRestaurants from "../utils/useSearchRestaurants";
import { Link } from "react-router-dom";
import useSearchRestaurants from "../utils/useSearchRestaurants";
const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(false);
  const [listOfRestaurants, originalRestaurants, setListOfRestaurants] =
    useRestaurantList();
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
  const filteredList = useFilterRatings(listOfRestaurants);
  const handleSearch = () => {
    const searchResults = useSearchRestaurants(originalRestaurants, searchTerm);
    setListOfRestaurants(searchResults);
  };
  if (listOfRestaurants.length === 0 && searchTerm.length != 0)
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
          <button className="" onClick={handleSearch}>
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
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <Card restaurantData={restaurant} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Body;
