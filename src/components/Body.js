import Card from "./Card";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalListOfRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
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

  const searchFilteredList = () => {
    const searchFilter = originalRestaurants.filter((res) =>
      res.info.name
        .toLowerCase()
        .includes(searchTerm === "" ? "" : searchTerm.toLowerCase())
    );
    setListOfRestaurants(searchFilter);
  };

  if (listOfRestaurants.length === 0) return <h1>Loading...</h1>;
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
          <Card key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </section>
    </div>
  );
};

export default Body;
