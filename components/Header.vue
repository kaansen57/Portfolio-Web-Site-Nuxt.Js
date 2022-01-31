<template>
  <div class="header">
    <div class="logo">
      <a href="/"><span> < KaanSen /> </span> </a>

      <!-- Mobile button -->
      <a
        href="#"
        class="mobile-button"
        :class="clicked ? 'mobile-button-open' : ''"
        @click="isClicked()"
      >
        <span></span>
      </a>
    </div>

    <nav class="menu" :class="clicked ? 'mobile-open' : ''">
      <ul>
        <li v-for="menuItem in menuItems">
          <NuxtLink class="li" :to="menuItem.url">{{ menuItem.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
      menuItems: [
        {
          name: 'About',
          url: '/',
        },
        {
          name: 'Skılls',
          url: '/Skills',
        },
        {
          name: 'Portfolıo',
          url: '/Portfolio',
        },
        {
          name: 'Blog',
          url: '/Blog',
        },
      ],
    }
  },
  methods: {
    isClicked() {
      return (this.clicked = !this.clicked)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  @include flexCenter;
  justify-content: space-between;
  padding: 1rem;
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  box-shadow: 0 4px 0 0 rgba(250, 250, 250, 0.7);

  .menu {
    @include flexCenter;
  }

  // Mobile Layout
  @include responsive(small) {
    flex-direction: column;
    height: 100%;
    .menu {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      opacity: 1;
      z-index: -1;

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -10px;
        bottom: -10px;
        left: -20px;
        right: 0;
        background: $primary-100;
        transform-origin: 0 0;
        transform: skew(-14deg) translateX(-120%);
      }

      ul {
        display: none;
      }

      &.mobile-open {
        opacity: 1;
        z-index: 100;
        visibility: visible;
        height: 100vh;
   
        &::before {
          display: inline-block;
          transform: skew(-10deg) translateX(0);
        }

        ul {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-evenly;
          height: 50%;
          transform: skew(-11deg);
          margin-top: 50%;
          .li {
            color: #fff;
          }
        }
      }
    }

    .logo {
      @include flexCenter;
      width: 100%;
      padding: 0 1rem;
      justify-content: space-between;
      margin: 2rem 0;
    }

    // Mobile button icon
    .mobile-button {
      @include flexCenter;
      width: 45px;
      height: 45px;
      flex-direction: column;
      z-index: 999;
      position: relative;

      span {
        display: block;
        border: 2px solid $primary-200;
        background: $primary-300;
        width: 60%;
        margin: 2px 0;
        border-radius: 10px;
        &::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 5%;
          display: block;
          border: 2px solid $primary-200;
          background: $primary-300;
          width: 80%;
          margin: 2px 0;
          border-radius: 10px;
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: 5%;
          display: block;
          border: 2px solid $primary-200;
          background: $primary-300;
          width: 80%;
          margin: 2px 0;
          border-radius: 10px;
        }
      }
    }
    .mobile-button-open {
      span {
        transform: scale(0);
      }
      &::before {
        display: block;
        content: '';
        width: 90%;
        height: 3px;
        background: $text-color-light;
        transform: translateY(5px) rotate(-45deg);
      }
      &::after {
        display: block;
        content: '';
        width: 90%;
        height: 3px;
        background: $text-color-light;
        transform: translateY(-5px) rotate(45deg);
      }
    }
  }
  //mobile layout end

  //  desktop layout start
  .logo {
    outline: none;
    a {
      text-decoration: none;
      color: $text-color-dark;
      font-size: 2rem;
      font-weight: 700;
      span {
        font-family: 'Gloria Hallelujah', cursive, sans-serif;
        color: $primary-200;
      }
    }
  }
}
ul {
  @include flexCenter;
  list-style-type: none;
  li {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      border: 2px solid $primary-200;
      background: $primary-200;
      width: 100%;
      border-radius: 10px;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: transform 300ms ease-in;
    }

    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }
    a {
      text-decoration: none;
      color: $border-color-1;
      transition: color 300ms ease-in-out;
      &:hover {
        color: darken($border-color-1, 30%);
      }
    }
  }
}

//  desktop layout end
</style>
