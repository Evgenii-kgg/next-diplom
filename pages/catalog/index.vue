<template>
  <div class="catalog_page">
    <div class="add">
      <div class="header">
        <Nuxt />
      </div>
      <img
        src="https://github.com/netology-code/ra16-diploma/blob/master/html/img/banner.jpg?raw=true"
        alt=""
      >
    </div>
    <section class="catalog">
      <h2 class="text-center">
        Каталог
      </h2>
      <form class="catalog-search-form">
        <el-input
          class="form-control"
          placeholder="Поиск"
          :value="searchGlobal"
          @input="updateInput"
        />
        <el-button @click.prevent="search(searchGlobal)">
          Поиск
        </el-button>
      </form>
      <div
        class="catalog_list"
      >
        <span class="all" @click="onSelectAll">Все</span>
        <Category
          v-for="(item, index) in categories"
          :key="index"
          :item="item"
        />
      </div>
      <div class="list">
        <List
          v-for="(item, id) in items"
          :key="id"
          :item="item"
        />
      </div>
    </section>
    <div class="text-center">
      <button class="btn btn-outline-primary" @click="{LoadMore}">
        Загрузить ещё
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import List from '@/components/List'
import Category from '@/components/Category'

export default {
  name: 'Catalog',
  components: {
    List,
    Category
  },
  data () {
    return {
      searchGlobal: ''
    }
  },
  computed: {
    ...mapState({
      items: state => state.items,
      categories: state => state.categories
      // searchGlobal: state => state.searchGlobal
    })
  },
  // layout: 'Header',
  mounted () {
    this.$store.dispatch('getItem')
    this.$store.dispatch('getCategories')
    // this.$store.dispatch('getSearch')
  },
  methods: {
    search (value) {
      this.$store.dispatch('getSearch', value)
    },
    updateInput (value) {
      this.searchGlobal = value
    },
    LoadMore () {
    },
    onSelectAll () {
      this.$store.dispatch('getItem')
    }
  }
}
</script>

<style>
.catalog_list {
  text-align: center;
  display: flex;
  justify-content: center;
}

.list {
  list-style-type: none;
}

.catalog-search-form {
  display: flex;
  justify-content: center;
}

.text-center {
  display: flex;
  justify-content: center;
}

.all {
  display: flex;
  align-items: center;
}
</style>
