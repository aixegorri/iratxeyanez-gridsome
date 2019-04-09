<template>
  	<Layout class="page--about">
		<div class="container">
			<h3 class="main__title">Contact</h3>
			<section class="section-form">
				<figure class="section-form__image">
					<g-image src="~/assets/img/contact.jpg" alt="Escenas Artwork" class="img-responsive" />
				</figure>
				<form action="" class="form">
					<div class="fieldset">
						<div class="form__group">
							<label for="name">Name.</label>
							<input type="text" name="name" id="name">
						</div>
						<div class="form__group">
							<label for="email">Email.</label>
							<input type="email" name="email" id="email">
						</div>
						<div class="form__group form__group--textarea">
							<label for="message">Message.</label>
							<textarea name="message" id="message" rows="5"></textarea>
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
	}
}
</script>
