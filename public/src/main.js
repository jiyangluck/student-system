import Vue from 'vue';

Vue.config.debug = true;

const App = Vue.component('App',{
	data(){
		return {
			message:'hello vue'
		}
	}
})

new Vue({
	el:'#app',
	components:{App}
})

