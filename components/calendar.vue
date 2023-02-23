<template>
	<view class="wrap">
		<view class="coverNoteBook">
			<view class="wafer w1">
				<image :src="bendSrc" mode="" class="bend"></image>
			</view>
			<view class="wafer w2">
					<image :src="bendSrc" mode="" class="bend"></image>
			</view>
			<view class="wafer w3">
					<image :src="bendSrc" mode="" class="bend"></image>
			</view>
			<view class="wafer w4">
					<image :src="bendSrc" mode="" class="bend"></image>
			</view>
			<view class="wafer w5">
					<image :src="bendSrc" mode="" class="bend"></image>
			</view>
			<view class="wafer w6">
					<image :src="bendSrc" mode="" class="bend"></image>
			</view>			
		</view>

		
		<view class="chosenDate">
			<view class="chosenDay">
				{{fullDay}}
			</view>
			<view class="weekDay">
				{{weekday}}
			</view> 
			
			<view class="year_month">
				{{chosenDate.year}}年{{chosenDate.month}}月
			</view>
		</view>
		
		<view class="dayList">
			<view class="daybox" v-for="item,index in dayNum" :key="index" @click="changeChosenDay(item)">
				<image  src="../static/images/daybox.png" mode="" ></image>
				<span>{{item}}</span>
			</view>
			
		</view>
		
		<view class="month_big">
			{{fullMonth}}
		</view>

		
	</view> 
</template>

<script>
	import usedate from "../utils/date.js"
	export default {
		name:"calendar",
		mounted() {
			let time = new Date();
			this.chosenDate.day = time.getDate();
			this.chosenDate.month = time.getMonth()+1;
			this.chosenDate.year = time.getFullYear();
			this.chosenDate.weekdayIndex = time.getDay();
			
		},
		data() {
			return {
				/* base64地址 */
				bendSrc:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMyA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS43MjYgNjBDLTYuNjQzIDQ5LjUwMyAyNy4yODIgNDYuMDAzIDIyLjMgMzAgMjQuNjcyIDE0LjAwMy00LjI3IDExLjUwMyAyLjM3MiAwYzE1LjcyMyAwIDI5Ljg5MiAxMy40MzEgMjkuODkyIDMwIDAgMTYuNTY5LTE0LjgxNSAzMC0zMC41MzggMzB6IiBmaWxsPSIjRkVFMkJCIi8+PC9zdmc+",
				
				/* 选择的日期数据 */
				chosenDate:{
					day:0,
					month:0,
					year:0,
				},
				
	
			}
		},
		methods:{
			/* 改变该月选中的日期 */
			changeChosenDay(chosenday){
				this.chosenDate.day = chosenday;
			}
		},
		
		computed:{
			
			dayNum(){
				if (usedate.isLeapYear(this.chosenDate.year) && this.chosenDate.month == 2)
					return usedate.dayNumArr[this.chosenDate.month]+1
				else
					return usedate.dayNumArr[this.chosenDate.month]
			},
			/* full表示一位的时候补0 */
			fullDay(){
				if (this.chosenDate.day<10)
					return "0" + this.chosenDate.day
				else 
					return this.chosenDate.day
			},
			
			fullMonth(){
				if (this.chosenDate.month<10)
					return "0" + this.chosenDate.month
				else 
					return this.chosenDate.month
			},
			
			weekday(){
				let weekdayIndex = new Date(this.chosenDate.year,this.chosenDate.month,this.chosenDate.day).getDay(); 
				return usedate.weekdayArr[weekdayIndex];
			},
			
			
			
			
			
		}
		
		
		
	}
</script>

<style lang="scss" scoped>
.wrap{
	position: relative;
	width: 750rpx;
	height: 825.35rpx;
	background-color: $orange;

	box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
	border-radius: 52.57rpx 52.57rpx 0px 0px;
	.wafer{
		position: absolute;
		top:24.53rpx;
		width: 43.81rpx;
		height: 43.81rpx;
		border-radius: 50%;
		background-color: $blue;
		.bend{
			height: 105.14rpx;
			width: 56.07rpx;
			position: absolute;
			top: -75.35rpx;
			right: -29.52rpx;
			
			
		}
	}
	
	.w1{
		left: 47.31rpx;;
	}
	.w2{
		left: 133.18rpx;
	}
	.w3{
		left: 292.64rpx;
		.bend{
			right: -32.52rpx;
		}
	}
	.w4{
		left: 376.75rpx;
		.bend{
			right: -32.52rpx;
		}
	}
	.w5{
		 left: 544.97rpx;
	}
	.w6{
		left: 630.84rpx;
	}
	
	
	.chosenDate{
		position: absolute;
		width: 658.87rpx;
		height: 173.48rpx;
		top:89.37rpx;
		top:89.37rpx;
		left:45.56rpx;
		color: $blue;
		font-size: 66.59rpx;
		.chosenDay{
			position: absolute;
			
		}
		.weekDay{
			position: absolute;
			top:80.05rpx;
			
		}
		.year_month{
			position: absolute;
			font-size: 35.05rpx;
			top:52.57rpx;
			right: 0;
			
		}	
		
	}
	
	.dayList{
		z-index: 2;
		width: 670.63rpx;
		position: absolute;
		top:280.9rpx;
		left: 62.3rpx;
		.daybox{
			position: relative;
			width: 73.6rpx;
			height: 73.6rpx;
			display: inline-block;
			margin: 0 22.78rpx 29.79rpx 0;
			
			image{
				width: 73.6rpx;
				height: 73.6rpx;
			}		
			
			span{
				width: 73.6rpx;
				height: 73.6rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				position: absolute;
				top:4.52rpx;
			}
			
		}
		
		.daybox:first-child{
			margin-left: 282.0rpx;
		}
		
	}
	
	.month_big{
		position: absolute;
		left: 133.18rpx;
		top:185.75rpx;
		font-size: 438.08rpx;
		color: #D9A784;
		opacity: 0.5;
		pointer-events: none;
	}
	


}
</style>