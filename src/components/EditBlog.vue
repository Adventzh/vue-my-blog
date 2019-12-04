<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label for>博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label for>博客内容</label>
      <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>
      <div id="checkbox">
        <label for>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label for>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label for>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label for>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories" />
      </div>
      <label for>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>
    <!-- 分割线 -->

    <div v-if="submmited">
      <h3>您的博客发布成功!</h3>
    </div>

    <hr />
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>博客内容：</p>
      <p>{{ blog.content }}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
      <p>作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "add-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["zhanghan", "caijinyang", "zhaochang", "wangpeiwen"],
      submmited: false
    };
  },
  methods: {
      fetchData(){
          this.$axios.get("/posts/" + this.id + ".json")
          .then(response =>{
              this.blog = response.data;
          });
      },
    post: function() {
      this.$axios
        .put("/posts/" + this.id + ".json",this.blog)
        .then((data) => {
          this.submmited = true;
        });
    }
  },
  created() {
      this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
#checkbox label {
  display: inline-block;
  margin-top: 10px;
}
#checkbox input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
