<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand"> Stock Trader </router-link>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                    </ul>
                    <strong class="navbar-text navbar-right">Funds : {{ funds | currency }}</strong>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" @click="endDay">End day</a></li>
                        <li class="dropdown" :class = "{open : isDropDownOpen}" @click="isDropDownOpen = !isDropDownOpen">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save and load <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click="saveData">Save data</a></li>
                                <li><a href="#" @click="loadData">Load data</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
    export default {
        data() {
            return {
                isDropDownOpen : false
            }

        },
        computed: {
            ...mapGetters([
                'funds',
                'stockPortfolio',
                'stocks'
            ]),
        },
        methods: {
            ...mapActions({

                randomizeStocks : 'randomizeStocks',
                loadDataHttp : 'loadData'

            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds : this.funds,
                    stockPortfolio : this.stockPortfolio,
                    stocks : this.stocks
                }
                this.$http.put('data.json', data)
                    .then(response => console.log(response))
                    .catch(response => console.log(response));
            },
            loadData() {
                this.loadDataHttp();
            }
        }
    }
</script>