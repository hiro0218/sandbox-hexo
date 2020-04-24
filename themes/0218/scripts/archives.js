hexo.extend.generator.register('archives', (locals) => {
  const posts = locals.posts;
  const data = [];

  posts.forEach((post) => {
    data.push({
      title: post.title,
      date: post.date,
      path: post.path,
    });
  });

  return {
    path: 'archives.json',
    data: JSON.stringify(data),
  };
});
