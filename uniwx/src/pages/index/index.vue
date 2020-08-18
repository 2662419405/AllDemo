<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<text class="iconfont">&#xe624;</text>
		<text @click="changeRouter('/pages/set/index')">去我的页面</text>
		<rm-image :title="title"></rm-image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello1'
			}
		},
		onLoad() {

		},
		methods: {
			changeRouter(route){
				uni.navigateTo({
					url:'../set/index'
				})
				// this.$mRouter.push({route})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
