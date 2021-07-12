<template>
  <base-card>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :item="goal">{{ goal }}</slot>
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        'finish the course',
        'take helpful notes',
        'discuss big ideas of Vue',
      ],
    };
  },
};
</script>

<style></style>
