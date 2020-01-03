export const state = () => ({
    list: []
  });
  
  export const mutations = {
    set(state, list) {
      state.list = list;
    },
    add(state, name) {
      state.list.push({ name });
    }
  };
  