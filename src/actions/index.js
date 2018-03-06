import axios from "axios";

export const getTeamNames = () => async dispatch => {
  const res = await axios.get("http://54.147.204.57:5000/names");
  return res.data;
};
