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
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>
