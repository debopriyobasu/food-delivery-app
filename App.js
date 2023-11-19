import React from'react'
import ReactDOM from 'react-dom/client'
import pizza from './images/pizza.jpeg'
import logo from './images/food-delivery-logo.webp'
import restaurantData from './restaurant_data.json'

const Navbar = function() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img className='brandLogo' src={logo} alt='logo'/>
        <ul className='nav_items'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
const Card = (props) => {
  const {restaurantData} = props;
  const {name, avgRating, costForTwo, cloudinaryImageId} = restaurantData?.info;
  console.log(restaurantData)
  return (
    <article className='card'>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="cardImg" alt='food'/>
        <div className='description'>
            <h2>{name}</h2>
            <p>{avgRating}</p>
            <p>{costForTwo}</p>
        </div>   
    </article>
  )  
}
const Main = () => (
    <section id='foodMenu'>
      {
        restaurantData.restaurants
        .map(restaurant => 
        <Card key={restaurant.info.id} restaurantData = {restaurant}/>)
      }
    </section>
)

const App = () => (
    <>
        <Navbar />
        <Main />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
