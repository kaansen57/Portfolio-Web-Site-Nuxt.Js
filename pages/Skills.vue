<template>
  <div class="container">
    <Header></Header>
    <main>
      <div class="title">
        <h1>My Skılls</h1>
      </div>
      <div class="skill-container">
        <div
          class="skill-card"
          v-for="skill in skills"
          :style="{ '--bgColor': skill.color }"
        >
          <span
            class="skill-circle-border"
            :style="{ borderColor: skill.color, '--bgColor': skill.color }"
          >
            <i :class="skill.icon" :style="{ color: skill.color }"></i>
          </span>
          <span class="skill-card-title" :style="{ background: skill.color }">
            <h4>{{ skill.skillName.toUpperCase() }}</h4>
          </span>
          <hr />

          <div class="language-ratio">
            <h4 class="language-ratio-title">{{ skill.value }}%</h4>
            <svg>
              <circle cx="30" cy="30" r="30"></circle>
              <circle
                cx="30"
                cy="30"
                r="30"
                :style="{
                  '--strokeColor': skill.color,
                  '--strokeWidth': skill.value,
                }"
              ></circle>
            </svg>
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
        {
          skillName: 'Javascript',
          value: 85,
          color: '#FFE300',
          icon: 'fab fa-js-square',
        },
        { skillName: 'Vue', value: 80, color: '#00C675', icon: 'fab fa-vuejs' },
        { skillName: 'Nuxt', value: 70, color: '#00C675', icon: 'nuxt' },
        {
          skillName: 'Angular',
          value: 70,
          color: '#CD1818',
          icon: 'fab fa-angular',
        },
        {
          skillName: 'Typescript',
          value: 70,
          color: '#2B6CBF',
          icon: 'typescript',
        },
        {
          skillName: 'Html5',
          value: 90,
          color: '#FF5403',
          icon: 'fab fa-html5',
        },
        {
          skillName: 'Css3',
          value: 80,
          color: '#2F86A6',
          icon: 'fab fa-css3-alt',
        },
        { skillName: 'Scss', value: 75, color: '#C85C5C', icon: 'fab fa-sass' },
        { skillName: '.Net', value: 75, color: '#544179', icon: 'net' },
        { skillName: 'Gulp', value: 75, color: '#DA4648', icon: 'fab fa-gulp' },
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
.title {
  width: 100%;
  @include flexCenter;
  flex-direction: column;
  margin: 2rem 0;
  text-transform: uppercase;
}
h1 {
  text-align: center;
  position: relative;
  color: #333;
}

.skill-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 195px;
    height: 310px;
    border: 1px solid $border-color-1;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 1rem;
    cursor: pointer;
    &:hover {
      border: 3px solid var(--bgColor);
    }
    .skill-circle-border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      border-radius: 150px;
      border: 3px solid transparent;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 110px;
        height: 110px;
        right: -5px;
        top: -5px;
        border-radius: 150px;
        background: var(--bgColor);
        opacity: 0.1;
      }
      i {
        font-size: 70px;
      }
    }

    .skill-card-title {
      display: flex;
      width: max-content;
      height: 40px;
      justify-content: center;
      align-items: center;
      padding: 1rem 1.5rem;
      margin-top: 1.5rem;
      border-radius: 10px;
      color: $text-color-light;
    }
    hr {
      margin: 1.5rem 0 0.5rem 0;
      width: 90%;
      border: 1px solid $border-color-1;
      background-color: $border-color-1;
    }
    .language-ratio {
      width: 70px;
      height: 70px;
      position: relative;

      .language-ratio-title {
        position: absolute;
        z-index: 99;
        left: 30%;
        top: 35%;
      }
      svg {
        position: relative;
        width: 70px;
        height: 70px;
        circle {
          width: 70px;
          height: 70px;
          fill: none;
          stroke-width: 7;
          stroke: #333;
          transform: translate(5px, 5px);
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          stroke-linecap: round;
        }
        circle:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: lighten($border-color-1, 20%);
        }
        circle:nth-child(2) {
          stroke-dashoffset: calc(240 - (190 * var(--strokeWidth)) / 100);
          stroke: var(--strokeColor);
        }
      }
    }
  }
}
//card background icons
.typescript {
  display: inline-block;
  width: 80px;
  height: 80px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHg9IjYiIHk9IjYiIGZpbGw9IiMxOTc2ZDIiPjwvcmVjdD48cG9seWdvbiBmaWxsPSIjZmZmIiBwb2ludHM9IjI3LjQ5LDIyIDE0LjIyNywyMiAxNC4yMjcsMjUuMjY0IDE4Ljk4NCwyNS4yNjQgMTguOTg0LDQwIDIyLjc1Myw0MCAyMi43NTMsMjUuMjY0IDI3LjQ5LDI1LjI2NCI+PC9wb2x5Z29uPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zOS4xOTQsMjYuMDg0YzAsMC0xLjc4Ny0xLjE5Mi0zLjgwNy0xLjE5MnMtMi43NDcsMC45Ni0yLjc0NywxLjk4NiBjMCwyLjY0OCw3LjM4MSwyLjM4Myw3LjM4MSw3LjcxMmMwLDguMjA5LTExLjI1NCw0LjU2OC0xMS4yNTQsNC41NjhWMzUuMjJjMCwwLDIuMTUyLDEuNjIyLDQuNzMzLDEuNjIyczIuNDgzLTEuNjg4LDIuNDgzLTEuOTIgYzAtMi40NDktNy4zMTUtMi40NDktNy4zMTUtNy44NzhjMC03LjM4MSwxMC42NTgtNC40NjksMTAuNjU4LTQuNDY5TDM5LjE5NCwyNi4wODR6Ij48L3BhdGg+PC9zdmc+')
    center center no-repeat;
  background-size: 100%;
}
.net {
  display: inline-block;
  width: 80px;
  height: 80px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png') center center ;
  background-size: 100%;
}
.nuxt {
  display: inline-block;
  width: 80px;
  height: 80px;
  background: url('data:image/png;base64,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')
    center center no-repeat;
  background-size: 100%;
}
</style>
