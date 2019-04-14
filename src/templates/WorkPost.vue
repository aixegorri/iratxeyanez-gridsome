<template>
	<Layout class="page--work-post">
		<div class="container">
			<h2 class="main__title">{{ $page.post.title }}</h2>
			<article class="work-description" v-html="$page.post.content"></article>
			<!-- Image carousel -->
			<ClientOnly>
				<carousel
					class="work-carousel"
					:autoplay="true"
					:autoplayTimeout="8000"
					:autoplayHoverPause="true"
					:easing="'ease-in'"
					:loop="true"
					:perPage="1">
					<slide v-for="image in $page.post.workImages" :key="image.id">
						<figure>
							<g-image class="img-responsive work-carousel__image" :src="image.src" :alt="image.src" />
							<figcaption class="work-carousel__caption">{{ image.caption }}</figcaption>
						</figure>
					</slide>
				</carousel>
			</ClientOnly>
		</div>
	</Layout>
</template>

<page-query>
query WorkPost ($path: String!) {
	post: workPost (path: $path) {
		title
		content
		workImages {
			src
			caption
		}
	}
}
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.post.title
		}
	},

	components: {
		Carousel: () =>
			import ('vue-carousel')
			.then(m => m.Carousel)
			.catch(),
		Slide: () =>
			import ('vue-carousel')
			.then(m => m.Slide)
			.catch()
	}
}
</script>

