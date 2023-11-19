import Card from './Card'
import restaurantData from '../../restaurant_data.json'
const Main = () => (
    <section id='foodMenu'>
      {
        restaurantData.restaurants
        .map(restaurant => 
        <Card key={restaurant.info.id} restaurantData = {restaurant}/>)
      }
    </section>
)
export default Main;