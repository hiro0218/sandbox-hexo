const getTerms = (terms) => {
  const data = [];

  terms.forEach((term) => {
    data.push({
      name: term.name,
      slug: term.slug,
      path: encodeURI(term.path),
    });
  });

  return data;
};

hexo.extend.generator.register('posts', (locals) => {
  const posts = locals.posts;
  const data = [];

  posts.forEach((post) => {
    data.push({
      title: post.title,
      path: post.path,
      permalink: encodeURI(post.permalink),
      date: post.updated.toDate().toISOString(),
      updated: post.date.toDate().toISOString(),
      categories: getTerms(post.categories.data),
      tags: getTerms(post.tags.data),
    });
  });

  return {
    path: 'posts.json',
    data: JSON.stringify(data),
  };
});
