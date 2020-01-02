import Vue from "vue";
import Vuex from "vuex";
import user from './user'
import goods from './goods'
import cart from './cart'

Vue.use(Vuex);

export default new Vuex.Store({
 modules:{
   user, goods, cart
 }
});
