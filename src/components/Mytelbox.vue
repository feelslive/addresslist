<template>
  <div id="alert" class="alert" ref="alert">
    <div class="alert-content">
      <div class="alert_title">{{customTitle}}</div>
      <div class="alert_body">{{customBody}}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import busVM from "./busVM.js"
export default {
  name: 'alert',
  props:{
    'customTitle':{
      type:String,
      default:"弹窗"
    }
  },
  mounted(){
    busVM.$on("changeEvent",function(tel){
      //console.log(tel)
      this.customBody = tel
      this.$refs.alert.style.display = "flex"
    }.bind(this))
  },
  data () {
    return {
     customBody:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  left:0;
  top: 0;
  z-index: 100;
  display: none;
}
.alert .alert-content{
  width:200px;
  height:150px;
  background: #fff;
  border-radius: 5px;
  margin: auto; 
  position: relative;
}
.alert .alert_title{
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.alert .alert_body{
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  height: 50px;
}
.alert .alert_btn{
  position: absolute;
  right: 0;
  bottom: 0;
}
.alert .alert_btn button{
  margin: 10px;
  padding: 5px;
}


</style>
