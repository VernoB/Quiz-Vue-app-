<script setup>
import {RouterLink} from 'vue-router';

import CardComoponent from '../components/Card.vue'
import q from '../data/quizes.json';
import {ref, watch} from 'vue'

const quizes = ref(q)
const search = ref('')

watch(search, cb => {
 quizes.value = q.filter(quize => {
  return quize.name.toLowerCase().includes(cb.toLowerCase())
 })
})

</script> 


<template>
  <div class="container">
      <header>
        <h1>Quizes</h1>
        <input v-model.trim="search" type="text" placeholder="Search...">
      </header>
      <div class="options-container">
        <TransitionGroup name="card" appear>
          <CardComoponent 
            v-for="quiz in quizes" 
            :key="quiz.id" 
            :quiz="quiz"
          />
        </TransitionGroup>
          <!-- <div v-for="quize in quizes" :key="quize.id" class="card">
          <img :src="quize.img" :alt="quize.name">
          <div class="card-text">
            <h2>{{quize.name}}</h2>
            <p>{{quize.questions.length}} questions</p>
          </div>
        </div> -->
      </div>
  </div>
</template>

<style scoped>


header{
 margin-bottom: 10px;
 margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none; 
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

/*CARD*/
.options-container {
  display : flex;
  flex-wrap: wrap;
  margin-top: 50px ;
}

/*CARD */

.card-enter-from {
  opacity: 0;
  transform: translateY(-25px);
}
.card-enter-to{

}
.card-leave-to {

}

.card-enter-active,
.card-leave-active{
transition: all 0.5s ease;
}
</style>