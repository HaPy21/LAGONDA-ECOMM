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
import ProductBox from 'C:/Users/renzo/Desktop/JSnew/Lagondapreset/LAGONDA-ECOMM/src/components/ProductBox.vue'

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
        name: 'prod1',
        price: 1100,
        model: "blabla"
      },
      {
        id: 2,
        name: 'prod2',
        price: 2100,
        model: "sssss"
      },
      {
        id: 3,
        name: 'prod3',
        price: 400,
        model: "dsadsa"
      },
      {
        id: 4,
        name: 'prod4',
        price: 10,
        model: "nfn"
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