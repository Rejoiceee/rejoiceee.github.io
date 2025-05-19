<template>
  <div>
    <div class="sections">
      <div class="section section1" ref="sections">
        Kim sumin Portfolio
      </div>
      <div class="section section2" ref="sections"><span>Section 2 Content</span></div>
      <div class="section section3" ref="sections">
        <div class="scroll-wrapper">
          <div class="scroll-container" ref="scrollContainer">
            <div class="scroll-content" ref="scrollContent">
              <div v-for="item in items" :key="item" class="item" ref="items">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section4" ref="sections">Section 4 Content</div>
      <div class="section section5" ref="sections">
        <slot>
          <TestContent />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'ScrollContent',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']
    };
  },
  async mounted() {
    await nextTick(); // Ensure DOM updates are completed

    const sections = Array.from(document.querySelectorAll('.section'));
    const scrollContainer = this.$refs.scrollContainer;
    const scrollContent = this.$refs.scrollContent;
    const items = Array.from(this.$refs.items || []);

    const topCont = sections[2]; // section3
    if (!topCont) {
      console.error('Top container (section3) not found');
      return;
    }

    const topContHeight = sections[2].offsetTop;
    const maxScroll = topContHeight - scrollContainer.scrollWidth/2;
    topCont.style.height = scrollContainer.scrollWidth + 'px';

    window.addEventListener('scroll', this.handleScroll);

    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      let scrollDelta = scrollTop - topContHeight;
      let scaleFactor = 0.8; // 기본 값 설정

      const oneThirdScroll = maxScroll / 3; // 스크롤 총 길이의 1/3

      if (scrollDelta < oneThirdScroll) {
        // 첫 1/3 구간: scaleFactor가 0.8에서 1.5로 증가
        scaleFactor = 0.8 + (scrollDelta / oneThirdScroll) * 0.7;
      } else if (scrollDelta < 2 * oneThirdScroll) {
        // 중간 1/3 구간: scaleFactor가 1.5로 유지
        scaleFactor = 1.5;
      } else {
        // 마지막 1/3 구간: scaleFactor가 1.5에서 0.8로 감소
        scaleFactor = 1.5 - ((scrollDelta - 2 * oneThirdScroll) / oneThirdScroll) * 0.7;
      }

      scrollContent.style.transform = scrollDelta - scrollContainer.scrollWidth - window.clientWidth > 0 ? 0 : `translateX(${-scrollDelta}px)`;

      items.forEach(item => {
        item.style.transform = `scale(${scaleFactor})`;
      });
    });

    const observeIntersection = (targets, options = { root: null, rootMargin: "10px", threshold: 0.2 }) => {
      const targetsArray = Array.isArray(targets) ? targets : Array.from(targets);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            //const index = targetsArray.indexOf(entry.target);
            //console.log(`Index of the target element:`, index);
            entry.target.classList.add('current');
          } else {
            entry.target.classList.remove('current');
          }
        });
      }, options);

      targetsArray.forEach(target => observer.observe(target));
    }

    observeIntersection(sections);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      document.body.style.setProperty('--scroll', (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toFixed(2));
    }
  }
};
</script>
