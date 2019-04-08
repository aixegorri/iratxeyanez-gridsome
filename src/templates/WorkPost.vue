<template>
	<Layout class="page--work-post">
		<div class="container">
			<h2 class="main__title">{{ $page.post.title }}</h2>
			<article class="work-description" v-html="$page.post.content"></article>
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
export default {
	metaInfo() {
		return {
			title: this.$page.post.title
		}
	}
}
</script>

