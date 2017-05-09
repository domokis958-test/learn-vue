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
        increment: state =>  {
            // would not work. we need synch operations. 
            //setTimeout()
            state.counter++;
        },
        decreament: state => {
            state.counter--;
        }
    },
    actions: {
        // 2 ways of doing this. 
        // increment: context => {
        //     context.commit('increment');
        // },

        increment : ({commit}) => {
            commit('increment');
        }
    }
})