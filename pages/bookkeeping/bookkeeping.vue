<template>
	<view class="wrap">
		<!-- <image src="@/static/images/noteBook.png" mode="aspectFill" class="background"></image> -->
		<note-book></note-book>
		<ul class="topSwitch" >
			<li :class="{active:isPay}" @click="switchType">支出</li>
			<li :class="{active:!isPay}" @click="switchType" >收入</li>
		</ul>
		
		<view class="itemWrapper">
				<image src="../../static/images/便签.png" mode="aspectFill"></image>
			   <ul class="itemList">
					<li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li>
					<li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li>
					<li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li>
					<li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li>
					<li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li><li>
						<image src="../../static/images/temp.png" mode=""></image>
						<p>餐饮</p>
					</li>
					
			   </ul>
			   <image src="../../static/images/dash.png" class="dash" mode=""></image>
			   <input class="money" @blur="goBackTop" value="0.00"></input>
			  
		</view>
		 <input class="ps" @blur="goBackTop"  placeholder="点击输入备注">
		 <p class="psTip">备注:</p>
		 <image @click="useMicrophone" class="microphone" src="../../static/images/麦克风.png" mode=""></image>
	</view>
</template>

<script>
	import noteBook from '../../components/noteBook.vue'
	export default {
		components:{
			noteBook,
		},
		data() {
			return {
				isPay:true,
			}
		},
		methods: {
			goBackTop(){
				uni.pageScrollTo({
					scrollTop:0
				})
				console.log("返回顶部");
			},
			
			useMicrophone(){
				console.log("启动麦克风");
			},
			
			switchType(){
				this.isPay = !this.isPay;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
	width: 100%;
	height: 100%;

	position:relative;
	.background{  
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	
	.topSwitch{
		width: 100%;
		height: 87.62rpx;
		position: absolute;
		top:210.28rpx;
		display: flex;
		justify-content: center;
		li{
			width: 306.66rpx;
			height: 85.86rpx;
			margin-right: 25.05rpx;
			font-size: 47.31rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: 'Microsoft PhagsPa';
			font-style: normal;
			font-weight: 400;
			
		}
		li.active{
			background-color: #fff;
			box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
			border-radius: 26.28rpx
		}
	}
	
	.itemWrapper{
			
		position: absolute;
		left: 26.79rpx;
		top:336.45rpx;
		width: 690.42rpx;
		height: 1110.97rpx;
	
		image{
			width: 690.42rpx;
			height: 1126.75rpx;
			
			/* background-color: pink; */
		}
		
		.itemList{
			position: absolute;
			/* background-color: lightblue; */
			top:80.61rpx;
			left: 84.36rpx;
			width: 523.95rpx;
			height: 750rpx;
			overflow: scroll;
			
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			align-content: flex-start;
			flex-wrap: wrap;
			
			
			li{
				width: 131.42rpx;
				height: 176.98rpx;
				margin-right: 64.84rpx;
				margin-bottom: 10.51rpx;
				text-align: center;
				
				image{
					width: 131.42rpx;
					height: 131.42rpx;
					border-radius: 50%;
				}
			}
			
			li:nth-child(3n){
				margin-right: 0;
			}
		}
		
		.dash{
			width: 587.03rpx;
			height: 1px;
			position: absolute;
			left: 57.83rpx;
			bottom: 243.57rpx;
		}
		
		.money{
			width: 255.84rpx;
			height: 119.16rpx;
			background-color: #D9D9D9;
			box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
			border-radius: 52.57rpx;
			position: absolute;
			left: 345.21rpx;
			bottom: 80.08rpx;
			display: flex;
			align-items: center;
			font-size: 52.57rpx;
			text-align: center;
		}
		
	}
	
	.ps{
		width: 609.81rpx;
		height: 70.09rpx;
		padding-left: 124.42rpx;
		box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
		border-radius: 26.28rpx;
		background-color: #EFEFEF;
		position: absolute;
		left: 87.62rpx;
		bottom: 50.82rpx;
	}
	
	.psTip{
		position: absolute;
		width: 138.43rpx;
		height: 43.81rpx;
		left: 105.14rpx;
		top: 1514.01rpx;
		font-size: 35.05rpx;
	}
	
	.microphone{
		width: 35.05rpx;
		height: 43.81rpx;
		position: absolute;
		left: 643.1rpx;
		bottom: 61.33rpx;
	}
}

</style>
