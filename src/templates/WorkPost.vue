<template>
	<Layout class="page--work-post">
		<div class="container">
			<h2 class="main__title">{{ $page.post.title }}</h2>
			<article class="work-description" v-html="$page.post.content"></article>
			<!-- Image carousel -->
			<carousel
				:perPage="1">
				<slide>
					<figure>
						<g-image src="/uploads/works/escenas/escenas_01.jpg" alt="" />
					</figure>
				</slide>
				<slide>
					<figure>
						<g-image src="/uploads/works/escenas/escenas_02.jpg" alt="" />
					</figure>
				</slide>
			</carousel>
		</div>
	</Layout>
</template>

<page-query>
query WorkPost ($path: String!) {
	post: workPost (path: $path) {
		title
		content
	}
}
</page-query>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
	metaInfo() {
		return {
			title: this.$page.post.title
		}
	},

	components: {
   	Carousel,
   	Slide
  }
}
</script>

