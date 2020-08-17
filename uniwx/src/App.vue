<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
/*导入字体图标*/
@font-face {
    font-family: 'iconfont';
    src: url('~@/static/iconfont.ttf') format('truetype');
}
/*设置字体图标*/
.iconfont {
    font-family: "iconfont" !important;
    font-size: 1em;
    font-style: normal;
}
</style>
