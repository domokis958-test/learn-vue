<template>
    <div class="container">
        <form v-if="!userData.submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text" id="email" class="form-control" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="userData.storeData"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="userData.storeData"> No
                        </label>
                    </div>
                    <button type="submit" @click.prevent = "userData.submitted = true" class="btn btn-primary">Submit</button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="userData.submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.firstName}} {{userData.lastName}}</p>
                        <p>Mail: {{userData.email}} </p>
                        <p>Password:{{userData.password}} </p>
                        <p>Store in Database?: {{userData.storeData}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './Fullname.vue';
    export default {
        data() {
            return {
                userData : {
                    fullName : 'test vk',
                    firstName : '',
                    lastName : '',
                    email : '',
                    password : '',
                    storeData : 'Yes',
                    submitted : false
                }
            }
        },
        components: {
            appFullName : FullName
        }
    }
</script>

<style>
</style>
