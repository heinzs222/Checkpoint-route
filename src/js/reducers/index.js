import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../constants/action-types";

const initialState = {
  movies: [
    {
      img:
        "https://d3tudoxwnizvk7.cloudfront.net/gallery-tablet-jpeg/inception_posterlarge_8-1308772917.jpg",
      title: "Inception - 2010",
      rating: 2,
      id: 4683,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      img:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3290/3290236_sa.jpg",
      title: "Shawshank Redemption - 1994",
      rating: 4,
      id: 489,
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
      title: "Blade Runner - 2017",
      rating: 4,
      id: 3657,
      trailer: "https://www.youtube.com/embed/gCcx85zbxz4"
    },
    {
      img:
        "http://img.over-blog-kiwi.com/1/36/64/60/20150323/ob_23a5c4_illuminatiwatcherdotcom-interstellar-m.jpg",

      title: "Interstellar - 2014",
      rating: 3,
      id: 236,
      trailer: "https://www.youtube.com/embed/Lm8p5rlrSkY"
    },
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
      title: "Black Panther - 2018",
      rating: 5,
      id: 516,
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
    }
  ]
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE: {
      return { movies: [...state.movies, payload] };
    }
    case REMOVE_MOVIE: {
      return { movies: state.movies.filter(el => el.id !== payload.id) };
    }
    case EDIT_MOVIE: {
      return {
        movies: state.movies.map(el =>
          el.id === payload.id
            ? {
                ...el,
                img: payload.img,
                title: payload.title,
                rating: payload.rating,
                trailer: payload.trailer
              }
            : el
        )
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
