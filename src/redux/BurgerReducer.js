const burgerState = {
  burger: { salad: 0, cheese: 0, beef: 0 },
  menu: { salad: 10, cheese: 20, beef: 50 },
  total: 0,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_MID": {
      let { item, count } = action;
      if (count === -1 && state.burger[item] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[item] += count;
      state.burger = burgerUpdate;
      state.total += count * state.menu[item];

      return { ...state };
    }
  }
  return { ...state };
};
