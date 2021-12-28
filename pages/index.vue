<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="article">
        <h5>HELLO</h5>
        <h1>I'm < Kaan SEN /></h1>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sed
          ea ullam? Tenetur animi nisi possimus, optio iste assumenda, nobis
          quaerat nemo, commodi magnam eveniet voluptate cum velit eaque omnis?
        </h5>
        <a href="" class="btn btn-active">Download CV</a>
      </div>
      <div class="img-container">
        <img src="../assets/img/photo.png" alt="" />

        <div class="social-wrapper">
          <a href="https://www.instagram.com/kaansn57/">
            <i class="fab fa-instagram"></i> <span>Instagram</span></a
          >
          <a href="https://www.linkedin.com/in/kaansen57/"> <i class="fab fa-linkedin"></i> <span>LinkedIn</span></a>
          <a href="https://github.com/kaansen57"> <i class="fab fa-github"></i> <span>Github</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;900&display=swap');
.content {
  @include flexCenter;
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
    display: grid;
    justify-content: center;
    align-items: flex-start;
    border-radius: 50%;
    // z-index: -1;
    transform: scale(0.9);
    img {
      @include responsive(small) {
        width: 100vw;
        height: 100%;
      }
      max-width: 400px;
      height: 100%;
      animation: imageFly infinite 4s;
      position: relative;
      left: 20px;
      filter:  drop-shadow(5px 5px 15px $text-color-dark);
    }
  }
}
.social-wrapper {
  text-align: center;
  margin-top: 20px;
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
    }
    &:hover {
      color: #333;
      span {
        width: 90px;
        opacity: 1;
      }
    }
    span {
      display: inline-flex;
      width: 0%;
      opacity: 0;
      transition: width 1s, opacity 1.2s;
      @include responsive(small) {
        display: none;
      }
    }
  }
}
</style>
