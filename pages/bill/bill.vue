<template>
	<view class="wrap">
		<note-book></note-book>
		<view class="calendarWrap">
			<calendar></calendar>
		</view>
		
		<view class="dailyData">
			<view class="incomeBox">
				<image src="../../static/images/income.png" mode="" class="income"></image>
				<span>收入</span> 
				<!-- 寻找有变长动画的组件代替 -->
				<u-line-progress class="moneyBar" inactiveColor="#AFCDC6" :percentage="100" :showText="false" activeColor="#EEE1C9"></u-line-progress>
				<span>{{income}}</span>
				                                     
			</view>
			
			<view class="outcomeBox">
				<image src="../../static/images/outcome.png" mode="" class="outcome"></image>
				<span>支出</span> 
				<u-line-progress class="moneyBar" inactiveColor="#AFCDC6" :percentage="60" :showText="false" activeColor="#EEE1C9"></u-line-progress>
				<span>{{outcome}}</span>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import noteBook from '@/components/noteBook.vue'
	import calendar from '@/components/calendar.vue'
	export default {
		components:{
			noteBook,
			calendar
		},
		data() {
			return {
				/* 收入支出数据 */
				income:180,
				outcome:140,
			};
		}
	}
</script>

<style lang="scss">
.wrap{
	width: 100%;
	height: 100%;
	position: relative;
	.calendarWrap{
		width: 750rpx;
		height: 825.35rpx;
		position: absolute;
		top:94.63rpx;
		
	}
	
	.dailyData{
		position: absolute;
		width: 650.11rpx;
		height: 122.66rpx;
		top:981.3rpx;
		left: 49.07rpx;
		image{
			width: 43.81rpx;
			height: 38.55rpx;
		}
		
		image.income{
			
		}
		
		image.outcome{
			margin-top:24rpx;
		}
		
		span{
			font-size: 43.81rpx;
			color:$blue;
			margin-left: 19.28rpx;
		}
		
		.moneyBar{
			position: relative;
			top:-10rpx;
			display: inline-block;
			width: 315.42rpx;
			margin-left: 35.05rpx;
			
		}
		
		
	}
}
</style>
