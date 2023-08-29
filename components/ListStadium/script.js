import Pagination from '~/components/Pagination/Pagination.vue';
export default {
  name: 'ListStadium',
  components: {
    Pagination
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 5 // Replace with your total number of pages
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      // Fetch data for the new page or update your content
    }
  }
}
