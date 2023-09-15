<script setup>
import Dashboard from '../components/AdminDashboard.vue'
import HeaderPage from '../components/AdminHeader.vue'
import Sidebar from '../components/AdminSidebar.vue'
import FooterBar from '../components/AdminFooter.vue'

</script>

<template>
	<body class="theme-green">

  <div class="overlay"></div>

		<ul id="f-menu" class="mfbc-br mfb-zoomin" data-mfb-toggle="hover">
			<li class="mfbc_wrap">
				<a href="#" class="mfbcb-main g-bg-cyan">
					<i class="mfbcm-icon-resting zmdi zmdi-plus"></i>
					<i class="mfbcm-icon-active zmdi zmdi-close"></i>
				</a>
				<ul class="mfbc_list">
					<li><a href="/admin/doctor-schedule" data-mfb-label="Doctor Schedule" class="mfb-child bg-blue"><i class="zmdi zmdi-calendar mfbc_icon"></i></a></li>
					<li><a href="/admin/patient" data-mfb-label="Patients List" class="mfb-child bg-orange"><i class="zmdi zmdi-account-o mfbc_icon"></i></a></li>
					<li><a href="/admin/payment" data-mfb-label="Payments" class="mfb-child bg-purple"><i class="zmdi zmdi-balance-wallet mfbc_icon"></i></a></li>
				</ul>
			</li>
		</ul>

		<HeaderPage/>
		<Sidebar/>
		<Dashboard/>
		<FooterBar/>
	</body>
	
</template>

<style>
@import "../assets/plugins/bootstrap/css/bootstrap.min.css";
@import "../assets/bootstrap/css/bootstrap.css";
@import "../assets/fontawesome/css/all.min.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import '../assets/css/admin-style.css';
</style>
