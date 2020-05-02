<template>
	<view class="wrappers">
		<view class="banner">
			<image src="../../static/images/banner.jpg"></image>
			<view class="search">
				<view class="searchLeft">
					广州
				</view>
				<view class="searchRight">
					<text class="iconfont">&#xe692;</text>
					<input type="text" placeholder="输入您想住哪里？">
				</view>
			</view>
		</view>
		
		<view class="grid" >
			<uni-grid :column="4" :show-border="false">
			    <uni-grid-item>
					<image src="../../static/images/nav/nav1.png" mode=""></image>
			        <text class="text">文本</text>
			    </uni-grid-item>
			    <uni-grid-item>
					<image src="../../static/images/nav/nav2.png" mode=""></image>
			        <text class="text">文本</text>
			    </uni-grid-item>
			    <uni-grid-item>
					<image src="../../static/images/nav/nav3.png" mode=""></image>
			        <text class="text">文本</text>
			    </uni-grid-item>
			    <uni-grid-item>
					<image src="../../static/images/nav/nav4.png" mode=""></image>
			        <text class="text">文本</text>
			    </uni-grid-item>
			</uni-grid>
		</view>

		<view class="market">
			<view class="market-title">
				<text class="title">广州市场行情</text>
				<text class="more">查看全部&gt;</text>
			</view>
			<view class="market-con">
				<view class="price">
					<text>全市均价</text>
					<view class="fw">289922 <text class="unit">元/平米</text></view>
				</view>
				<view class="num">
					<text>昨日成交量</text>
					<view class="fw">9 <text class="unit">套</text></view>
				</view>
			</view>
		</view>
		
		<view class="recommend">
			<view class="market-title">
				<text class="title">推荐房源</text>
			</view>
			<view class="recommend-con">
				<Source/>
			</view>
		</view>
		
	</view>
</template>

<script>
	// 引入安装的九宫格模板
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	// 引入组件
	import Source from "@/components/source/source.vue"
	
	export default {
		data() {
			return {

			};
		},
		components: {
			// 注册组件
			uniGrid,
			uniGridItem,
			// 注册组件
			Source,
		},
		created() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.banner {
		width: 100%;
		height: 400rpx;
		position: relative;

		image {
			width: 100%;
			height: 400rpx;
			position: absolute;
		}

		.search {
			position: absolute;
			z-index: 1;
			top: 100rpx;
			width: 90%;
			left: 5%;
			height: 88rpx;
			background-color: #fff;
			box-sizing: border-box;
			
			.searchLeft{
				margin-left:20rpx;
				font-size:28rpx;
				line-height:88rpx;
				float:left;
				&::after{
					content:"";
					width:0;
					height:0;
					display:inline-block;
					border:10rpx solid transparent;
					border-top-color:#ababab;
					position:relative;
					left:8rpx;
					top:4rpx;
				}
			}
			.searchRight{
				float:right;
				width:80%;
				height:88rpx;
				
				text.iconfont{
					line-height:88rpx;
					display:inline-block;
					float:left;
				}
				
				input{
					float:right;
					width:90%;
					height:88rpx;
					line-height:88rpx;
					font-size:28rpx;
				}
			}
		}
	}

	.grid{
		margin:40rpx 0 0;
	}
	.uni-grid-item{
		image{
			width:104rpx;
			height:104rpx;
			display:block;
			margin:0 auto;
		}
		text{
			text-align:center;
			font-size:26rpx;
			margin:10rpx 0 0 0;
		}
	}

	.market-title{
		line-height:88rpx;
		padding:0 40rpx;
		border-bottom:1rpx solid #ddd;
		.title{
			font-size:28rpx;
		}
		.more{
			float:right;
			font-size:26rpx;
			color:#999;
		}
	}
	.market-con{
			margin:20rpx 0 0 0;
			padding:0 40rpx;
			display:flex;
			
			.price,.num{
				flex:1;
				
				font-size:24rpx;
				color:#999;
				
				view{
					color:#333;
					font-size:38rpx;
					margin:10rpx 0 0 0;
					.unit{
						font-size:24rpx;
						margin:0 0 0 10rpx;
					}
				}
			}
		}
	
	
	
	
	

</style>
