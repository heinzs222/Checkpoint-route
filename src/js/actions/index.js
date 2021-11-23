import { ADD_MOVIE } from "../constants/action-types";
import { REMOVE_MOVIE } from "../constants/action-types";
import { EDIT_MOVIE } from "../constants/action-types";

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}

export function removeMovie(payload) {
  return { type: REMOVE_MOVIE, payload };
}

export function editMovie(payload) {
  return { type: EDIT_MOVIE, payload };
}
