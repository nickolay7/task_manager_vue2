import Vue from 'vue';
import Vuex from 'vuex';
import tasksModule from './tasksModule';

Vue.use(Vuex);

const store = new Vuex.Store({
    ...tasksModule,
});

export default store;
