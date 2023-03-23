const index = new JekyllSearch({
  jsonFile: '{{ site.baseurl }}/search.json',
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  limit: 10,
  fuzzy: true
});
