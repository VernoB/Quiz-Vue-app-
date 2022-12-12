<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
    const {
        quizQuestionLength,
        numberOfCorrectAnswer
     } = defineProps([
        "quizQuestionLength", 
        "numberOfCorrectAnswer"
        ])
    const returnHome = () => {
        router.push('/')
    }
</script>

<template>
    <div class="result">
        <p>Your results...</p>
        <h1>{{numberOfCorrectAnswer}}/{{quizQuestionLength}}</h1>
        <button @click="returnHome">home</button>
    </div>
</template>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
</style>