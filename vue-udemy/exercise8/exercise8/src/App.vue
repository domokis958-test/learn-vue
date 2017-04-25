<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="componentName = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="componentName = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="componentName = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="componentName">
                    {{color}}
                </component>
                <!--<app-blue>{{color}}</app-blue>
                <app-green>{{color}}</app-green>
                <app-red>{{color}}</app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                color : 'color',
                componentName : 'appBlue'
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
