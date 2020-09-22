<template>
  <div class="hits-list">
    <transition name="fade">
      <li>
        <div @click="onChange(item.id)">
          <img alt="" :src="item.images[0]">
        </div>
        <div @click="onChange(item.id)">
          <p class="card-text">
            {{ item.title }}
          </p>
          <p class="card-text">
            {{ item.price }} руб
          </p>
        </div>
        <div>
          <el-button @click="onChange(item.id)">
            Заказать
          </el-button>
        </div>
      </li>
    </transition>
  </div>
</template>

<script>
// import { Button, Select } from 'element-ui'
export default {
  name: 'List',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onChange (id) {
      this.$router.push(`/catalog/${id}`)
    }
  }
}
</script>

<style>

</style>
