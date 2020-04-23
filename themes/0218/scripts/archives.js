hexo.extend.generator.register('archives', site => {
  const posts = site.posts;

  let data = [];
  posts.forEach((post) => {
    data.push({
      title: post.title,
      date: post.date,
      path: post.path
    });
  })

  return {
    path: "data/archives.json",
    data: JSON.stringify(data)
  };
});
