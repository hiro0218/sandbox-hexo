const getTermsPosts = (terms) => {
  const data = [];

  for (let i = 0; i < terms.length; i++) {
    const term = terms.data[i];
    const posts = term.posts;

    data.push({
      name: term.name,
      slug: term.slug,
      count: term.length,
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

  return data;
};

hexo.extend.generator.register('tags_posts', (locals) => {
  const tags = locals.tags;
  const data = getTermsPosts(tags);

  return {
    path: 'tags_posts.json',
    data: JSON.stringify(data),
  };
});

hexo.extend.generator.register('categories_posts', (locals) => {
  const categories = locals.categories;
  const data = getTermsPosts(categories);

  return {
    path: 'categories_posts.json',
    data: JSON.stringify(data),
  };
});
