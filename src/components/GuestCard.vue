<script setup lang="ts">
enum GENDER {
  MALE = "Boy",
  FEMALE = "Girl",
}

defineProps<{
  guest: {
    id: number;
    name: string;
    gender: GENDER;
  };
}>();
</script>

<template>
  <div class="guest_description">
    <p class="guest_name">{{ guest.name }}</p>
    <p
      class="guest_gender"
      :class="
        guest.gender === GENDER.MALE
          ? 'guest_gender_male'
          : 'guest_gender_female'
      "
    ></p>
  </div>
</template>

<style scoped>
.guest_description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #636363;
  width: 50%;
  padding: 0.5rem;
}

.guest_gender {
  width: 20px;
  height: 20px;
  border-radius: 1000px;
}

:global(.guest_gender_male) {
  background-color: deepskyblue;
}

:global(.guest_gender_female) {
  background-color: violet;
}
</style>
