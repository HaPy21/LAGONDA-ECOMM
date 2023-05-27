<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img
                class="card-img-top embed-responsive-item"
                :src="dsad"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
                {{ product.model}}...
            </p>
            <router-link :to="{name: 'EditProduct', params: {id: product.id}}">
                <button class="btn btn-primary">Agregar a Carrito</button>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ProductBox",
        props: {
            product: {
                type: Object,
                required: true
            },
            methods: {
                addToCart(product) {
                    // Implement your add to cart logic here
                    console.log('Added to cart:', product);
                }
            }
        }
    }
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>
<!--<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img
                class="card-img-top embed-responsive-item"
                :src="w7.pngwing.com/pngs/962/971/png-transparent-top-cat-film-character-fan-art-others-mammal-cat-like-mammal-carnivoran.png"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <h5 class="card-title">nombre del producto</h5>
            <p class="card-text">
                descripcion de prueba
            </p>
            <router-link :to="{name: 'EditProduct', params: {id: product.id}}">
                <button class="btn btn-primary">Edit</button>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ProductBox",
        props: ["product"]
    }
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>-->