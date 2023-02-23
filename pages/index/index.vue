<template>
	<view class="wrap">
		<!-- <image src="@/static/images/noteBook.png" mode="aspectFill"></image> -->
		<note-book></note-book>
		<view class="main">
			<!-- 导航列表 -->
			<ul class="nav">
				<navigator url="../bill/bill" class="bill">
					<image class="bill" src="@/static/images/bill.png" mode=""></image>
					
					<p>账单</p>
				</navigator>
				<navigator class="graph" url="../graph/graph">
					<image class="graph" src="@/static/images/graph.png" mode=""></image>
					<p>图表</p>
				</navigator>
				<navigator url="../health/health" class="health">
					<image class="health" src="@/static/images/health.png" mode=""></image>
					<p>健康</p>
				</navigator>
			</ul>
			
			<!-- 翻页设计 -->
			<view class="flipper">
				<image src="../../static/images/dashBorder.png" class="dash" mode=""></image>
				<navigator url="../ocr/ocr">
					<image :src="ocrImgSrc" mode="aspectFill"></image>
				</navigator>
				
				<view class="add">
					<span>记账</span>
					<navigator url="../bookkeeping/bookkeeping" class="addBtn">
						<image src="../../static/images/发布按键.png" mode=""></image>
					</navigator>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import noteBook from '../../components/noteBook.vue'
	
	export default {
		components:{
			noteBook:noteBook
		},
		data() {
			return {
				backGround:require('@/static/images/noteBook.png'),
				ocrImgSrc:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjIwOCIgdmlld0JveD0iMCAwIDE0OCAyMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iNCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyMDAiIHJ4PSIyMCIgZmlsbD0iIzhFQjNBQiIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF82OF8yKSIvPjxwYXRoIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIxMCAxMCIgZD0iTTQuNSAxNy41aDEzOU00LjUgMTg0LjVoMTM5Ii8+PHBhdGggZD0iTTE1LjY2NyAzNy4xMjV2NjQuNzVoNzB2LTkuMjVINzRjLTYuNDc1IDAtMTEuNjY3LTQuMTE2LTExLjY2Ny05LjI1di0yNy43NWMwLTUuMTM0IDUuMTkyLTkuMjUgMTEuNjY3LTkuMjVoMTEuNjY3di05LjI1bTAgOS4yNXY5LjI1aDExLjY2NnYtOS4yNW0tMTEuNjY2IDkuMjVINzR2MjcuNzVoMTEuNjY3bTAgMHY5LjI1aDExLjY2NnYtOS4yNW0tNjQuMTY2LTM3aDExLjY2NmM2LjQ3NSAwIDExLjY2NyA0LjExNiAxMS42NjcgOS4yNXYyNy43NWMwIDUuMTM0LTUuMTkyIDkuMjUtMTEuNjY3IDkuMjVIMzMuMTY3Yy02LjQ3NSAwLTExLjY2Ny00LjExNi0xMS42NjctOS4yNXYtMjcuNzVjMC01LjEzNCA1LjE5Mi05LjI1IDExLjY2Ny05LjI1em03MCAwdjQ2LjI1aDExLjY2NnYtMTguNWg1LjgzNHY0LjYyNWg1LjgzM3YxMy44NzVoMTEuNjY3Vjc4Ljc1aC01LjgzNFY2OS41aDUuODM0VjUxaC01LjgzNHYtNC42MjVtLTk5LjE2NiA5LjI1djI3Ljc1aDExLjY2NnYtMjcuNzVtNzAgMEgxMjYuNXY5LjI1aC0xMS42Njd2LTkuMjV6TTgzLjI1IDEyNy43NWE1LjQ5OCA1LjQ5OCAwIDAgMC01LjUgNS41djEyLjM3NWg1LjVWMTMzLjI1SDk3di01LjVIODMuMjV6bS01LjUgNDR2LTE1LjEyNWg1LjV2MTUuMTI1SDk3djUuNUg4My4yNWE1LjQ5OCA1LjQ5OCAwIDAgMS01LjUtNS41em0zMC4yNSAwdjUuNWgxMy43NWE1LjQ5NiA1LjQ5NiAwIDAgMCA1LjUtNS41di0xNS4xMjVoLTUuNXYxNS4xMjVIMTA4em0xMy43NS0yNi4xMjVoNS41VjEzMy4yNWE1LjQ5NiA1LjQ5NiAwIDAgMC01LjUtNS41SDEwOHY1LjVoMTMuNzV2MTIuMzc1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik05MS41IDEzOC43NWgyMnYyLjc1aC0yMnYtMi43NXpNODguNzUgMTQ3aDI3LjV2Mi43NWgtMjcuNVYxNDd6bTIuNzUgOC4yNWgyMlYxNThoLTIydi0yLjc1em0tMi43NSA4LjI1aDI3LjV2Mi43NWgtMjcuNXYtMi43NXoiIGZpbGw9IiNmZmYiLz48ZGVmcz48ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNjhfMiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE0OCIgaGVpZ2h0PSIyMDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHk9IjQiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+PGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNjhfMiIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd182OF8yIiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PC9kZWZzPjwvc3ZnPg=="
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
	.wrap{
		position: relative;
		height: 100%;
		width: 100%;
		image{
			z-index: -1;
			width: 100%;
			height: 100%;
		}
		
		.main{
			position: absolute;
			bottom: 0;
			height: 1429.9rpx;
			
			.nav{
				width: 268.11rpx;
				height: 100%;
				padding: 52.57rpx 0 0 55.79rpx;
				box-sizing: border-box;
				li,navigator{
					position: relative;
					width: 122.66rpx;
					height: 122.66rpx;
					border-radius: 26.28rpx;
					background-color: #D5E3E3;
					margin-bottom: 92.87rpx;
					text-align: center;
				    padding-top: 17.52rpx;
					box-sizing: border-box;
					box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
					image{
						z-index: 2;
						
					}
					
					image.bill, image.health{
						width: 50.56rpx;
						height: 57.83rpx;
					}
					image.graph{
						width: 52.57rpx;
						height: 52.57rpx;
					}
					p{
						
						font-size: 28.04rpx;
						color:$blue;
						
					}
				}
				
				
				
			}
			
			.flipper{
				position: absolute;
				bottom: 0;
				right:-481.89rpx;
				width:481.89rpx;
				height: 100%;
				
				.dash{
					width: 100%;
					height: 100%;
				}
				navigator{
					position: absolute;
					left: 175.23rpx;
					top:120.91rpx;
					width: 245.33rpx;
					height: 350.47rpx;
					z-index: 9;
					.ocr{
					
					}
				}
				
				.add{
					width: 304.9rpx;
					height: 192.76rpx;
					background-color: #AFCDC6;
					position: absolute;
					top:604.55rpx;
					box-shadow: 0px 7.01rpx 7.01rpx rgba(0, 0, 0, 0.25);
					border-radius: 0px 35.05rpx 35.05rpx 0px;
					span{
						position: absolute;
						top:66.59rpx;
						left: 19.28rpx;
						font-size: 52.57rpx;
						color: #FFFFFF;
					}
					
					.addBtn{
						position: absolute;
						left: 150.7rpx;
						top:35.05rpx;
						width: 122.66rpx;
						height: 122.66rpx;
						background-color: $blue;
						border-radius: 50%;
						image{
							position: absolute;
							width: 61.33rpx;
							height: 61.33rpx;
							left: 31.54rpx;
							top:29.79rpx;
							z-index: 2;
						}
					}
				}
				
				
			}
		}
		
	}
</style>
