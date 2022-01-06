<template>
  <div class="container">
    <Header></Header>
    <h1 class="portfolio-title">My Projects</h1>
    <div class="portfolio-container">
      <div class="portfolio-content" v-for="item in portfolioData">
        <div class="content-header">
          <article>
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
            <span class="badge" v-for="badge in item.badge">
              #{{ badge }}
            </span>
          </article>
        </div>
        <div class="content-img">
          <img :src="require(`~/assets/img/${item.img}`)" :alt="item.title" />
        </div>
        <div class="button-wrapper">
          <a :href="item.liveLink" target="_blank" class="btn btn-active"
            >Live Preview</a
          >
          <a :href="item.githubLink" target="_blank" class="btn">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Portfolio Gallery',
      portfolioData: [
        {
          title: 'Portfolio Web Site',
          content: 'Portfolio Web Site with Vue.JS-Nuxt.JS',
          badge: ['vue.js', 'nuxt.js', 'html5', 'css3', 'sass', 'scss'],
          img: 'portfolio.png',
          liveLink: 'https://kaansen.netlify.app',
          githubLink: 'https://github.com/kaansen57/Portfolio-Web-Site-Nuxt.Js',
        },
        {
          title: 'Frontend Daily',
          content: 'Daily Frontend Challange with SCSS',
          badge: ['sass', 'scss', 'css3'],
          img: 'frontenddaily.png',
          liveLink: 'https://frontenddaily.netlify.com',
          githubLink: 'https://github.com/kaansen57/FrontendDaily',
        },
        {
          title: 'Zingal Son Kuşak',
          content: 'Zingal Son Kuşak Film Web Site',
          badge: ['vue.js', 'html5', 'css3', 'sass', 'scss'],
          img: 'zingalsonkusak.png',
          liveLink: 'https://zingalsonkusak.com',
          githubLink: '#',
        },
        {
          title: 'VueDucts',
          content: 'A simple product sales application prepared with Vue.js',
           badge: ['vue.js', 'html5', 'css3'],
          img: 'vueducts.png',
          liveLink: 'http://vue-products.s3-website.us-east-2.amazonaws.com',
          githubLink: 'https://github.com/kaansen57/VueDucts',
        },
         {
          title: 'Rent A Car Frontend',
          content: 'Rent A Car project with Angular 11',
           badge: ['angular', 'html5', 'css3'],
          img: 'rentacar.png',
          liveLink: '#',
          githubLink: 'https://github.com/kaansen57/RentaCar-Angular',
        },
         {
          title: 'Rent A Car Backend API',
          content: 'Rent a Car Backend Api (.NET Core 3.1)',
           badge: ['.net core', 'csharp','.net'],
          img: 'rentacarapi.png',
          liveLink: '#',
          githubLink: 'https://github.com/kaansen57/RentaCar-Backend',
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-title {
  text-align: center;
  margin: 2rem 0 3rem 0;
  text-transform: uppercase;
}
.portfolio-container {
  animation: opacityIn 1s;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 350px));
  row-gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
  word-break: break-all;
  
  @include responsive(desktop) {
    grid-template-columns: repeat(2, minmax(auto, 350px));
  }

  @include responsive(medium) {
    grid-template-columns: repeat(1, minmax(auto, 350px));
    row-gap: 0;
  }
  .portfolio-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: max-content;
    max-height: 550px;
    border-radius: 40px;
    padding: 30px;
    background: $bg-color;
    box-shadow: 4px 4px 10px 2px #979797;
    transition: transform 0.5s ease;
    transform: scale(.9);
    cursor: pointer;

    @include responsive(small) {
      transform: scale(0.9);
      &:hover {
        transform: scale(1);
      }
    }

    &:hover {
      .content-img {
        img {
          //image slide
          // top: calc(-100vh + 100%);
          // transform: scale(1.1);
        }
      }
    }

    .content-header {
      display: flex;
      height: 200px;
      article {
        h5 {
          font-size: 25px;
        }
        p {
          margin: 15px 0 25px 0;
        }
      }
    }

    .button-wrapper {
      @include flexCenter;
      justify-content: space-evenly;
    }
  }

  .content-img {
    @include flexCenter;
    height: 250px;
    position: relative;
    overflow: hidden;
    img {
      border-radius: 6px;
      margin-top: 25px;
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      z-index: -1;
      transition: all 1s ease;
    }
  }
}

.badge {
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  width: max-content;
  height: 30px;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  color: $text-color-light;
  border-radius: 6px;
  background: $primary-100;
  // margin-top: 10px;
}
</style>
