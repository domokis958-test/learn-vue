<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        }
    }

</script>

<style>
    .slide-enter {
        opacity: 0
        /*transform: translateY(20px); // NOT required as done in keyframe*/
    }

    .slide-enter-active {
        transition: opacity 0.5s;
        animation: slide-in 1s ease-out forwards
    }

    .slide-leave {}

    .slide-move {
        transition: transform 1s;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>