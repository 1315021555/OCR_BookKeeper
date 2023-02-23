<template>
	<view class="wrap">
		<view class="logo">
			
		</view>
		
		<view class="loginMain">
			<view class="loginBtn">
				<span>短信验证码登录</span>
			</view>
			
			<view class="underLine">
				<navigator url="../index/index" class="forgetPSW">
					忘记密码 ？
				</navigator> 
				
				<navigator url="../registe/registe" class="registe">
					注册账号
				</navigator> 
			</view>
			
		
			<view class="otherType">
				<span>其他方式登录</span>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
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
	.loginMain{
		width: 100%;
		height: 100%;
		.loginBtn{
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			top:894.74rpx;
			left: 82.46rpx;
			width: 587.72rpx;
			height: 122.81rpx;
			border-radius: 87.72rpx;
			background-color: #E9D2A6;
			
			span{
				font-family: 'Microsoft PhagsPa';
				font-size: 43.86rpx;
				color: #528090;
			}
		}
		
		.underLine{
			display: flex;
			position:absolute;
			top:1036.84rpx;
			width: 100%;
			justify-content: space-between;
			
			navigator{
				color: #528090;
				font-size: 26.28rpx;
			}
			.forgetPSW{
				margin-left: 96.49rpx;
			}
			
			.registe{
				margin-right: 96.49rpx;
			}
		}
		
		.otherType{
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
				font-size: 40.3rpx;
				
			}
		}
	}

}
</style>
