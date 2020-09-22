<template>
  <div>
    <div>
      <section class="cart">
        <h2 class="text-center">
          Корзина
        </h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                Название
              </th>
              <th scope="col">
                Размер
              </th>
              <th scope="col">
                Кол-во
              </th>
              <th scope="col">
                Стоимость
              </th>
              <th scope="col">
                Итого
              </th>
              <th scope="col">
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            <BasketItem
              v-for="(item, id) in items"
              :key="id"
              :item="item"
            />
          </tbody>
        </table>
      </section>
      <div>
        <h1 class="text-center">
          Купон на скидку
        </h1>
        <input
          class="sale"
          placeholder="Скидка"
          :value="sale"
          @input="updateInput"
        >
        <button @click.prevent="addSale">
          Получить скидку
        </button>
      </div>
    </div>
    <div>
      <section class="order">
        <h2 class="text-center">
          Оформить заказ
        </h2>
        <div
          class="card"
        >
          <form class="card-body">
            <div class="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                id="phone"
                class="form-control"
                placeholder="Ваш телефон"
              >
            </div>
            <div class="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input
                id="address"
                class="form-control"
                placeholder="Адрес доставки"
              >
            </div>
            <div class="form-group form-check">
              <input
                id="agreement"
                type="checkbox"
                class="form-check-input"
              >
              <label class="form-check-label" htmlFor="agreement">Согласен с правилами
                доставки</label>
            </div>
            <button
              type="submit"
              class="btn btn-outline-secondary"
              @:click="Order"
            >
              Оформить
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BasketItem from '@/components/BaskeItem'
// import storage from '@/service/storage'
export default {
  name: 'Basket',
  components: {
    BasketItem
  },
  mounted () {
    return this.$store.state.basketStore.items
  },
  computed: {
    ...mapState({
      items: state => state.basketStore.items,
      sale: state => state.basketStore.sale
    })
  },
  methods: {
    Order () {
      this.$store.dispatch('basketStore/postOrder')
    },
    addSale () {
      // заглушка для скидки :)
      console.log('')
    },
    updateInput (e) {
      this.$store.commit('updateInput', e.target.value)
    }
  }
}
</script>

<style>
.card {
  max-width: 30rem;
  margin: 0 auto
}
.text-center {
  display: flex;
  justify-content: center;
}
</style>
