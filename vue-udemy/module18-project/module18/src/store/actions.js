// @ts-check
import {instance}  from '../axios'

//import axios  from 'axios';

const actions = {
    loadData: ({ commit }) => {
        instance.get('data.json')
            .then(response => response.data)
            .then(data => {
                if (data) {
                    const stocks = data.stocks;
                    const funds = data.funds;
                    const stockPortfolio = data.stockPortfolio;

                    const portfolio = {
                        stockPortfolio,
                        funds
                    }
                    console.log(data);

                    commit('SET_STOCKS', stocks);
                    commit('SET_PORTFOLIO', portfolio);
                }
            })
    }
}

export default {
    actions
}