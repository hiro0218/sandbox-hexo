hexo.extend.generator.register('tags', (locals) => {
  const tags = locals.tags;
  const data = [];

  tags.forEach((tag) => {
    data.push({
      name: tag.name,
      slug: tag.slug,
      path: encodeURI(tag.path),
      count: tag.length,
    });
  });

  return {
    path: 'tags.json',
    data: JSON.stringify(data),
  };
});
