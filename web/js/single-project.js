Vue.use(VueTables.TodoTable);

new Vue({
  el: "#app",
  delimiters: ['${', '}'],
  data: {
    columns: ['id', 'title', 'status', 'updated', 'url'],
    data: project,
    options: {
      headings: {
        id: '#',
        title: 'Title',
        description: 'Description',
        url: 'Edit'
      },
      sortable: ['id', 'title', 'status', 'updated'],
      filterable: ['title', 'status', 'description']
    }

  }
});
