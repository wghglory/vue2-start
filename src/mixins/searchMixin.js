// 公共部分可以用 mixin 提取
export default {
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(new RegExp(this.search, 'i'));
      });
    }
  }
};
