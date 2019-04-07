<template>
	<Layout>
		<section class="works">
			<article class="works__item" v-for="post in $page.posts.edges" :key="post.id">
				<g-link :to="post.node.path">
					<figure>
						<g-image src="~/assets/img/works/aita/cover.jpg" :alt="post.node.title" />
					</figure>
					<div class="works__hover-state">
						<h3 class="works__title">{{ post.node.title }}</h3>
					</div>
				</g-link>
			</article>
		</section>
	</Layout>
</template>

<page-query>
query Works {
	posts: allWorkPost {
		edges {
			node {
				id
				title
				path
			}
		}
	}
}
</page-query>

<script>
export default {
	metaInfo: {
		title: 'Works'
	}
}
</script>

<style lang="scss">
	.works {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-column-gap: $gutter-width;
		grid-row-gap: $gutter-width;
	}

	.works__item {
		width: 100%;
		height: em(200);

		&:hover {
			.works__hover-state {
				opacity: .9;
			}
			.works__title {
				opacity: 1;
				transform: translateY(0);
			}
		}

		> a {
			display: block;
			position: relative;
			width: 100%;
			height: 100%;
		}

		figure {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			margin: 0;

			img {
				width: 100%;
				height: em(200);
				margin: 0;
				object-fit: cover;
			}
		}
	}

	.works__hover-state {
		display: flex;
		align-items: flex-end;
		position: absolute;
		left: 1em;display: flex;
		right: 1em;
		top: 1em;
		bottom: 1em;
		width: auto;
		height: auto;
		background-color: $color-primary;
		padding: $padding;
		opacity: 0;
		transition: $animation-hover;
	}

	.works__title {
		margin: 0;
		opacity: 0;
		transform: translateY(1em);
		transition: $animation-hover;
		transition-delay: $animation-hover / 2;
	}
</style>

