<template>
  <div class="a-container">
    <aside class="a-sidebar">
      <h5 class="title">Admin Panel</h5>
      <ul>
        <li v-for="item in 6">
          <a href="">
            <i class="fas fa-tachometer-alt"></i>
            Dashboard
          </a>
        </li>
      </ul>
    </aside>
    <header>
      <nav class="search">
        <input type="text" class="search-input" />
      </nav>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  background: $black-300;
  margin: 0;
  padding: 0;
}
.a-container {
  display: flex;

  .a-sidebar {
    width: 280px;
    height: 100vh;
    background-image: linear-gradient($purple-100, $purple-200);
    padding: 120px 10px 29px 41px;

    .title {
      font-size: 18px;
      color: $white-100;
      text-transform: uppercase;
    }
  }

  .search {
       width: 100%;
    input[type="text"] {
        display: inline-block;
      width: 100%;
      outline: none;
      border: 1px solid #979797;
      height: 80px;
    }
  }
}

ul {
  list-style-type: none;
  li {
    padding: 15px 0;
    margin-top: 10px;
    a {
      &:hover {
        opacity: 1;
        font-weight: 700;
      }
      i {
        margin-right: 5px;
      }
      text-decoration: none;
      color: $white-100;
      font-size: 15px;
      opacity: 0.8;
    }
  }
}
</style>
