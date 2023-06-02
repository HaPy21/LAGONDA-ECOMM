

	<!-- <div > -->
		<!-- <input v-model='producto.nombre'>
	</div>
	<button v-onclick:='getProductoById1()'>
	foto
<h1>{{detalleProducto.nombreProducto}}</h1>
<label>{{detalleProducto.precio}}</label>
	formulario{label--> nombreprodut, precio, modelo, medidad, indiceCarga (atributos) } -->
	<template>
		<section class="contenido">
		    <div class="mostrador" id="mostrador">
			<div class="columna">
		    <div class="item" @click="cargar">
				<div class="contenedor-foto">
				<img class="imagen" src="img/1.jpg" alt="FIREHAWK_AS.jpg">
				</div>
				<!-- <p class="descripcion">FIREHAWK AS</p>
				<span class="precio">s/ 300</span> -->
			    </div>
			    <div class="item" @click="cargar">
				<div class="contenedor-foto">
			    <img class="imagen" src="img/2.jpg" alt="F-SERIES_FR_710.jpg">
				</div>
				<!-- <p class="descripcion" id>F-SERIES FR 710 </p>
				<span class="precio">s/800</span> -->
			    </div>
			    <div class="item" @click="cargar">
				<div class="contenedor-foto">
			    <img class="imagen" src="img/3.jpg" alt="FIREHAWK_GTV.jpg">
				</div>
				<!-- <p class="descripcion">FIREHAWK GTV</p>
				<span class="precio">s/ 600</span> -->
			    </div>
			    <div class="item" @click="cargar">
				<div class="contenedor-foto">
			    <img class="imagen" src="img/4.jpg" alt="AFFINITY_TOURING_S4.jpg">
				</div>
				<!-- <p class="descripcion">AFFINITY TOURING S4</p>
				<span class="precio">s/ 500</span> -->
			    </div>
			    </div>
		        </div>	  
		    <!-- CONTENEDOR DEL ITEM SELECCIONADO -->
		    <div class="seleccion" id="seleccion">
			<div class="cerrar" @click="cerrar">
		    &#x2715
			</div>
			<div class="info width-info">
			<img class="imagen-seleccion" :src="imagenSeleccionada" :alt="modeloSeleccionado">
			</div>
			<div class="info bg-info">
			<h2>{{ modeloSeleccionado }}</h2>
			<p>{{ descripcionSeleccionada }}</p>
			<span class="precio">{{ precioSeleccionado }}</span>	  
		    <div class="fila">
			<div class="size">
			<label for="cantidad">cantidad</label>
			<select name="cantidad" id="cantidad" v-model="cantidadSeleccionada">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
				</select>
				</div>
				<button @click="agregarAlCarrito">AGREGAR AL CARRITO</button>
			    </div>
			</div>
		    </div>
		</section>
	    </template> 
	    <script>
	    export default {
		data() {
    return {
			modeloSeleccionado: 'FIREHAWK AS',
			descripcionSeleccionada: 'Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque a eros sed faucibus. Donec fringilla risus vitae orci consectetur, in fermentum libero luctus. Proin ac cursus nibh. Phasellus lacinia vulputate mauris ut imperdiet. Nunc tristique volutpat ante mattis feugiat. Quisque turpis nisl, pellentesque quis euismod vitae, vestibulum in arcu. Aenean quis elit varius, bibendum lectus non, scelerisque dui.',
			precioSeleccionado: 'S/. 300',
			cantidadSeleccionada: '1',
			imagenSeleccionada: 'img/1.jpg',
                };
		},
		methods: {
        cargar() {
			// Lógica para cargar el elemento seleccionado
		},
		cerrar() {
			// Lógica para cerrar el contenedor del item seleccionado
		},
		agregarAlCarrito() {
			// Lógica para agregar el producto al carrito
		},
		},
	    };
	    </script>	  
	    <style scoped>
	  /* Estilos CSS aquí */
	    </style>	  

