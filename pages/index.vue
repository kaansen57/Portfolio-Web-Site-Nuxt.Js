<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="article">
        <h5>HELLO</h5>
        <h1>I'm {{ myData.name }}</h1>
        <h5>
          {{ myData.content }}
        </h5>
        <a href="" class="btn btn-active">Download CV</a>
      </div>
      <div class="img-container">
        <img
          :src="require(`~/assets/img/${myData.imgAttr.img}`)"
          :alt="myData.imgAttr.alt"
        />

        <div class="social-wrapper">
          <span v-for="item in myData.contact">
            <a :href="item.href" target="_blank">
              <i :class="item.icon"></i> <span>{{ item.text }}</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: {
        name: '< Kaan SEN />',
        content: `Hello , I'm Kaan ŞEN. I'm Software Developer. 
          I works technologies vanilla javascript , vue.js , 
          nuxt.js and angular for frontend development, .net core and node.js for backend development.`,
        cvLink: '',
        imgAttr: {
          img: 'photo.png',
          alt: 'Kaan ŞEN',
        },
        contact: [
          {
            href: 'https://www.instagram.com/kaansn57/',
            icon: 'fab fa-instagram',
            text: 'Instagram',
          },
          {
            href: 'https://www.linkedin.com/in/kaansen57/',
            icon: 'fab fa-linkedin',
            text: 'LinkedIn',
          },
          {
            href: 'https://github.com/kaansen57',
            icon: 'fab fa-github',
            text: 'Github',
          },
          {
            href: 'mailto:kaansen57@outlook.com',
            icon: 'far fa-envelope-open',
            text: 'Mail',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;900&display=swap');
.content {
  @include flexCenter;
  justify-content: space-around;
  position: relative;

  @include responsive(medium) {
    @include flexCenter;
    flex-direction: column;
  }

  .article {
    padding: 1.5rem;
    animation: opacityIn 1s;
    @include responsive(medium) {
      @include flexCenter;
      flex-direction: column;
      text-align: center;
    }
    h5 {
      font-size: 1rem;
      color: $text-color-dark;
      margin: 1rem 0;
      max-width: 600px;
      position: relative;
      font-weight: 600;
      line-height: 1.5rem;
    }

    h1 {
      @include responsive(medium) {
        font-size: 1.8rem;
      }

      @include responsive(small) {
        font-size: 1.6rem;
      }
      font-size: 2.5rem;
      color: $text-color-dark;
      padding: 0 1rem;
    }

    a {
      color: $text-color-light;
      text-decoration: none;
    }
  }

  .img-container {
    animation: opacityIn 1s;
    position: relative;
    transform: scale(0.9);
    img {
      @include responsive(small) {
        width: 90%;
      }
      width: 400px;
      height: 100%;
      animation: imageFly infinite 4s;
      position: relative;
      left: 20px;
      filter: drop-shadow(5px 5px 15px $text-color-dark);
    }
  }
}
.social-wrapper {
  display: flex;
  position: absolute;
  left: 25%;
  margin-top: 20px;
  @include responsive(small) {
    left: 20%;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: darken(#979797, 15%);
    padding: 10px;
    font-size: 20px;
    i {
      font-size: 30px;
      @include responsive(small) {
        font-size: 35px;
      }
      // //social media text area show effects
      &:hover + span {
        display: inline;
        color: #333;
        width: max-content;
        opacity: 1;
        @include responsive(small) {
          display: none;
        }
      }
    }

    span {
      display: none;
    }
  }
}
</style>
