<template>
	<view class="wrap">
		<image src="../static/images/noteBook.png" mode="aspectFill"></image>
	</view>
</template> 

<script>
	export default {
		name:"noteBook",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		image{
			
			width: 100%;
			height: 100%;
		}
}
</style>