import Vue from 'vue'
import Vuex from 'vuex'

import {FeedMillsStore} from "@/store/modules/feedMills";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    feedMills: FeedMillsStore.ExtractVuexModule(FeedMillsStore)
  },
  actions: {

  },
});

export const vxm = {
  feedMills: FeedMillsStore.CreateProxy(store, FeedMillsStore),
};


export default store;
