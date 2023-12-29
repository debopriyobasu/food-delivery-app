import { useState } from "react";
const useFilterRatings = (listOfRestaurants) => {
  const filteredList = listOfRestaurants
    .filter((res) => res.info.avgRating > 4.2)
    .sort((a, b) => b.info.avgRating - a.info.avgRating);
  return filteredList;
};

export default useFilterRatings;
