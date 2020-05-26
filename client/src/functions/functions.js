export const generateList = (list) => {
  let arr = [];
  if(list && list.length > 0){
    list.forEach((element) => {
      return (arr = [...arr, ...element]);
    });
  }

  return arr;
};

export const generateArrays = (list, pending_movies, size) => {
  let new_list = [...list, ...pending_movies];
  let pending = [];
  var movies = [];
  if(new_list && new_list.length > 0){
    for (var i = 0; i < new_list.length; i += size) {
      let sliced = new_list.slice(i, i + size);
      if (sliced.length === size) {
        movies.push(sliced);
      } else {
        pending.push(...sliced);
      }
    }
  }
  return {
    movies,
    pending,
  };
};

export const wait = (time) =>
  new Promise((res) => setTimeout(() => res(), time));

export const getMovieSize = (movies, pending_movies, width, size) => {
  let list = [];
  let obj = {};

  if (width <= 1500 && size !== 5) {
    size = 5;
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    obj.size = size;
  
  }

  if (width <= 1200 && size !== 4) {
    size = 4;
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    obj.size = size;
  
  }

  if (width <= 650 && size !== 2) {
    size = 2;
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    obj.size = size;
  
  }

  if (width > 1500 && size !== 6) {
    size = 6;
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    obj.size = size;
  
  }
  
 return obj
};
