SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/assets/js/data/search.json', // ← ubah dari /assets/js/data/search.json
  searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
  noResultsText: 'Tidak ditemukan.',
  limit: 10,
});
