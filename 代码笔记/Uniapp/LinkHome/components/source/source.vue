<template>
	<view class="source-wrap">
		<view class="pro-mou" v-for="(item , index) in list" :key="index">
			<view class="img">
				<image :src="item.imgSrc"></image>
			</view>
			<view class="pro-mes">
				<view class="mes mes1">
					{{item.title}}
				</view>
				<view class="mes mes2">
					{{item.shi}}室{{item.ting}}厅/{{item.area}}m²/朝{{item.orientation}}/位于{{item.where}}
					
				</view>
				<view class="mes mes3" >
					<text class="keyword1" v-for="(items,index) in item.feature" :key="index">{{items}}</text>				</view>
				<view class="mes mes4">
					<text class="price">
						{{item.totalPrice}}万
					</text>
					<text class="units">
						{{item.price}}元/平
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		created() {
			var _this = this
			uni.request({
			    url: 'http://localhost:8002/mydata', //仅为示例，并非真实接口地址。
			    success: (res) => {
			        console.log(res);
					_this.list = res.data.houseSourceArr
					console.log(_this.list)
			    }
			});
		}
	}
</script>

<style lang="scss">
	.pro-mou{
		padding:0 40rpx;
		margin:40rpx 0 0 0;
		display: flex;
		
		.img{
			flex:2;
			width:400rpx;
			image{
				width:100%;
				height:200rpx;
			}
		}
		.pro-mes{
			flex:3 ;
			padding:0 0 0 40rpx;
			font-size:34rpx;
				
			.mes{
				line-height:48rpx;
			}
			.mes2{
				font-size:28rpx;
				color:#999;
			}
			.mes3{
				font-size:28rpx;
				text{
					margin-right:20rpx;
				}
			}
			.mes4{
				font-size:42rpx;
				margin:10rpx 0 0 0;
				.price{
					color:red;
					
				}
				.units{
					color:#999;
					font-size:28rpx;
					margin:0 0 0 20rpx;
				}
			}
		}
		
	}
	

</style>
