<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Justin Hager',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
