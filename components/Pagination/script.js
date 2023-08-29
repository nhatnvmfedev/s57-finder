export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    totalPages: Number
  },
  methods: {
    changePage(page) {
      this.$emit('page-change', page);
    }
  }
}
