<template>
	<view class="wrap">
		<note-book></note-book>
		<view class="header">
			<image src="../../static/images/健康分析图标.png" mode=""></image>
			<span>健康分析</span>
			<image src="../../static/images/2dotsLine.png" mode="" class="line"></image>
		</view>
		
		<image src="../../static/images/健康分析图.png" mode="" class="analyseGraph"></image>
		<view class="analyseContent">
			
		</view>
		
		<button class="addOld">
			<span>添加照顾老人</span>
			<image src="../../static/images/发布按键.png" mode=""></image>
		</button>
		
	</view>
</template>

<script>
	import noteBook from '../../components/noteBook.vue'
	export default {
		components:{
			noteBook
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.wrap{
	width: 100%;
	height: 100%;
	position: relative;
	.header{
		position:absolute;
		top:0;
		width: 520.44rpx;
		height: 110.4rpx;
		
		
		image{
			position: absolute;
			top:194.51rpx;
			left: 101.63rpx;
			width: 106.89rpx;
			height: 115.65rpx;
		}
		
		span{
			position: absolute;
			width: 375rpx;
			top:185.51rpx;
			left: 247.08rpx;
			font-size: 70.09rpx;
			letter-spacing: 14.52rpx;
		}
		
		.line{
			position: absolute;
			height: 7rpx;
			width: 520.44rpx;
			top:310.16rpx;
		}
	}
	
	.analyseGraph{
		position: absolute;
		width: 506.42rpx;
		height: 585.28rpx;
		left: 124.42rpx;
		top: 334.69rpx;
	}
	
	.analyseContent{
		position: absolute;
		width: 615.07rpx;
		height: 399.53rpx;
		left: 68.62rpx;
		top: 944.5rpx;
		
		background: #D9D9D9;
		border-radius: 35.05rpx;
	}
	
	
	.addOld{
		position: absolute;
		width: 453.85rpx;
		height: 131.42rpx;
		right: 0;
		top: 1492.98rpx;
		background: #D9D9D9;
		border-radius: 35.05rpx 0px 0px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 46.57rpx;
		span{
			margin-left: 87.62rpx;
		}
		image{
			position: absolute;
			left: 54.32rpx;
			width: 35.05rpx;
			height: 35.05rpx;
		}
		
	}
	
	
}
</style>
