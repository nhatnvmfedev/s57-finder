export default {
  name: 'MenuMain',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Đặt sân', icon: 'fa-magnifying-glass-location' },
        { title: 'Tìm kèo', icon: 'fa-person-circle-plus' },
        { title: 'Giỏ hàng', icon: 'fa-cart-plus' },
      ],
      mini: false,
    }
  },
}
