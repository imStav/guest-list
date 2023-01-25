<script setup lang="ts">
import { ref } from "vue";
import GuestCard from "./components/GuestCard.vue";

enum GENDER {
  MALE = "Boy",
  FEMALE = "Girl",
}

const name = ref("");
const gender = ref(GENDER.MALE);

interface Guest {
  id: number;
  name: string;
  gender: GENDER;
}

const guestList = ref<Guest[]>([]);

const addGuest = (): void => {
  if (name.value) {
    guestList.value.push({
      id: Math.floor(Math.random() * 1000),
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
    <div class="guest_form">
      <input type="text" placeholder="Name" v-model.trim="name" />

      <select v-model="gender">
        <option :value="GENDER.MALE">{{ GENDER.MALE }}</option>
        <option :value="GENDER.FEMALE">{{ GENDER.FEMALE }}</option>
      </select>

      <button @click="addGuest">Add guest</button>
    </div>

    <GuestCard v-for="guest in guestList" :key="guest.id" :guest="guest" />
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
  border-radius: 4px;
  padding: 0.5rem;
}

input {
  margin-block: 0.5rem;
}

select {
  margin-bottom: 1.5rem;
}

button {
  border: none;
  padding-block: 0.5rem;
  background-color: #833ded;
  color: whitesmoke;
  border-radius: 4px;
}

.guest_form {
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  width: 50%;
}
</style>
