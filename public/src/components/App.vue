<template>
	<div>
		<h1>hello vue ajax</h1>
		<button v-on:click="getData">获取数据</button>
		<table>
			<thead>
				<th>姓名</th>
				<th>年龄</th>
				<th>性别</th>
			</thead>
			<tbody>
				<tr v-for="student in students">
					<td>{{student.name}}</td>
					<td>{{student.age}}</td>
					<td>{{student.sex}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueResource from 'vue-resource';
	Vue.use(VueResource);

	export default {
		data(){
			return {
				students:null
			}
		},
		methods:{
			getData(){
				alert('hehe')
				this.$http.get('./data/students.json').then(function(res){
					this.students = res.data;
				})
			}
		}
	}
</script>