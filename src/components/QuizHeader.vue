<script setup>
    // import { defineProps } from 'vue';

    const {
        questionStatus,
        barPercentage
        } = defineProps([
            "questionStatus", 
            "barPercentage"
        ])

    console.log(barPercentage)
</script>

<template>
    <div>
        
        <header>
            <h4>Question {{questionStatus}}</h4>
            <div class="bar">
                <div class="completion" :style="{width: barPercentage}">
        
                </div>
            </div>
        </header>
    </div>
</template>

<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    font-size: 30px;
}

header .bar {
    width: 300px;
    height: 50px;
    border: 3px solid coral;
}

header .completion {
    height: 100%;
    width: 0%;
    background-color: coral;
}
</style>