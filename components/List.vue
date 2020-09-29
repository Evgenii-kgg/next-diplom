<template>
  <div class="list">
    <el-card :body-style="{ padding: '0px' }">
      <div @click="onChange(item.id)">
        <img class="item" alt="" :src="item.images[0]">
      </div>
      <div @click="onChange(item.id)">
        <p class="card-text">
          {{ item.title }}
        </p>
        <p class="card-text">
          {{ item.price }} руб
        </p>
      </div>
      <el-button @click="onChange(item.id)">
        Заказать
      </el-button>
    </el-card>
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
.item {
  height: 150px;
}
</style>
