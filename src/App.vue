<script setup lang="ts">
import { ref } from "vue";

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
    <div>
      <h1>Guests</h1>
    </div>

    <input type="text" placeholder="Name" v-model.trim="name" />

    <select v-model="gender">
      <option :value="GENDER.MALE">{{ GENDER.MALE }}</option>
      <option :value="GENDER.FEMALE">{{ GENDER.FEMALE }}</option>
    </select>

    <button @click="addGuest">Add guest</button>

    <div v-for="guest in guestList" :key="guest.id">
      <div class="guest_description">
        <p class="guest_name">{{ guest.name }}</p>
        <p
          :class="
            guest.gender === GENDER.MALE
              ? 'guest_gender_male'
              : 'guest_gender_female'
          "
        >
          {{ guest.gender }}
        </p>
      </div>
    </div>
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
  width: 50%;
}

input {
  margin-block: 0.5rem;
}

select {
  margin-bottom: 2rem;
}

button {
  width: 50%;
  border: none;
  padding-block: 0.5rem;
  background-color: #833ded;
  color: whitesmoke;
}

.guest_description {
  display: flex;
}

.guest_description p:nth-child(2) {
  margin-left: 1rem;
}

.guest_gender_male {
  color: deepskyblue;
}

.guest_gender_female {
  color: violet;
}
</style>
