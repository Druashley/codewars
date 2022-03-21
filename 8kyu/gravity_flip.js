const flip = (direction, array) => {
  if (direction === "R") {
    return array.sort(function (a, b) {
      return a - b;
    });
  } else {
    return array.sort(function (a, b) {
      return b - a;
    });
  }
};
