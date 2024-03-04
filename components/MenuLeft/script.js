export default {
  name: 'MenuLeft',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Trang chủ', icon: 'mdi-home-city' },
        { title: 'Danh sách sân bóng', icon: 'fa-futbol' },
        { title: 'Yêu thích', icon: 'fa-bookmark' },
        { title: 'Đã đặt', icon: 'fa-list-check' },
        { title: 'Trang của tôi', icon: 'mdi-account' },
      ],
      mini: false,
    }
  },
}
