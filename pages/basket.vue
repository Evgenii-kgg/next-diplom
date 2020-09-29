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
                Стоимость
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
        <el-input
          class="sale"
          placeholder="Скидка"
          :value="sale"
          @input="updateInput"
        />
        <el-button @click.prevent="addSale">
          Получить скидку
        </el-button>
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
              <el-input
                id="phone"
                v-model="phone"
                class="form-control"
                placeholder="Ваш телефон"
              />
            </div>
            <div class="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <el-input
                id="address"
                v-model="address"
                class="form-control"
                placeholder="Адрес доставки"
              />
            </div>
            <div class="form-group form-check">
              <el-checkbox class="check">
                Согласен с правилами доставки
              </el-checkbox>
            </div>
            <el-button
              type="submit"
              class="btn btn-outline-secondary"
              @:click="Order"
            >
              Оформить
            </el-button>
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
  data () {
    return {
      sale: '',
      phone: '',
      address: ''
    }
  },
  created () {
    return this.$store.state.basketStore.items
  },
  computed: {
    ...mapState({
      items: state => state.basketStore.items
    })
  },
  methods: {
    Order () {
      this.$store.dispatch('basketStore/postOrder')
    },
    addSale () {
      // заглушка для скидки :)
    },
    updateInput (value) {
      this.sale = value
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
