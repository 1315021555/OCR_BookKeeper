<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* uni.scss (uview) */
	@import 'uview-ui/theme.scss';
	/*每个页面公共css */
	@import url("./static/css/reset.css");
	/* animate.css动画库 */
	@import 'animate.css';
	/* iconfont */
	@import 'static/font/iconfont.css'

</style>