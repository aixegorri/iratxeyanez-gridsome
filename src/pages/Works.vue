<template>
	<Layout>
		<ul>
			<li v-for="post in $page.posts.edges" :key="post.id">
				<g-link :to="post.node.path">
					{{ post.node.title }}
				</g-link>
			</li>
		</ul>
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
