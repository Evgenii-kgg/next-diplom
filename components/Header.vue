<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <div class="container">
      <div class="navbar-brand" href="/">
        <img src="@/static/header-logo.png">
      </div>
      <div class="list">
        <a class="nav-link"><nuxt-link to="/">
          Главная
        </nuxt-link></a>
        <a class="nav-link">
          <nuxt-link to="/catalog">
            Католог
          </nuxt-link>
        </a>
        <a class="nav-link"><nuxt-link to="/about">
          О магазине
        </nuxt-link></a>
        <a class="nav-link"><nuxt-link to="/contacts">
          Контакты
        </nuxt-link></a>
      </div>
      <div @click="Basket">
        <i class="el-icon-shopping-cart-2" />
        <span class="header-controls">{{ count }}</span>
      </div>
    </div>
  </el-menu>
</template>

<script>
// import headerLogo from 'static/header-logo.png'
import storage from '~/service/storage'
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      count: storage.get('basket')?.items?.length || ''
    }
  },
  computed: {
    // count: storage.get('basket')?.items?.length || ''
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
.header-controls {
  height: 30px;
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
