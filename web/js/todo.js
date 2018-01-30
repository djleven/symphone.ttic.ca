Vue.use(VueTables.TodoTable);

new Vue({
  el: "#app",
  delimiters: ['${', '}'],
  data: {
    columns: ['id', 'title', 'status', 'project', 'edit', 'delete'],
    data: todo,
    options: {
      headings: {
        id: '#',
        title: 'Title',
        description: 'Description'
      },
      sortable: ['id', 'title', 'status', 'project', 'updated'],
      filterable: ['title', 'status', 'description']
    }

  }
});
