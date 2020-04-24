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

hexo.extend.generator.register('categories_posts', (locals) => {
  const categories = locals.categories;
  const data = [];

  for (let i = 0; i < categories.length; i++) {
    const category = categories.data[i];
    const posts = category.posts;

    data.push({
      name: category.name,
      slug: category.slug,
      count: category.length,
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
    path: 'categories_posts.json',
    data: JSON.stringify(data),
  };
});
