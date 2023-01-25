<script setup lang="ts">
import { ref, computed } from "vue";
import { GENDER, type Guest } from "../src/types/types";
import GuestCard from "./components/GuestCard.vue";

const name = ref("");
const gender = ref(GENDER.MALE);

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

const count = computed<{
  male: number;
  female: number;
}>(() => {
  return guestList.value.reduce(
    (countObject, guest) => {
      if (guest.gender === GENDER.MALE) {
        return {
          ...countObject,
          male: countObject.male + 1,
        };
      }

      return {
        ...countObject,
        female: countObject.female + 1,
      };
    },
    { male: 0, female: 0 }
  );
});
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

    <div class="guest_gender_counter">
      <p class="guest_gender_male">{{ count.male }}</p>
      <p class="guest_gender_female">{{ count.female }}</p>
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

.guest_gender_counter {
  display: flex;
  margin-bottom: 1rem;
}

.guest_gender_counter p {
  margin-inline: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1000px;
  color: black;
  font-weight: bold;
}
</style>
