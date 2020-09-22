<template>
  <section class="catalog-item">
    <h2 class="text-center">
      {{ product.title }}
    </h2>
    <div class="row">
      <div class="col-5" />
      <img alt="" :src="product.images[0]">
      <div class="col-7">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>Артикул</td>
              <td>{{ product.sku }}</td>
            </tr>
            <tr>
              <td>Производитель</td>
              <td>{{ product.manufacturer }}</td>
            </tr>
            <tr>
              <td>Цвет</td>
              <td>{{ product.color }}</td>
            </tr>
            <tr>
              <td>Материалы</td>
              <td>{{ product.material }}</td>
            </tr>
            <tr>
              <td>Сезон</td>
              <td>{{ product.season }}</td>
            </tr>
            <tr>
              <td>Повод</td>
              <td>{{ product.reason }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn btn-danger btn-block btn-lg" @click="onBasket(product)">
        В корзину
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import storage from '~/service/storage'
export default {
  name: 'Item',
  data () {
    return {
      id: this.$route.params.item
    }
  },
  computed: {
    ...mapState({
      product: state => state.product
    })
  },
  created () {
    this.$store.dispatch('getProduct', this.id)
  },
  methods: {
    onBasket (item) {
      console.log(item)
      storage.set('basket', { ...this.$store.state.basketStore.items, item })
      this.$router.push('/basket')
    }

  }
}
</script>

<style>

</style>
