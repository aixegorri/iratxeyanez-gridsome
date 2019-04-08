<template>
	<div class="page">
		<header class="header">
			<div class="container">
				<g-link to="/">{{ $static.metaData.siteName }}</g-link>
				<nav class="nav">
					<g-link class="nav__link" to="/">Home</g-link>
					<g-link class="nav__link" to="/works">Works</g-link>
					<g-link class="nav__link" to="/about">About</g-link>
				</nav>
			</div>
		</header>
		<slot/>
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
