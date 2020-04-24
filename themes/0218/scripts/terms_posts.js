hexo.extend.generator.register('tags_posts', (locals) => {
  const tags = locals.tags;
  const data = [];

  for (let i = 0; i < tags.length; i++) {
    const tag = tags.data[i];
    const posts = tag.posts;

    data.push({
      name: tag.name,
      slug: tag.slug,
      count: tag.length,
      posts: [],
    });

    for (let j = 0; j < posts.length; j++) {
      const post = posts.data[j];
      data[i].posts.push({
        title: post.title,
        path: encodeURI(post.path),
      });
    }
  }

  return {
    path: 'tags_posts.json',
    data: JSON.stringify(data),
  };
});
