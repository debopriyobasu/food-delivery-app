const useSearchRestaurants = (originalRestaurants, searchTerm) => {
  const searchFilter = originalRestaurants.filter((res) =>
    res.info.name
      .toLowerCase()
      .includes(searchTerm === "" ? "" : searchTerm.toLowerCase())
  );
  return searchFilter;
};

export default useSearchRestaurants;
