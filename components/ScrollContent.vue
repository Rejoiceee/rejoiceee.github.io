<template>
  <div>
    <div class="sections">
      <div class="section section1">
        scroll
      </div>

      <div class="section section2">
        <span>Section 2 Content</span>
      </div>

      <div class="section section3">
        <div class="scroll-wrapper">
          <div ref="scrollContainer" class="scroll-container">
            <div ref="scrollContent" class="scroll-content">
              <div
                  v-for="(item, i) in items"
                  :key="i"
                  class="item"
                  ref="itemRefs"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section4">
        Section 4 Content
      </div>

      <div class="section section5">
        <slot>
          <TestContent />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const items = ref([
  'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
  'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
]);

// refs
const scrollContainer = ref<HTMLElement | null>(null);
const scrollContent = ref<HTMLElement | null>(null);
const itemRefs = ref<HTMLElement[]>([]);
const sectionRefs = ref<HTMLElement[]>([]);

// 🔥 스크롤 핸들러를 최상위 스코프에서 선언 (초기값 null)
let scrollHandler: ((this: Window, ev: Event) => any) | null = null;

// CSS --scroll 업데이트
const handleScroll = () => {
  document.body.style.setProperty(
      '--scroll',
      (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toFixed(2)
  );
};

// 언마운트 시 이벤트 제거
onBeforeUnmount(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
  }
  window.removeEventListener('scroll', handleScroll);
});

onMounted(async () => {
  await nextTick();

  const sections = sectionRefs.value;
  const sContainer = scrollContainer.value;
  const sContent = scrollContent.value;

  if (!sContainer || !sContent || sections.length < 3) return;

  const topCont = sections[2];
  const topContHeight = topCont.offsetTop;
  const maxScroll = topContHeight - sContainer.scrollWidth / 2;

  topCont.style.height = sContainer.scrollWidth + 'px';

  // 🔥 여기에서 scrollHandler "정의"
  scrollHandler = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta = scrollTop - topContHeight;
    let scaleFactor = 0.8;

    const oneThirdScroll = maxScroll / 3;

    if (scrollDelta < oneThirdScroll) {
      scaleFactor = 0.8 + (scrollDelta / oneThirdScroll) * 0.7;
    } else if (scrollDelta < 2 * oneThirdScroll) {
      scaleFactor = 1.5;
    } else {
      scaleFactor = 1.5 - ((scrollDelta - 2 * oneThirdScroll) / oneThirdScroll) * 0.7;
    }

    if (scrollDelta - sContainer.scrollWidth - window.innerWidth > 0) {
      sContent.style.transform = `translateX(0px)`;
    } else {
      sContent.style.transform = `translateX(${-scrollDelta}px)`;
    }

    itemRefs.value.forEach(el => {
      el.style.transform = `scale(${scaleFactor})`;
    });
  };

  // 이벤트 등록
  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('scroll', handleScroll);

  // Intersection Observer
  const observeIntersection = (
      targets: HTMLElement[],
      options = { root: null, rootMargin: '10px', threshold: 0.2 }
  ) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('current', entry.isIntersecting);
      });
    }, options);

    targets.forEach(target => observer.observe(target));
  };

  observeIntersection(sections);
});
</script>


