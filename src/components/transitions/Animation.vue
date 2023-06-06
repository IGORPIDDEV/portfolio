<template>
  <transition-group @enter="enter" @leave="leave" appear>
    <slot />
  </transition-group>
</template>

<script lang="ts">
import 'animate.css'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Animate',
  props: {
    enterName: {
      type: String,
      default: 'fadeIn'
    },
    leaveName: {
      type: String,
      default: 'fadeOut'
    }
  },
  setup(props) {
    const enter = function (el: HTMLElement, done) {
      console.log('el', el)
      el.classList.add('animate__animated', `animate__${props.enterName}`)
      el.addEventListener('animationend', done)
    }
    const leave = function (el: HTMLElement, done) {
      el.classList.add('animate__animated', `animate__${props.leaveName}`)
      el.addEventListener('animationend', done)
    }
    return {
      enter,
      leave
    }
  }
})
</script>
