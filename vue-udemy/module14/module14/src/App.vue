<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br> <br>
                <transition name="fade">
                    <div class="alert alert-info" v-show="show"> This is some info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show"> This is some info</div>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false

            }
        }
    }

</script>

<style>
    .fade-enter {
        opacity: 0;

    }
    .fade-enter-active {
        transition: opacity 1s;
        /*opacity: 1 not required as it is the default and the fade enter will be removed after 1 frame actually will overide the other. so dont do this*/


    }
    .fade-leave {
        /*opacity: 1 not required*/

    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;

    }

    .slide-enter {
        opacity: 0
        /*transform: translateY(20px); // NOT required as done in keyframe*/

    }

    .slide-enter-active {
        transition: opacity 0.5s;
        animation: slide-in 1s ease-out forwards

    }

    .slide-leave {


    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;

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