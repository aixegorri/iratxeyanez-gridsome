<template>
  	<Layout class="page--about">
		<div class="container">
			<h3 class="main__title">Contact</h3>
			<section class="section-form">
				<figure class="section-form__image">
					<g-image src="~/assets/img/contact.jpg" alt="Escenas Artwork" class="img-responsive" />
				</figure>
				<div class="section-form__form-container">
					<!-- Form Submitted -->
					<div v-if="alerts" class="alert" :class="alertClass" >
						<p v-html="alerts"></p>
					</div>
					<!-- ./Form Submitted -->
					<form
						name="contact"
						method="post"
						v-on:submit.prevent="handleSubmit"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						v-if="showForm"
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
								<input type="text" name="name" id="name" v-model="formData.name" required>
							</div>
							<div class="form__group">
								<label for="email">Email.</label>
								<input type="email" name="email" id="email" v-model="formData.email" required>
							</div>
							<div class="form__group form__group--textarea">
								<label for="message">Message.</label>
								<textarea name="message" id="message" rows="5" v-model="formData.message" required></textarea>
							</div>
						</div>
						<div class="form__submit">
							<button type="submit" class="btn btn--primary">Submit</button>
						</div>
					</form>
				</div>
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
			alerts: '',
			formData: {},
			showForm: true
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
			.then(() => {
				this.alertClass = 'alert--success'
				this.alerts = 'Message successfully sent.'
				this.showForm = false
			})
			.catch(error => alert(error))
		}
	}
}
</script>

<style lang="scss">
.alert {
	margin-bottom: $margin;
	padding: .5em 2em .5em 1em;
	background-color: $color-alert;
	border: $alert-border-width $alert-border-style $alert-border-color;
	font-family: $font-family-base;
	font-size: fs(small);
	color: $alert-text-color;
	position: relative;

	.alert--heading {
		color: inherit;
	}

	.close {
		position: absolute;
		top: -2px;
		right: 2px;
		float: right;
		font-size: fs(small);
		font-weight: bold;
		line-height: 18px;
		color: inherit;
	}
}

.alert--success {
	background-color: $alert--success-color;
	border-color: $alert--success-border-color;
	color: $alert--success-text-color;
}

.alert--warning {
	background-color: $alert--warning-color;
	border-color: $alert--warning-border-color;
	color: $alert--warning-text-color;
}

.alert--error {
	background-color: $alert--error-color;
	border-color: $alert--error-border-color;
	color: $alert--error-text-color;
}

.alert--info {
	background-color: $alert--info-color;
	border-color: $alert--info-border-color;
	color: $alert--info-text-color;
}
</style>

