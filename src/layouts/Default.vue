<template>
	<div class="page">
		<header class="header">
			<div class="container">
				<Navbar/>
			</div>
		</header>
		<main class="main">
			<slot/>
		</main>
		<footer class="footer">
			<div class="container">
				<h3 class="footer__title">Iratxe Yañez.</h3>
				<p class="footer__description">
					Basque Artist.
					<br>
					<g-link to="/contact">Get in touch.</g-link>
				</p>
				<hr>
				<p class="footer__copy">© Copyright {{ new Date().getFullYear() }}. All Rights Reserved.</p>
			</div>
		</footer>
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>

<script>
import Navbar from '@/components/Navbar'

export default {
	name: 'Layout',

	components: {
		Navbar
	}
}
</script>
