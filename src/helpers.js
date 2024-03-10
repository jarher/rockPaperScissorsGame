export const setStates = function (data, obj) {
    for (let key in obj) {
      if (data.hasOwnProperty(key)) {
        data[key] = obj[key];
      }
    }
}

export const getStates = function (data) {
  return JSON.parse(JSON.stringify(data));
};

export const randomValue = function () {
  return Math.floor(Math.random() * 5);
}

