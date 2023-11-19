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
  export default Card;