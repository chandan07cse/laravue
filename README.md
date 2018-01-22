# Laravue Starter Kit
:small_blue_diamond: Laravel 5.5 & Vue 2 initial kit to start any Single Page Application(SPA)
# :flashlight: First clone this repository 
```
git clone git@github.com:chandan07cse/laravue.git laravue-starter
```
To install backend dependencies run
```
composer install
```
Now install the initial frontend dependencies by running the following command
```
npm install
```
After that install vue,vue-router,bootstrap-sass and axios through npm. To do so
```
npm install vue vue-router bootstrap-sass axios --save
```
after the installation, your package.json look like the following
```json
{
    "private": true,
    "scripts": {
        "dev": "npm run development",
        "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
        "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
        "watch-poll": "npm run watch -- --watch-poll",
        "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
        "prod": "npm run production",
        "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
    },
    "devDependencies": {
        "cross-env": "^5.1",
        "laravel-mix": "^1.0"
    },
    "dependencies": {
        "axios": "^0.17.1",
        "bootstrap-sass": "^3.3.7",
        "vue": "^2.5.13",
        "vue-router": "^3.0.1"
    }
}
```
Now remove resources/assets/js/bootstrap.js

If you wanna use jquery for bootstrap or some other reason, you can do so by
```
npm install jquery --save
```
and in resources/assets/js/app.js remove everything and paste the following at the end of the script
```javascript
try {
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');
} catch (e) {}
```
To test run from terminal
```
npm run watch
```
If you got Laravel Mix Build Successful notification, you're good to go.

Create a file called App.vue inside resources/assets/js which is compared with master layout file for all
our website.
The basic syntax of a vue file comprises of 3 things
 1. Template : HTML Part
 2. Script : JS Part
 3. Style : CSS Part
 
Sample App.vue file can be like this
```vue
<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/"></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                        <li><router-link to="/faq">F.A.Q</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style>
    .navbar{
        background-color: rgb(65, 184, 131);
    }
    .navbar-default .navbar-nav > li > a {
        color: #fff;
    }
    .container{
        margin-top:10px;
    }
</style>
```
Now look at the folder called router inside resources/assets/js. As we'll be using vue router for our frontend routing with no page load, so first we've made a index.js file inside 
resources/assets/js/router. In resources/assets/js/router/index.js we've the following code
```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
    routes:[
    ]
});

export default router
```
:small_blue_diamond: Explanation : Here we've imported vue and vue router. We use vue router by Vue.use(VueRouter).

We've put history mode for removing hashbang url. We've also set true fallback for the browsers who doesn't
support history push. We should also put the following code in routes/web.php for preventing not found message while page reload. 
As a page reload event always hits the server.
```php
<?php

Route::get('{path}', function () {
    return view('welcome');
})->where( 'path', '([A-z\d-\/_.]+)?' );
```
Now in resources/assets/js/app.js we've the following code 
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

const app = new Vue({
    el : '#root',
    template : '<app></app>',
    components: { App },
    router
});

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap-sass');
} catch (e) {}
```
Now your resources/views/welcome.blade.php code should be look like the following
```php
<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LaraVue</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
</head>
<body>
<div id="root">
</div>
</body>
<script src="{{mix('js/app.js')}}"></script>
</html>
```
:flashlight: Explanation : Here we've defined the vue root div where all the vue specific 
view will be loaded. Anything outside of this div will be ignored by Vue.

Now that we are almost set up our app. We'll now create some views for different pages of our application.
 For that create a folder called views inside resources/assets/js
 Now create 4 files inside views
 1. Home.vue
 2. About.vue
 3. Contact.vue
 4. FAQ.vue
 
 Codes inside Home.vue
 ```vue
 <template>
     <div id="message">
         {{message}}
     </div>
 </template>
 <script>
     export default {
         data(){
             return {
                 message:'Frontend With Vue 2 & Backend With Laravel 5.5'
             }
 
         }
     }
 </script>
 <style>
     #message{
         margin-top: 50px;
     }
 </style>
 ```
 Codes inside About.vue
 ```vue
 <template>
     <div id="message">
         {{message}}
     </div>
 </template>
 <script>
     export default {
         data(){
             return {
                 message:'About Page'
             }
 
         }
     }
 </script>
 <style>
     #message{
         margin-top: 50px;
     }
 </style>
 ```
Codes inside Contact.vue
```vue
<template>
    <div id="message">
        {{message}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message:'Contact Us'
            }

        }
    }
</script>
<style>
    #message{
        margin-top: 50px;
    }
</style>
```
Codes inside FAQ.vue
```vue
<template>
    <div id="message">
        {{message}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                message:'Frequently Asked Questions'
            }

        }
    }
</script>
<style>
    #message{
        margin-top: 50px;
    }
</style>
```

Now we just need to configure our routes for the following pages inside resources/assets/js/router/index.js
```vue
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
    routes:[
        { path:'/',component:Home },
        { path:'/about',component:About },
        { path:'/contact',component:Contact },
        { path:'/faq',component:FAQ }
    ]
});

export default router
```
Now go to your browser and have the spa ready for your eyes. Thanks ...
