hexo.extend.generator.register('categories', (locals) => {
  const categories = locals.categories;
  const data = [];

  categories.forEach((category) => {
    data.push({
      name: category.name,
      slug: category.slug,
      path: encodeURI(category.path),
      count: category.length,
    });
  });

  return {
    path: 'categories.json',
    data: JSON.stringify(data),
  };
});
