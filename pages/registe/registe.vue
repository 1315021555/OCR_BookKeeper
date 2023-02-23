<template>
	<view class="wrap">
		<view class="logo">
			
		</view>
		
		<ul class="infoList">
			<li>用户名</li>
			<li>密码</li>
			<li>确认密码</li>
			<li>手机号</li>
			<li>
				<span>验证码</span>
				<span class="getCode">获取验证码</span>
			</li>
		</ul>
		
		<view class="finish">
			<span>完成</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.wrap{
		position: relative;
		.logo{
			width:227.8rpx;
			height: 227.8rpx;
			border-radius: 50%;
			background-color: $blue;
			opacity: 0.3;
			position: absolute;
			top:133.18rpx;
			left: 66.59rpx;
		}
		
		.infoList{
			position: absolute;
			top:438.08rpx;
			left: 75.35rpx;
			width: 574.76rpx;
			li{
				box-sizing: border-box;
				height: 134.93rpx;
				border-bottom: 3px solid $blue;
				font-size: 45.56rpx;
				color: $blue;
				padding: 59.58rpx 0 0 10.26rpx;
				letter-spacing: 3.26rpx;
			}
			
			 li:last-child{
				 span.getCode{
					 float: right;
					 font-size: 38.55rpx;
					 letter-spacing: 0;
				 }
			 }
		}
		
		.finish{
			width: 375rpx;
			height: 127.92rpx;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			left: 375rpx;
			top:1500.73rpx;
			border-radius: 70.09rpx 0px 0px 0px;
			background-color: #528090;
			
			span{
				color:white;
				font-size: 45.56rpx;
				font-weight: normal;
				letter-spacing: 3.5rpx
				
			}
		}
	}
</style>
