   <script setup>
    // import {defineProps} from 'vue'

    const {question} = defineProps(['question'])
    const emit = defineEmits(["selectedOption"])

   const emitSelectedOption = (isCorrect) => {
    emit('selectedOption', isCorrect)
   }
</script>
   <template>
        <div>
            <div class="question-container">
                <h1 class="question">
                    {{question.text}}
                </h1>
            </div>
            <div class="options-container">
                <div v-for="options in question.options" 
                    :key="options.id" 
                    class="options" 
                    @click="emitSelectedOption(options.isCorrect)
                ">
                    <p class="option-label">{{options.label}}</p>
                    <div  class="option-value">
                        <p class="">{{options.text}}</p>
                    </div>
                </div>    
            </div>
        </div>
    </template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.options {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: coral;
    width: 60px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
} 

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>