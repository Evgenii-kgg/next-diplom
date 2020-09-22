<template>
  <header class="container">
    <a class="navbar-brand" href="/">
      <img
        :src="headerLogo"
      >
    </a>
    <div class="list">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link"><nuxt-link to="/">
            Главная
          </nuxt-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <nuxt-link to="/catalog">
              Католог
            </nuxt-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><nuxt-link to="/about">
            О магазине
          </nuxt-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><nuxt-link to="/contacts">
            Контакты
          </nuxt-link></a>
        </li>
      </ul>
      <div @click="Basket">
        <button>Корзина</button>
        <span class="header-controls-cart-full">{{ count }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import headerLogo from 'static/header-logo.png'
import storage from '~/service/storage'
export default {
  name: 'Header',
  computed: {
    count: storage.get('basket')?.items?.length || '',
    headerLogo
  },
  methods: {
    Basket () {
      this.$router.push('/basket')
    },
    basketCount () {
      return storage.get('basket')?.items?.length || ''
    }
  }
}

</script>

<style>
.container {
  display: flex;

}
.search {
  display: flex;
}
.nav-item {
  list-style-type: none
}
.header-controls-cart-full {
  position: absolute;
  right: -10px;
  top: -5px;
  display: block;
  height: 21px;
  width: 21px;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
  border-radius: 50%;
  background: linear-gradient(90deg, #ff65a5 1.11%, #ff8076 100%);
  box-shadow: 0px 2px 8px rgba(255, 101, 165, 0.6), inset 0px 1px 1px #ff8076;
}
.header-controls-search-form .form-control {
  width: 100%;
  height: 100%;
  color: #333333;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
