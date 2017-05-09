import * as types from '../types';

const state = {
    counter : 0,
}

const getters = {
     [types.DOUBLE_COUNTER]: state => {
            return state.counter * 2;
        },
        [types.CLICK_COUNTER]: state => {
            return state.counter + 'Clicks';
        }
}

const mutations = {
    increment: (state, payload) =>  {
            // would not work. we need synch operations. 
            //setTimeout()
            state.counter += payload;
        },
        decreament: (state, payload) => {
            state.counter -= payload;
        }
}

const actions = {
    increment : ({commit}, payload) => {
            commit('increment', payload);
        },
        decreament : ({commit}, payload) => {
            commit('decreament', payload);
        },
        asyncIncrement : ({commit}, payload) => {
            setTimeout(() => {
                 commit('increment', payload.by);
            }, payload.duration);
        },
        asyncDecreament : ({commit}, payload) => {
            setTimeout(() => {
                 commit('decreament', payload.by);
            }, payload.duration);
        }
}

export default {
    state,
    getters,
    actions,
    mutations
}