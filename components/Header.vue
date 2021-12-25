<template>
  <div class="header">
    <div class="logo">
      <a href="/"> Kaan <span>SEN</span> </a>

      <!-- Mobile button -->
      <a
        href="#"
        class="mobile-button"
        :class="clicked ? 'mobile-button-open' : ''"
        @click="isClicked()"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <nav class="menu" :class="clicked ? 'mobile-open' : ''">
    
      <ul>
        <li>
          <a href="#"> <NuxtLink to="/">About</NuxtLink></a>
        </li>
        <li>
          <a href="#"> <NuxtLink to="/Skills">Skılls</NuxtLink></a>
        </li>
        <li>
          <a href="#"> <NuxtLink to="/Portfolio">Portfolıo</NuxtLink></a>
        </li>
        <li>
          <a href="#"> <NuxtLink to="/Blog">Blog</NuxtLink></a>
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
    }
  },
  methods: {
    isClicked() {
      console.log(this.clicked)
      return (this.clicked = !this.clicked)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  @include flexCenter;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  height: 100px;
  box-shadow: 0px 4px 0 0px #fafafa;

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
      visibility: hidden;

      ul {
        display: none;
      }

      &::before {
        content: '';
        position: absolute;
        top: -10px;
        bottom: -10px;
        left: -20px;
        right: 0;
        background: $primary-100;
        transform-origin: 0 0;
        transform: skew(-14deg) translateX(-120%);
        transition: all 0.275s 0.1s 0;
      }

      &.mobile-open {
        opacity: 1;
        z-index: 100;
        visibility: visible;
        height: 100vh;

        &::before {
          display: block;
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

          li {
            a {
              color: #fff;
            }
          }
        }
      }
    }

    // position: relative;
    .logo {
      @include flexCenter;
      width: 100%;
      padding: 0 1rem;
      justify-content: space-between;
      margin-bottom: 2rem;
    }

    .mobile-button {
      @include flexCenter;
      flex-direction: column;
      border-radius: 3px;
      border: 2px solid $primary-300;
      z-index: 999;
      span {
        transition: all 0.3s ease;
        display: block;
        border: 2px solid $primary-200;
        background: $primary-300;
        width: 80%;
        margin: 2px 0;
      }
    }
  }

  .mobile-button {
    width: 45px;
    height: 45px;
    background: #fff;
  }
  .mobile-button-open {
    // transition: all 0.3s ease;
    // span {
    //   display: none;
    // }
    // &::before {
    //   display: block;
    //   content: '';
    //   width: 90%;
    //   height: 3px;
    //   background: $primary-200;
    //   transform: rotate(-45deg);
    // }
    // &::after {
    //   display: block;
    //   content: '';
    //   width: 90%;
    //   height: 3px;
    //   background: $primary-100;
    //   margin: -3px;
    //   transform: rotate(45deg);
    // }
  }
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
  // @include responsive(small) {
  //   flex-direction: column;
  // }
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
</style>
