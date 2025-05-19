<template>
    <nav class="nav" ref="nav">
        <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
            <li><a href="#section4">Section 4</a></li>
            <li><a href="#section5">Section 5</a></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    const sections = Array.from(document.querySelectorAll('.section')); 
    const phaseNav = document.querySelector('.nav');
    const phaseButtons = phaseNav.querySelectorAll('li a');

    phaseNav.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName !== 'A') return;

        const targetIndex = Array.from(phaseButtons).indexOf(target);
        sections[targetIndex].scrollIntoView({
            block: 'center',
            behavior: 'smooth',
        });
    });
})
</script>  