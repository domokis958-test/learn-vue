import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value : 0
    },
    getters: {
        value : state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        // 2 ways of doing this. 
        // increment: context => {
        //     context.commit('increment');
        // },

        
        updateValue : ({commit}, payload) => {
            commit('updateValue', payload);
        }

    },
    modules: {
        counter
    }
})