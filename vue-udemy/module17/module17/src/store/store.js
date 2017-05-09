import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter : 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + 'Clicks';
        }
    },
    mutations: {
        increment: (state, payload) =>  {
            // would not work. we need synch operations. 
            //setTimeout()
            state.counter += payload;
        },
        decreament: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        // 2 ways of doing this. 
        // increment: context => {
        //     context.commit('increment');
        // },

        increment : ({commit}, payload) => {
            commit('increment', payload);
        },
        decreament : ({commit}, payload) => {
            commit('decreament', payload);
        },
        asyncIncrement : ({commit}) => {
            setTimeout(() => {
                 commit('increment');
            }, 1000);
        },
        asyncDecreament : ({commit}) => {
            setTimeout(() => {
                 commit('decreament');
            }, 1000);
        },

    }
})