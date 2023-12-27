import { useState } from "react";
const useFilterRatings = (listOfRestaurants) => {
  const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > 4.2
  );
  return filteredList;
};

export default useFilterRatings;
