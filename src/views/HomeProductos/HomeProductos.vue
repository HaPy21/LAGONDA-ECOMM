<template>
  
    <div id="homeproductos" style="margin-top: 11rem;">

      <div id="backgoround-div" class="page-holder bg-cover" >
        <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="pt-3">Productos</h2>
              </div>
            </div>
            <!-- Mostrar productos-->
            <div class="row">
              <div v-for="product in products" :key="products.id" class="col-md-6 col-xl-4 col-12 pt3 justify-content-around d-flex">
                <ProductBox :product="product" />
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import ProductBox from '/src/components/ProductBox.vue'

export default {
  name: 'HomeProductos',
  components: {
    ProductBox
  },
  data() {
    return {
      productSize: 0,
      products: [{
        id: 1,
        name: 'Rin1',
        price: 1100,
        model: "Primer rin agregado",
        imageUrl: "https://i.pinimg.com/originals/2d/c6/f3/2dc6f35062469c7600ae0664ab124438.png"
      },
      {
        id: 2,
        name: 'Rin2',
        price: 2100,
        model: "Segundo Rin agregado",
        imageUrl: "https://i.pinimg.com/736x/40/21/45/4021455344b46d831c12eb348437242b--diamond-cuts-wheels.jpg"
      },
      {
        id: 3,
        name: 'Rin3',
        price: 400,
        model: "Tercer Rin agregado",
        imageUrl: "https://cfc7329ad537523a5de1-b21544d490ba797ec9de9d17e947de3d.ssl.cf1.rackcdn.com/wk-46109653_8e4d17b5.jpg"
      },
      {
        id: 4,
        name: 'Rin4',
        price: 10,
        model: "Cuarto Rin agregado",
        imageUrl: "https://i.pinimg.com/originals/b5/f4/fd/b5f4fd40b19b5cb49ba65d54d6c3d2d6.jpg"
      },
      ]
    }
  }
};
</script>
<!--<style>
  .page-holder {
    min-height: 100vh;
  }
  #background-div {
    background: url("")
  }
</style>-->