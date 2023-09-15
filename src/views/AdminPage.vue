<script setup>
import Dashboard from '../components/AdminDashboard.vue'
import HeaderPage from '../components/AdminHeader.vue'
import Sidebar from '../components/AdminSidebar.vue'
</script>

<template>
	<section>
		<Dashboard/>
		<HeaderPage/>
		<Sidebar/>
	</section>
</template>

<style>
@import "../assets/plugins/bootstrap/css/bootstrap.min.css";
@import "../assets/fontawesome/css/all.min.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import '../assets/css/admin-style.css';
</style>
