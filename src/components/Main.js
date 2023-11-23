import Card from './Card'
import restaurantData from '../utils/restaurant_data.json'
import { useState } from 'react'
const Main = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData.restaurants);
  return (
    <>
      <button onClick={()=>{
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4
          )
        setListOfRestaurants(filteredList)
      }}>
        Filter
      </button>
      <section id='foodMenu'>
        
        {
          listOfRestaurants
          .map(restaurant => 
          <Card key={restaurant.info.id} restaurantData = {restaurant}/>)
        }
      </section>
    </> 
)
}

export default Main;