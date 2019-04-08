<template>
	<Layout class="page--works">
		<div class="container">
			<h1 class="main__title">Works</h1>
			<!-- Works Grid -->
			<section class="works">
				<article class="works__item" v-for="post in $page.posts.edges" :key="post.id" :class="post.node.class">
					<g-link :to="post.node.path">
						<figure>
							<g-image :src="post.node.thumbnail" :alt="post.node.title" />
						</figure>
						<div class="works__hover-state">
							<h3 class="works__title">{{ post.node.title }}</h3>
						</div>
					</g-link>
				</article>
			</section>
		</div>
	</Layout>
</template>

<page-query>
query Works {
	posts: allWorkPost {
		edges {
			node {
				id
				path
				title
				thumbnail
				class
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
