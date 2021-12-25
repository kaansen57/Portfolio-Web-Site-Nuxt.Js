<template>
  <div class="container">
    <Header></Header>
    <h1 class="portfolio-title">My Projects</h1>
    <div class="portfolio-container">
      <div class="portfolio-content" v-for="item in 15">
        <div class="content-header">
          <article>
            <h5>Project1</h5>
            <p>Web DesignWeb Designasdasdasdasdasdasdasdasdasdaa</p>
            <span class="badge">#Javascript</span>
          </article>
        </div>
        <div class="content-img">
          <img src="../assets/img/deneme.png" alt="" />
        </div>
        <div class="button-wrapper">
          <a href="" class="btn btn-active">Live Preview</a>
          <a href="" class="btn">Github</a>
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
    margin: 0.5rem 0;
    transition: transform 0.5s ease;
    transform: scale(1);
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
          top: calc(-100vh + 100%);
        }
      }
    }

    .content-header {
      display: flex;
      article {
        h5 {
          font-size: 25px;
        }
        p {
          margin: 15px 0;
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
      margin-top: 25px;
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      z-index: -1;
      transition: all 2s ease;
    }
  }
}

.badge {
  display: block;
  width: max-content;
  height: 30px;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  color: $text-color-light;
  border-radius: 6px;
  background: $primary-100;
  margin-top: 10px;
}
</style>
