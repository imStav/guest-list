<script setup lang="ts">
import { ref } from "vue";

enum GENDER {
  MALE = "Boy",
  FEMALE = "Girl",
}

const name = ref("");
const gender = ref(GENDER.MALE);

interface Guest {
  // id: number,
  name: string;
  gender: GENDER;
}

const guestList = ref<Guest[]>([]);

const addGuest = (): void => {
  if (name.value) {
    guestList.value.push({
      name: name.value,
      gender: gender.value,
    });
  }

  name.value = "";
  gender.value = GENDER.MALE;
};
</script>

<template>
  <main>
    <div>
      <h1>Guests</h1>
    </div>

    <input type="text" placeholder="Name" @keypress.enter="addGuest" />
    <div>{{ guestList }}</div>
    <select v-model="gender" @keypress.enter="addGuest">
      <option :value="GENDER.MALE">{{ GENDER.MALE }}</option>
      <option :value="GENDER.FEMALE">{{ GENDER.FEMALE }}</option>
    </select>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input,
select {
  background-color: transparent;
  color: currentColor;
  border: 1px solid currentColor;
  padding: 0.5rem;
}

input {
  width: 50%;
  margin-block: 0.5rem;
}

select {
  width: 50%;
  margin-bottom: 2rem;
}
</style>
