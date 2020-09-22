<template>
  <div class="category">
    <div
      class="categoryAll"
      @click="onSelect(item.id)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSelect (id) {
      this.$store.dispatch('setCategories', this.item.id)
    }
  }
}
</script>

<style>
.category {
  display: flex;
  justify-content: center;
  margin: 5px;
}
.categoryAll {
  margin: 5px;
}

</style>
