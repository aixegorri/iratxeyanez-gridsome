<template>
  	<Layout class="page--about">
		<div class="container">
			<h3 class="main__title">About</h3>
			<section class="bio">
				<figure class="bio__image">
					<g-image src="~/assets/img/bio@2x.jpg" alt="Iratxe Yañez Picture" />
				</figure>
				<article class="bio__article">
					<h4 class="bio__title">Iratxe Yañez</h4>
					<p>Mi trabajo se centra en el campo experimental de la pintura y tiene como origen el propio proceso del sujeto creador.</p>
					<p>Mi práctica experimental como artista plástica parte de imágenes fotográficas como excusa de creación. Encontramos imágenes fílmicas, como imágenes fotográficas personales e imágenes pertenecientes al imaginario propio, que son constituyentes de una memoria particular.</p>
					<p>Utilizo la imagen fotográfica como punto de partida, para después despojarla de su narrativa y así poder centrarnos en su plástica. Mediante el proceso creativo se pierden los significantes originales de la imagen, se pierde toda referencia visible o aparente con la imagen original, con la memoria de la imagen, y así , éste objeto plástico va cobrando presencia propia.</p>
				</article>
			</section>
			<section class="cv">
				<h4 class="cv__title">Curriculum Vitae</h4>
				<div class="cv__grid">
					<article class="panel" v-for="panel in cv" :key="panel.id">
						<h5 class="panel__title">{{ panel.title }}</h5>
						<ul class="panel__list">
							<li class="item" v-for="item in panel.list.reverse()" :key="item.id">
								<p class="item__date">{{ item.date }}</p>
								<h6 class="item__title">{{ item.title }}</h6>
								<p class="item__subtitle">{{ item.subtitle }}</p>
							</li>
						</ul>
					</article>
				</div>
			</section>
		</div>
  	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'About'
	},

	data () {
		return {
			cv: [
				{
					id: 0,
					title: 'Exhibitions',
					list: [
						{
							id: 0,
							date: '2010',
							title: 'III Certamen de arte hormonado',
							subtitle: 'Galeria Dspacio, Bilbao'
						},
						{
							id: 1,
							date: '2010',
							title: 'Ikas-art',
							subtitle: 'Bilbao Exhibition Center, Barakaldo'
						},
						{
							id: 2,
							date: '2012',
							title: 'XXIII Concurso de ideas para la realización de un múltiple fin de año',
							subtitle: 'Facultad Bellas Artes UPV/EHU - Segundo premio'
						},
						{
							id: 3,
							date: '2012',
							title: 'Alumnos de Bellas Artes',
							subtitle: 'Sanz Enea, Zarautz, Gipuzkoa'
						},
						{
							id: 4,
							date: '2012',
							title: 'Gorantz',
							subtitle: 'Galería Windsor Kulturgintza, Bilbao'
						},
						{
							id: 5,
							date: '2012',
							title: 'Arteshop',
							subtitle: 'Intervención en espacio comercial, Bilbao'
						},
						{
							id: 6,
							date: '2012',
							title: '“De la fotografía a la pintura” I.Congreso Internacional, arte, memoria y democracia',
							subtitle: 'Bilbao / Gernika-Lumo'
						},
						{
							id: 7,
							date: '2013',
							title: 'Arteshop',
							subtitle: 'Intervención en espacio comercial, Bilbao - Finalista.'
						},
						{
							id: 8,
							date: '2014',
							title: 'Festival Embarrat',
							subtitle: 'Exposición La gran máquina, Tárrega, Lleida'
						},
						{
							id: 9,
							date: '2015',
							title: 'Tradizioa',
							subtitle: 'Okela Sormen Lantegia'
						},
						{
							id: 10,
							date: '2015',
							title: 'Getxoarte',
							subtitle: 'Salón de Prácticas Contemporáneas, Getxo'
						},
					]
				},
				{
					id: 1,
					title: 'Academics',
					list: [
						{
							id: 0,
							date: '2010',
							title: 'Licenciatura en Bellas Artes',
							subtitle: 'UPV/EHU'
						},
						{
							id: 1,
							date: '2012',
							title: 'Curso "El Libro de artista"',
							subtitle: 'Impartido por Almudena Arana'
						},
						{
							id: 2,
							date: '2013',
							title: 'Máster Increarte. Investigación en arte',
							subtitle: 'UPV/EHU'
						},
						{
							id: 3,
							date: 'Present',
							title: 'Doctorado en Investigación en Arte Contemporáneo',
							subtitle: 'UPV/EHU'
						}
					]
				},
				{
					id: 2,
					title: 'Bibliography',
					list: [
						{
							id: 0,
							date: '2010',
							title: 'Ikas-art',
							subtitle: 'Catálogo'
						}
					]
				}
			]
		}
	}
}
</script>
