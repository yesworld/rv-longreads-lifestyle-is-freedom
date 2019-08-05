<template lang="pug">
  v-layout.footer.pt-3
    v-flex
      v-container(grid-list-xl)
        v-layout(wrap row)

          v-flex.hidden-sm-and-down.box-logo.py-7(xs12 sm3 md4)
            div
              img.logo.mr-3(:src="logo" width=80)
            p.my-0 Фотоконкурс
            p.my-0 «Образ жизни - свобода»
            p.my-0 © 2019г

          v-flex(xs12 sm6 md4)
            v-list.transparent(two-line)
              v-list-item(v-for="item in contacts" :key="item.title")
                v-list-item-avatar(color='secondary')
                  v-icon.elevation-4(dark v-text="item.icon")
                v-list-item-content
                  v-list-item-title {{item.title}}
                  v-list-item-subtitle {{item.subtitle}}

          v-flex.py-7(xs12 sm6 md4)
            h5.mb-5 Мы в социальных сетях:
            // icon vk
            v-btn.mx-2(
              fab dark small color="secondary" target="_blank" rel="nofollow noindex noopener"
              href="http://vk.com/realnoevremya_official"
              )
              svg(xmlns='http://www.w3.org/2000/svg', width='20pt', viewBox='0 0 39 23', version='1.1')
                g#surface1
                  path(d='M 20.128906 0.347656 C 21.484375 0.347656 22.171875 0.65625 22.492188 1.074219 C 22.492188 1.171875 22.667969 1.445312 22.761719 1.671875 C 22.933594 3.328125 22.933594 4.996094 22.761719 6.652344 C 22.640625 7.921875 22.707031 9.195312 22.953125 10.445312 C 23.175781 11.039062 23.71875 11.363281 24.164062 11.089844 C 24.972656 10.46875 25.664062 9.710938 26.207031 8.847656 C 27.578125 6.828125 28.726562 4.664062 29.636719 2.398438 C 29.765625 1.976562 30.058594 1.625 30.449219 1.429688 C 30.546875 1.429688 32.269531 1.429688 34.390625 1.429688 L 38.089844 1.429688 L 38.410156 1.574219 C 38.769531 1.699219 38.996094 2.0625 38.953125 2.445312 C 38.539062 4.136719 37.753906 5.714844 36.65625 7.058594 C 36.464844 7.332031 35.699219 8.332031 34.980469 9.296875 C 34.15625 10.203125 33.417969 11.1875 32.777344 12.234375 C 32.472656 12.828125 32.558594 13.554688 33.003906 14.054688 L 34.597656 15.667969 C 35.96875 16.882812 37.199219 18.253906 38.265625 19.75 C 38.710938 20.269531 38.964844 20.929688 38.984375 21.621094 C 38.878906 21.960938 38.636719 22.242188 38.3125 22.394531 C 37.945312 22.617188 37.355469 22.617188 34.246094 22.667969 L 31.214844 22.667969 L 30.753906 22.523438 C 29.492188 22.117188 28.679688 21.378906 26.828125 19.296875 C 25.792969 18.054688 25.011719 17.476562 24.46875 17.476562 C 23.925781 17.476562 23.382812 18.105469 23.113281 18.925781 C 22.910156 19.5625 22.804688 20.226562 22.792969 20.894531 C 22.792969 21.988281 22.617188 22.265625 21.949219 22.507812 C 20.5625 22.632812 19.171875 22.632812 17.785156 22.507812 C 16.132812 22.332031 14.539062 21.777344 13.128906 20.894531 C 11.210938 19.898438 9.527344 18.496094 8.199219 16.78125 C 5.738281 13.679688 3.632812 10.308594 1.914062 6.734375 C 1.148438 5.121094 0.191406 3.027344 0.0625 2.527344 C -0.03125 2.308594 -0.0273438 2.058594 0.078125 1.847656 C 0.183594 1.632812 0.375 1.480469 0.605469 1.429688 C 0.78125 1.429688 1.722656 1.429688 3.90625 1.332031 L 6.921875 1.332031 L 7.289062 1.476562 C 7.878906 1.703125 8.101562 1.976562 8.46875 2.945312 C 8.835938 3.914062 10.542969 7.28125 11.132812 8.28125 C 11.566406 9.148438 12.132812 9.9375 12.808594 10.621094 C 13.445312 11.265625 13.71875 11.394531 14.164062 11.347656 C 14.609375 11.296875 14.609375 11.265625 14.882812 10.71875 C 15.453125 8.375 15.5 5.9375 15.027344 3.574219 C 14.707031 2.621094 14.308594 2.25 13.078125 1.960938 C 12.855469 1.960938 12.855469 1.832031 13.078125 1.542969 C 13.574219 0.863281 14.386719 0.542969 16.015625 0.414062 C 17.402344 0.316406 18.792969 0.316406 20.179688 0.414062 Z M 20.128906 0.347656 ')

            // icon fb
            v-btn.mx-2(
              fab dark small color="secondary" target="_blank" rel="nofollow noindex noopener"
              href="https://www.facebook.com/realnoevremya"
              )
              svg(xmlns='http://www.w3.org/2000/svg', width='11', height='20.03', viewBox='0 0 11 20.03')
                path.cls-1(d='M25.5,11.76l0,1.25h-1.7c-2,0-1.85,0-2.05.34s-.22.46-.22,1.88V17h4v3h-4V30h-4V20h-3V17h3V15.83a6.46,6.46,0,0,1,.23-2.33A4.78,4.78,0,0,1,21,10.15,10.21,10.21,0,0,1,23.71,10l1.79,0v1.77Z', transform='translate(-14.5 -9.99)')

            // icon instagram
            v-btn.mx-2(
              fab dark small color="secondary" target="_blank" rel="nofollow noindex noopener"
              href="https://www.instagram.com/realnoevremya.ru/?hl=ru"
              )
              svg(xmlns='http://www.w3.org/2000/svg', width='20.45', height='20.58', viewBox='0 0 20.45 20.58')
                path.cls-1(d='M25.43,13.61a.91.91,0,0,0-.9.91.91.91,0,1,0,1.81,0A.92.92,0,0,0,25.43,13.61Z', transform='translate(-9.78 -9.71)')
                path.cls-1(d='M24,9.81c-2.32-.08-8.19-.28-10.06.31-2.58.8-4,2.9-4.06,6,0,2.09-.22,8.13.23,9.72.71,2.58,2.86,4.14,5.9,4.28,6.77.28,14,1.13,14.11-6.38C30.2,17.3,31.42,10.07,24,9.81Zm4.22,12.87c0,6.75-3,5.5-10.8,5.53-6.88,0-5.69-2.92-5.72-11.06,0-3.09.37-4.56,2.89-5.32,1.59-.49,6-.2,8-.2C29.57,11.6,28.13,15.2,28.18,22.68Z', transform='translate(-9.78 -9.71)')
                path.cls-1(d='M18.49,15c-6.95,2.15-3.35,11.85,3.09,9.78S25.26,12.93,18.49,15Zm2.44,8.11a3.34,3.34,0,1,1-1.79-6.44C23.28,15.45,25.21,22,20.93,23.14Z', transform='translate(-9.78 -9.71)')

            // icon youtube
            v-btn.mx-2(
              fab dark small color="secondary" target="_blank" rel="nofollow noindex noopener"
              href="https://www.youtube.com/channel/UCvH2Z058LcWD3TwLGPHx5SA"
              )
              svg(xmlns='http://www.w3.org/2000/svg', width='18.44', height='13.06', viewBox='0 0 18.44 13.06')
                path.cls-1(d='M29,16.37c-.46-2.9-2-2.7-4.91-2.81-2.69-.09-5.24-.14-7.94,0s-4.64-.11-5.15,2.55A34,34,0,0,0,11,24c.51,2.55,2.52,2.41,5.15,2.5s5.31.08,7.94,0c2.89-.12,4.48.11,4.91-2.81A31.65,31.65,0,0,0,29,16.37ZM18,22.55V17.41L23,20Z', transform='translate(-10.78 -13.47)')

            v-layout.hidden-md-and-up.pt-5
              v-flex.box-logo
                div
                  img.logo.mr-3(:src="logo" width=80)
                p.my-0 Фотоконкурс
                p.my-0 «Образ жизни - свобода»
                p.my-0 © 2019г
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContactsInfo from '@/data/contacts'

@Component
export default class TheFooter extends Vue {
  public logo: string = require('@/assets/img/logo.svg')
  public contacts = ContactsInfo
}
</script>

<style lang="scss">
.footer {
  .container {
    border-top: 3px solid #7adcff;
  }

  h5 {
    font-size: 16px;
  }

  svg {
    fill: #fff;
  }

  .box-logo {
    > div {
      position: relative;

      img {
        float: left;
      }

      &:after {
        content: '16+';
        position: absolute;
        left: 0;
        top: 40px;
      }
    }
    /*@media (max-width: 600px) {*/
    /*  color: red;*/
    /*}*/
  }
}
</style>
