<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
        </li>
        <li>
          <router-link to="/add" exact>写博客</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";

export default {
  name: "app"
  // components: {
  //   AddBlog,
  //   ShowBlogs
  // }
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app{
  padding-bottom: 150px;
  background-color: rgb(250, 212, 212);
}
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav {
  background: rgb(253, 201, 122);
  padding: 30px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444;
}
</style>
