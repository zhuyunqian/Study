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
</style>
