import { CDN_URL } from "../utils/constants";
const Card = (props) => {
    const {restaurantData} = props;
    const {name, avgRating, costForTwo, cloudinaryImageId} = restaurantData?.info;
    console.log(restaurantData)
    return (
      <article className='card'>
          <img src={CDN_URL+cloudinaryImageId} className="cardImg" alt='food'/>
          <div className='description'>
              <h2>{name}</h2>
              <p>{avgRating}</p>
              <p>{costForTwo}</p>
          </div>   
      </article>
    )  
  }
  export default Card;