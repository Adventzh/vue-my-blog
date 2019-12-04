<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>作者：{{ blog.author }}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{ category }}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <button><router-link :to="'/edit/' + id">编辑</router-link></button>
  </div>
</template>
<script>

export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$axios
      .get("/posts/" + this.id + ".json")
      .then((data) => {
        this.blog = data.data;
      });
  },
  methods: {
    deleteSingleBlog(){
      this.$axios.delete("/posts/" + this.id + ".json")
      .then(response =>{
        this.$router.push({path: "/"})
      });
    }
  },
};
</script>
<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
button{
  width: 100px;
  height: 30px;
  margin-right: 10px; 
  color: #fff; 
  background-color: rgb(236, 76, 76);
}
button a{
  color: #fff;
  text-decoration: none;
}
</style>
