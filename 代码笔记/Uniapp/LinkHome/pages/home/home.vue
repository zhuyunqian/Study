<template>
	<view>
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

	</view>
</template>

<script>
	// 引入安装的九宫格模板
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	
	export default {
		data() {
			return {

			};
		},
		components: {
			// 注册组件
			uniGrid,
			uniGridItem
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
		margin:40rpx 0;
	}
	.uni-grid-item{
		image{
			width:84rpx;
			height:84rpx;
			display:block;
			margin:0 auto;
		}
		text{
			text-align:center;
			font-size:26rpx;
			margin:10rpx 0 0 0;
		}
	}

</style>
