<template>
	<div class="telhead fixed">
		<div @touchstart="Goback" class="left">←</div>
		<div class="content">通讯录</div>
		<div @touchstart="more" class="right">☰</div>
	</div>
</template>

<script >
	export default {
        methods:{
            Goback(){
              alert("返回")
            },
            more(){
              alert("更多")
            }
        }
	}
</script>

<style scoped>
    .telhead {
    	height: 50px;
        width: 100%;
    	line-height: 50px;
    	text-align: center;
    	display: flex;
    	border-bottom:1px solid #ccc ;
        z-index: 50;
        position: absolute;
        top: 0;
        left:0;
    }
    .fixed {
        position: fixed;
        top: 0;
        left: 0;
    }
    .telhead .content{
    	width: 100%;
        background-color: #fff;
    }
    .telhead .left,
    .telhead .right{
    	padding:0 18px;
    	font-size: 24px;
    	font-weight: bold;
    	background: #eee;
    }
</style>