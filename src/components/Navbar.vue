<template>
	<div class="navbar">
		<g-link to="/" class="navbar__brand">Iratxe Yañez</g-link>

		<div class="navbar__toggle" @click="isActive = !isActive" :class="{active: isActive}">
			<i></i>
			<i></i>
			<i></i>
		</div>
		<nav class="nav" :class="{active: isActive}">
			<router-link
				v-for="navItem in navItems"
				:key="navItem.id"
				:to="navItem.path"
				class="nav__item">
				<span v-html="navItem.name"></span>
			</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data () {
		return {
			isActive: false,
			navItems: [
				{
					id: 0,
					name: 'Works',
					path: '/works'
				}, {
					id: 1,
					name: 'About',
					path: '/about'
				}, {
					id: 2,
					name: 'Contact',
					path: '/contact'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
}

.nav {
	position: fixed;
	top: 5rem;
	left: 0;
	height: 0;
	width: 100%;
	overflow: hidden;
	z-index: 10;
	padding-top: .5rem;
	text-align: center;
	transition: all .3s ease-in;
	opacity: 0;
	border-top: 1px solid transparent;

	&.active {
		height: calc(100vh - 5rem);
		opacity: 1;
		background-color: $color-white;
		border-color: $color-secondary;
	}

	&__item {
		display: table;
		margin-left: auto;
		margin-right: auto;
		padding: .8rem 0;
		position: relative;
		width: 100%;

		&::after {
			background-color: $color-primary;
			bottom: -1px;
			content: "";
			display: block;
			height: 1px;
			left: 0;
			width: 0;
			overflow: hidden;
			position: absolute;
			transition: all $animation-hover ease-in;
		}

		&:hover {
			text-decoration: none;
			background-color: $color-secondary;

			&::after {
				width: 100%;
			}
		}
	}
}

// Hamburger Nav
.navbar__toggle {
	cursor: pointer;
	width: em(55);
	height: 15px;
	line-height: 15px;
	margin: auto 0;
	padding-left: 1rem;
	padding-right: 1rem;

	i {
		background-color: $color-primary;
		border-radius: 4px;
		content: '';
		display: block;
		width: 100%;
		height: 2px;
	}

	i:nth-child(1) {
		animation: outT .8s backwards;
		animation-direction: reverse;
	}

	i:nth-child(2) {
		margin: 5px 0;
		animation: outM .8s backwards;
		animation-direction: reverse;
	}

	i:nth-child(3) {
		animation: outBtm .8s backwards;
		animation-direction: reverse;
	}

	&.active {
		i:nth-child(1) {
			animation: inT .8s forwards;
		}

		i:nth-child(2) {
			animation: inM .8s forwards;
		}

		i:nth-child(3) {
			animation: inBtm .8s forwards;
		}
	}
}

@keyframes inM {
	50% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(45deg);
	}
}

@keyframes outM {
	50% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(45deg);
	}
}

@keyframes inT {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(7px) rotate(0deg);
	}

	100% {
		transform: translateY(7px) rotate(135deg);
	}
}

@keyframes outT {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(7px) rotate(0deg);
	}

	100% {
		transform: translateY(7px) rotate(135deg);
	}
}

@keyframes inBtm {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(-7px) rotate(0deg);
	}

	100% {
		transform: translateY(-7px) rotate(135deg);
	}
}

@keyframes outBtm {
	0% {
		transform: translateY(0) rotate(0deg);
	}

	50% {
		transform: translateY(-7px) rotate(0deg);
	}

	100% {
		transform: translateY(-7px) rotate(135deg);
	}
}
</style>
