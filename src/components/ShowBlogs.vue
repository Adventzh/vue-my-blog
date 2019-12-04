<template>
  <div id="show-blogs" v-theme:column="'normal'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search" />
    <div class="single-blog" v-for="blog in filteredBLogs" :key="blog.id">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$axios
      .get("/posts.json")
      .then((data) => {
        // this.blogs = data.body.slice(0, 10);
        return data.data;
      })
      .then((data) => {
        var blogsArray = [];
        for(let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      })
  },
  computed: {
    filteredBLogs: function() {
      return this.blogs.filter(blog => {
        //toLowerCase()实现搜索不区分大小写功能
        return blog.title.match(this.search.toLowerCase());
      });
    }
  },
  //本地
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    },
    theme: {
      bind(el, binding, vnode) {
        if (binding.value == "wide") {
          el.style.maxWidth = "1260px";
        } else if (binding.value == "narrow") {
          el.style.maxWidth = "560px";
        } else if (binding.value == "normal") {
          el.style.maxWidth = "800px";
        }

        if (binding.arg == "column") {
          el.style.background = "#99a5dd";
          el.style.padding = "20px";
        }
      }
    }
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>