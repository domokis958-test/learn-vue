<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{  testStringToReverse | reverse }}</p>
                <p> {{  testStringToReverse | length }}</p>
                <p> {{  reversed }}</p>
                <p> {{  calculateLength }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {lengthAwareMixin} from './LengthAwareMixin.js'
    export default {
        mixins: [lengthAwareMixin],
        data() {
            return  {
                testStringToReverse : 'Name'
            }
        },
        filters: {
            reverse(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reversed() {
                return this.testStringToReverse.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
