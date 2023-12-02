import { CDN_URL } from "../utils/constants";
const Card = (props) => {
  const { restaurantData } = props;
  const { name, avgRating, costForTwo, cloudinaryImageId } =
    restaurantData?.info;
  // console.log(restaurantData)
  return (
    <article className="card">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="object-cover w-100 h-[200px]"
        alt="food"
      />
      <div className="description">
        <h2 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
          {name}
        </h2>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    </article>
  );
};
export default Card;
