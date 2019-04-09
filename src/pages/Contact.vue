<template>
  	<Layout class="page--about">
		<div class="container">
			<h3 class="main__title">Contact</h3>
			<section class="section-form">
				<figure class="section-form__image">
					<g-image src="~/assets/img/contact.jpg" alt="Escenas Artwork" class="img-responsive" />
				</figure>
				<form
					name="contact"
					method="post"
					v-on:submit.prevent="handleSubmit"
					action="/success/"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					class="form">
					<!-- Anti Spam Bots -->
					<input type="hidden" name="form-name" value="contact" />
					<p hidden>
						<label>
							Don’t fill this out: <input name="bot-field" />
						</label>
					</p>
					<!-- ./ Anti Spam Bots -->
					<div class="fieldset">
						<div class="form__group">
							<label for="name">Name.</label>
							<input type="text" name="name" id="name" v-model="formData.name">
						</div>
						<div class="form__group">
							<label for="email">Email.</label>
							<input type="email" name="email" id="email" v-model="formData.email">
						</div>
						<div class="form__group form__group--textarea">
							<label for="message">Message.</label>
							<textarea name="message" id="message" rows="5" v-model="formData.message"></textarea>
						</div>
					</div>
					<div class="form__submit">
						<button type="submit" class="btn btn--primary">Submit</button>
					</div>
				</form>
			</section>
		</div>
  	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Contact'
	},

	data() {
		return {
			formData: {},
		}
	},

	methods: {
		encode(data) {
			return Object.keys(data)
				.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
				.join('&')
		},
		handleSubmit(e) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: this.encode({
				'form-name': e.target.getAttribute('name'),
				...this.formData,
				}),
			})
			.then(() => this.$router.push('/success'))
			.catch(error => alert(error))
		}
	}
}
</script>
