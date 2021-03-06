import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import game from "./game";
import builds from "./builds";
import cart from "./cart";
import product from "./product";

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  game,
  builds,
  cart,
  product,
});
