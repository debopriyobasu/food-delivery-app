import logo from "../../images/food-delivery-logo.png";
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_PATH = logo;

export const MENU_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="
  );
