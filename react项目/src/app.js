export const dva = {
  config: {
    onStateChange(state,a) {
      if (localStorage) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    }
  }
};
