<template>
	<view class="wrap">
		<view class="header">
			<view 
				@click="back"
				class="icon iconfont icon-quxiao cancel"  
				v-bind:style="{ color: activeColor, fontSize:  '70rpx' }"> 
			</view>
			
			<view 
				class="icon iconfont icon-shanguangdeng light"  
				v-bind:style="{ color: activeColor, fontSize:  '70rpx' }"> 
			</view>
			
			<view 
				class="icon iconfont icon-androidgengduo more"  
				v-bind:style="{ color: activeColor, fontSize:  '70rpx' }"> 
			</view>
			
		</view>
		
		<view class="photoView">
			<image :src="imgShow" mode=""></image>
		</view>
		
		<view class="shotBtn" @click="getCamera">
			<view class="bigCircle">
			</view>
			
			<view class="smallCircle">
			</view>
		</view>
		
		<view class="todayBill">
			<view 
				class="icon iconfont icon-zhangdan bill"
				:style="{ color: activeColor, fontSize:  '50rpx' }">
			</view>
			<span>今日账单</span>
		</view>
		
		<view class="importPic" @click="importPic">
			<view 
				class="icon iconfont icon-tianjiatupian_huaban import"
				:style="{ color: activeColor, fontSize:  '65rpx' }">
			</view>
			<span>导入图片</span>
		</view>
		
		
	</view>
</template>

<script>
	import { postMenu, getMenu } from '../../config/api.js';
	export default {
		onLoad() {
			getMenu().then((res) => {
				console.log(res);
			}).catch(() =>{
				
			})
		},
		data() {
			return {
				activeColor:"#fff",
				imgShow:''
			}
		},
		methods: {
			back(){
				uni.navigateBack();
			},
			getCamera(){
				var _this = this
						uni.chooseImage({
							count: 1, //默认9
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							sourceType: ['album', 'camera'], //从相册选择、摄像头
							success: function(res) {
								_this.imgShow = res.tempFilePaths[0];
								console.log(_this.imgShow);
							}
				});
			},
			
			getCamera1(){
				uni.createCameraContext();
			},
			importPic(){
				var _this = this
						uni.chooseImage({
							count: 1, //默认9
							sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							sourceType: ['album', 'camera'], //从相册选择、摄像头
							success: function(res) {
								_this.imgShow = res.tempFilePaths[0];
								console.log(_this.imgShow);
							}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.iconfont{
	font-size: 70rpx;
}
	
.wrap{
	width: 100%;
	height: 100%;
	background-color: $bgc;
	position: relative;
	.header{
		position: absolute;
		width: 100%;
		height: 162.97rpx;
		
		view{
			position: absolute;
			top:61.33rpx;
		}
		.cancel{
			width: 57.83rpx;
			height: 57.83rpx;
			left: 26.28rpx;
			
		}
		
		.light{
			left:562.5rpx;
		}
		
		.more{
			left: 670.67rpx;
		}
		
	}
		
	.photoView{
		position: absolute;
		width: 700.93rpx;
		height: 1356.3rpx;
		left: 24.53rpx;
		top: 162.97rpx;
		background-color: #F0F0F0;
	}
	
	.shotBtn{
		.bigCircle{
			width: 145.44rpx;
			height: 145.44rpx;
			background: #55818E;
			border-radius: 50%;
			box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
			position: absolute;
			left: 303.15rpx;
			top: 1470.2rpx;
		}
		
		.smallCircle{
			width: 113.9rpx;
			height: 113.9rpx;
			background-color: #FAFAFA;
			border-radius:50% ;
			position: absolute;
			left: 318.92rpx;
			top: 1485.97rpx;
		}
	}
	
	.todayBill{
		
		.bill{
			position: absolute;
			left: 105.14rpx;
			bottom: 45.56rpx;
		}
		span{
			position: absolute;
			font-size: 22.78rpx;
			left: 87.85rpx;
			color: #fff;
			bottom: 10.52rpx;
			
		}
	}
	
	.importPic{
		
		.import{
			position: absolute;
			right: 105.14rpx;
			bottom: 40.56rpx;
		}
		span{
			position : absolute;
			font-size: 22.78rpx;
			right: 94.85rpx;
			color: #fff;
			bottom: 10.52rpx;
		}
	}
}

</style>
