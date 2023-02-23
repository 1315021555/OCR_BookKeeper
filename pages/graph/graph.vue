<template>
	<view class="wrap">
		<noteBook></noteBook>
		<view class="flipper " :class="{folded:isChosen}">
			<image class="backgroundImg" src="../../static/images/dashBorder.png" mode="aspectFill"></image>
			<view class="pay" >
				<p>支出</p>
				<image class="more" src="../../static/images/选择更多.png" mode=""></image>
			</view>
			
			<ul class="tagList  animate__animated animate__bounceInLeft">
				<li class="week animate__animated " @click="choseWeek " :class="{animate__bounceOutLeft:isChosen && !isChoseWeek,animate__bounceInLeft:!isChosen,active:isChoseWeek}">
					<image src="../../static/images/便签条.png" mode=""></image>
					<p>周</p>
				</li>
				<li class="month animate__animated " @click="choseMonth" :class="{animate__bounceOutLeft:isChosen && !isChoseMonth,active:isChoseMonth,animate__bounceInLeft:!isChosen}">
					<image src="../../static/images/便签条.png" mode=""></image>
					<p>月</p>
				</li>
				<li class="year animate__animated" @click="choseYear" :class="{animate__bounceOutLeft:isChosen && !isChoseYear,active:isChoseYear,animate__bounceInLeft:!isChosen}">
					<image src="../../static/images/便签条.png" mode=""></image>
					<p>年</p>
				</li>
			</ul>
			
			<view class="anniversary   animate__animated" :class="{animate__bounceOutLeft:isChosen,animate__bounceInLeft:!isChosen}">
				<image class="anniImg" src="../../static/images/纪念日.png" mode=""></image>
				<p>纪念日</p>
			</view>
			
			<view class="text animate__animated" :class="{animate__bounceOutLeft:isChosen,animate__bounceInLeft:!isChosen}">
				<image class="dotLine" src="../../static/images/2dotsLine.png" mode="widthFix"></image>
				<image class="dotLine" src="../../static/images/2dotsLine.png" mode="widthFix"></image>
				<image class="dotLine" src="../../static/images/2dotsLine.png" mode="widthFix"></image>
				<image class="dotLine" src="../../static/images/2dotsLine.png" mode="widthFix"></image>
				<image class="dotLine" src="../../static/images/2dotsLine.png" mode="widthFix"></image>
				<image class="dotLine" src="../../static/images/2dotsLine.png" mode="widthFix"></image>
			</view>
			
		</view>
		
		<view class="main animate__animated animate__fadeInLeft animate__faster" v-if="isChosen" >
			<scroll-view scroll-x scroll-y class="scrollWrap" scroll-left="1000">
				<view class="weekItem" v-for="(week,index) in weekList" @click="changeWeekActive(index)" :class="{active:activeWeekIndex == index }" >
					{{week}}
				</view>
				
			
			
			</scroll-view>
			
			<!-- 显示选中周的数据 -->
			<view class="weekData">
				
			</view>
			
			<view class="leaderBoard">
				<p>支出排行榜</p>
				<view class="leaderData">
					<!-- 排行榜数据 -->
				</view>
			</view>
		</view>
		

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
				isChoseWeek:false,
				isChoseMonth:false,
				isChoseYear:false,
				weekList:["05周","04周","03周","02周","上周","本周"],
				activeWeekIndex:5
			}
		},
		
		
		methods: {
			choseWeek(){
				this.isChoseWeek = !this.isChoseWeek;
			},
			
			choseMonth(){
				this.isChoseMonth = !this.isChoseMonth;
			},
			
			choseYear(){
				this.isChoseYear = !this.isChoseYear;
			},
			
			/* 改变选中的周数 */
			changeWeekActive(activeIndex){
				this.activeWeekIndex = activeIndex;
			},
			
		},
		
		computed:{
			isChosen(){ 
				return this.isChoseWeek || this.isChoseMonth || this.isChoseYear
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
.wrap{
	position: relative;
	width: 100%;
	height: 100%;
	.flipper{
		transition: 0.3s ease-in-out;
		position: absolute;
		top: 192.76rpx;
		width:481.89rpx;
		height:1429.9rpx;
		z-index: 2;
		.backgroundImg{
			transition: 0.3s ease-in-out;
			transform: rotateY(180deg);
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -1;
		}	
		
		.pay{
			transition: 0.3s ease-in-out;
			position: absolute;
			top:60.3rpx;
			left: 92.87rpx;
			display: flex;
			p{
				font-size: 64.84rpx;
			}
			image.more{
				transition: 0.3s ease-in-out;
				width: 35.05rpx;
				height: 26.28rpx;
				position: absolute;
				left: 164.72rpx;
				top:35.05rpx;
			}
		}
			
		.tagList{
			width: 383.76rpx;
			height: 411.8rpx;
			position: absolute;
			top:160.19rpx;
			li{
				transition: 0.3s ease-in-out;
				position: relative;
				image{
					width: 383.76rpx;
					height: 138.43rpx;
				}
				p{
					position: absolute;
					left: 247.08rpx;
					top:29.79rpx;
					font-size: 52.57rpx;
					color: #fff;
				}
			}
		
		}
		
		.anniversary{
			position: absolute;
			top:560.74rpx;
			left: 50.82rpx;
			width: 306.66rpx;
			height: 325.93rpx;
			.anniImg{
				width: 100%;
				height: 100%;
			}
			p{
				font-size: 61.33rpx;
				color:#fff;
				position: absolute;
				top:129.67rpx;
				left: 61.33rpx;
			}
			
			
		}
		
		.text{
			width: 362.73rpx;
			height: 415.51rpx;
			position: absolute;
			top:946.26rpx;
			left: 38.55rpx;
			
			overflow: hidden;
			.dotLine{
				width: 362.73rpx ;
				margin-bottom: 60.36rpx;
			}
		}
	}
	
	.folded{
		transform: translateX(-50%);
		transition: 0.3s ease-in-out;
		image.backgroundImg{
			
			transition: 0.3s ease-in-out;
		}
		.pay{
		   transition: 0.3s ease-in-out;
		   transform: translateX(170rpx);
		   
		   image{
			   display: none;
		   }
			
		}
		.tagList{
			 li.active{
				 transition: all 0.3s ease-in-out;
			 }
			 
		}
	}
	
	
	
	.main{
		/* z-index: 3; */
		position: absolute;
		top:254.09rpx;
		left: 126.17rpx;
		transition: all 1s;
		
		
		.scrollWrap{
			width: 581.77rpx;
			height: 70.09rpx;
			white-space: nowrap;
			.weekItem{
				display: inline-block;
				width: 145.44rpx;
				height: 70.09rpx;
				background: #DEDFD8;
				box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
				font-size: 35.05rpx;
				text-align: center;
				line-height: 70.09rpx;
				
			}
			
			.active{
				background-color: $blue;
				color: white;
			}
			
		}
		
		.weekData{
			margin:50.82rpx 0 0 162.85rpx;
			width: 410.04rpx;
			height: 723.71rpx;
			
			
			background: #D9D9D9;
			border-radius: 35.05rpx;
		}
		
		.leaderBoard{
			p{
				width: 261.1rpx;
				height: 77.1rpx;
				margin:31.54rpx 0 0 140.85rpx;
				background: $blue;
				box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 35.05rpx;	
				color: #DEDFD8;
			}
			
			.leaderData{
				margin: 19.28rpx 0 0 162.85rpx;
				width: 410.04rpx;
				height: 352.22rpx;
				background: #D9D9D9;
				border-radius: 35.05rpx;
			}
			
		}

	}
	
}

</style>
