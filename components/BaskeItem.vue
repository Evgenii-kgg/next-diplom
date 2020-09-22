<template>
  <div class="hits-list">
    <transition name="fade">
      <li class="list">
        <tr>
          <td>{{ item.title }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.price }} руб.</td>
          <td>
            <button
              @click="deleteItem(item.id)"
            >
              Удалить
            </button>
          </td>
        </tr>
      </li>
    </transition>
  </div>
</template>

<script>
import storage from '~/service/storage'
export default {
  name: 'List',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteItem (id) {
      storage.set('basket', { items: this.$store.state.basketStore.items.filter(item => item.id !== id) })
      return this.$store.state.basketStore.items.filter(item => item.id !== id)
    }
  }
}
</script>

<style>
.list {
  max-width: 30rem;
  margin: 0 auto
}
</style>
