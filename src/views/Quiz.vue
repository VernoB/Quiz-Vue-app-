<script setup>
import { ref,  computed } from 'vue';
import {useRoute} from 'vue-router'

import QuestionsVue from '../components/Questions.vue';
import Result from '../components/Result.vue'
import QuizHeader from '../components/QuizHeader.vue'
import quizes from '../data/quizes.json'

const route = useRoute()
const id = parseInt(route.params.id)
const quiz = quizes.find(q=> q.id === id)
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswer = ref(0)
const showResult = ref(false)

// const questionStatus = ref(`${currentQuestionIndex.value + 1}/${quiz.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//     questionStatus = ref(`${currentQuestionIndex.value + 1}/${quiz.questions.length}`)
// })

const questionStatus = computed(() => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)

const onOptionSelected = (isCorrect) => {
    if (isCorrect) numberOfCorrectAnswer.value +=1
    if (quiz.questions.length - 1 === currentQuestionIndex.value) showResult.value = true 
    
    currentQuestionIndex.value++;
}
</script>

<template>
    <div>
        <QuizHeader 
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
        />
        <div>
           <QuestionsVue 
           v-if="!showResult"
           :question="quiz.questions[currentQuestionIndex]"
           @selectedOption="onOptionSelected"/>
            <Result 
                v-else 
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswer="numberOfCorrectAnswer"
                />
        </div>
    </div>
</template>
