<template>
  <div class="container">
    <Header></Header>
    <main>
      <div class="title">
        <h1>My Skılls</h1>
      </div>
      <div class="skill-container">
        <div v-for="item in skills">
          <label> {{ item.skillName }} </label>
          <div class="progress">
            <div class="progress-value" :style="{ width: item.value + '%' }">
              <!-- <div class="progress-value" :style="{ width: item.value + '%' , background:item.color}"> -->
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Skills',
      skills: [
        { skillName: 'Javascript', value: 70, color: '#FFE300' },
        { skillName: 'Vue', value: 70, color: '#00C675' },
        { skillName: 'Angular', value: 70, color: '#CD1818' },
        { skillName: 'Html', value: 90, color: '#FF5403' },
        { skillName: 'Css', value: 80, color: '#2F86A6' },
        { skillName: 'Scss', value: 70, color: '#C85C5C' },
        { skillName: '.Net', value: 70, color: '#544179' },
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
main {
  @include flexCenter;
  flex-direction: column;
}
.title{
  width: 100%;
  @include flexCenter;
  flex-direction: column;
  margin:2rem 0;
   text-transform: uppercase;
 
}
h1 {
  text-align: center;
  position: relative;
  color: #333;
}

.skill-container {
  animation: opacityIn 1s;
  margin: 30px 0;
  border: 1px solid #979797;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 2rem;
  box-shadow: 10px 40px 50px -10px rgba(0,0,0,0.5);
  transition: transform .5s ease;
  &:hover{
    transform: skewY(-1deg);
  }
  label {
    font-weight: 700;
    font-size: 1.2rem;
    color: #333;
  }
  .progress {
    margin: 8px 0 20px 0;
    width: 100%;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    border-radius: 10px;
    padding: 2px;
    text-align: center;

    & > .progress-value {
      height: 100%;
      background: $primary-100;
      background: repeating-linear-gradient(
        -45deg,
        $primary-100,
        $primary-100 10px,
        $primary-200 10px,
        $primary-200 20px
      );
      color: #fff;
      -webkit-text-stroke: 1px black;
      font-weight: 900;
      font-size: 1.1rem;
      border-radius: 10px;
    }
  }
}
</style>
