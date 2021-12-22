<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="article">
        <h5>HELLO</h5>
        <h1>I'm Kaan ŞEN</h1>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sed
          ea ullam? Tenetur animi nisi possimus, optio iste assumenda, nobis
          quaerat nemo, commodi magnam eveniet voluptate cum velit eaque omnis?
        </h5>
        <a href="" class="btn btn-active">Download CV</a>
      </div>
      <div class="img-container">
        <img src="../assets/img/photo.png" alt="" />
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
  @include responsive(medium) {
    @include flexCenter;
    flex-direction: column;
  }

  .article {
    padding: 1.5rem;

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
    display: grid;
    justify-content: center;
    align-items: flex-start;

    z-index: -1;
    transform: scale(0.9);
    img {
      @include responsive(small) {
        width: 100vw;
        height: 100%;
      }
      max-width: 500px;
      height: 100%;
      animation: imageFly infinite 4s;
    }
  }
}


</style>
