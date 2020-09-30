<template>
  <div class="tellist">
    <Mytelhead></Mytelhead>
    <div class="list">
      <ul v-for="item in userData" @touchmove="bMove=true" class="list-ul">
          <h6 ref="listsix">{{item.index}}</h6>
          <li class="div" @touchend="showTel(user.tel)" v-for="user in item.users">{{user.name}}
          </li>
      </ul>
      <ul class="list-index" ref="listIndex">
        <li @touchstart="setScroll($event)" v-for="item in userIndex">{{item}}</li>
      </ul>
    </div>
    <Mytelbox custom-title="呼叫">
      <div class="">
          <!-- <button v-if="confirmBtn" @touchstart="confirmBtn()">确定</button>
          <button v-if="cancelBtn" @touchstart="cancelBtn()">取消</button> -->
          <mt-button size="small" @touchstart.native="confirmBtn()">确定</mt-button>
          <mt-button size="small" @touchstart.native="cancelBtn()">取消</mt-button>
      </div> 
    </Mytelbox>
  </div>
</template> 
<script>
var userData = [
  {
    "index":"A",
    "users":[
      {
        "name":"a1",
        "tel":"13000000001"
      }, 
      {
        "name":"a2",
        "tel":"13000000002"
      },
      {
        "name":"a3",
        "tel":"13000000003"
      },
      {
        "name":"a4",
        "tel":"13000000014"
      },
      {
        "name":"a1",
        "tel":"13000000001"
      }, 
      {
        "name":"a2",
        "tel":"13000000002"
      },
      {
        "name":"a3",
        "tel":"13000000003"
      },
      {
        "name":"a4",
        "tel":"13000000014"
      },
      {
        "name":"a1",
        "tel":"13000000001"
      }, 
      {
        "name":"a2",
        "tel":"13000000002"
      },
      {
        "name":"a3",
        "tel":"13000000003"
      },
      {
        "name":"a4",
        "tel":"13000000014"
      }
    ]
  },
   {
    "index":"B",
    "users":[
      {
        "name":"b1",
        "tel":"13000000004"
      }, 
      {
        "name":"b2",
        "tel":"13000000005"
      },
      {
        "name":"b3",
        "tel":"13000000006"
      },
      {
        "name":"b4",
        "tel":"13000000007"
      }
    ]
  },
   {
    "index":"C",
    "users":[
      {
        "name":"C1",
        "tel":"13000000004"
      }, 
      {
        "name":"C2",
        "tel":"13000000005"
      },
      {
        "name":"C3",
        "tel":"13000000006"
      },
      {
        "name":"C4",
        "tel":"13000000007"
      },
      {
        "name":"C1",
        "tel":"13000000004"
      }, 
      {
        "name":"C2",
        "tel":"13000000005"
      },
      {
        "name":"C3",
        "tel":"13000000006"
      },
      {
        "name":"C4",
        "tel":"13000000007"
      },
      {
        "name":"C1",
        "tel":"13000000004"
      }, 
      {
        "name":"C2",
        "tel":"13000000005"
      },
      {
        "name":"C3",
        "tel":"13000000006"
      },
      {
        "name":"C4",
        "tel":"13000000007"
      }
    ]
  },
   {
    "index":"D",
    "users":[
      {
        "name":"D1",
        "tel":"13000000004"
      }, 
      {
        "name":"D2",
        "tel":"13000000005"
      },
      {
        "name":"D3",
        "tel":"13000000006"
      },
      {
        "name":"D4",
        "tel":"13000000007"
      }
    ]
  },
   {
    "index":"E",
    "users":[
      {
        "name":"E1",
        "tel":"13000000004"
      }, 
      {
        "name":"E2",
        "tel":"13000000005"
      },
      {
        "name":"E3",
        "tel":"13000000006"
      },
      {
        "name":"E4",
        "tel":"13000000007"
      },
      {
        "name":"E1",
        "tel":"13000000004"
      }, 
      {
        "name":"E2",
        "tel":"13000000005"
      },
      {
        "name":"E3",
        "tel":"13000000006"
      },
      {
        "name":"E4",
        "tel":"13000000007"
      },
      {
        "name":"E1",
        "tel":"13000000004"
      }, 
      {
        "name":"E2",
        "tel":"13000000005"
      },
      {
        "name":"E3",
        "tel":"13000000006"
      },
      {
        "name":"E4",
        "tel":"13000000007"
      },
      {
        "name":"E1",
        "tel":"13000000004"
      }, 
      {
        "name":"E2",
        "tel":"13000000005"
      },
      {
        "name":"E3",
        "tel":"13000000006"
      },
      {
        "name":"E4",
        "tel":"13000000007"
      }
    ]
  }
]
import Mytelbox from "./Mytelbox.vue"
import Mytelhead from "./Mytelhead.vue"
import busVM from "./busVM.js"
export default {
  name: 'Mytellist',
  data () {
    return {
      userData: userData,
      bMove : false
    }
  },
  computed:{
    userIndex(){
      return this.filterIndex(this.userData)
    }
  },
  methods:{
    filterIndex(data){
      let result = [];
      for(let i=0;i<data.length;i++){
        if(data[i].index){
          result.push(data[i].index);
        }
      }
      return result;
    },
    setlistpos(){
      let ih = this.$refs.listIndex.offsetHeight;
      this.$refs.listIndex.style.marginTop = -ih/2+"px"
    },
    setScroll(ev){
      console.log(ev.target.innerHTML)
      var six = this.$refs.listsix
      for (var i = 0; i < six.length; i++) {
        if(six[i].innerHTML == ev.target.innerHTML){
          // document.body.scrollTop = six[i].offsetTop;
          window.scrollTo({
            top:six[i].offsetTop,
            behavior:'smooth'
          })
        }
      }
    },
    showTel(tel){
      if(!this.bMove){
        busVM.$emit("changeEvent",tel)
      }else{
        this.bMove = false
      }
      
    },
    confirmBtn(){
      alert("确定了")
      this.$children[1].$el.style.display="none"
    },
    cancelBtn(){
     this.$children[1].$el.style.display="none"
    }
  },
  mounted(){
    this.setlistpos();
  },
  components:{
    Mytelbox,
    Mytelhead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  position: relative;
  top: 50px;
  overflow: hidden;
}
.list-ul li{
  list-style: none;
  text-align: left;
  padding: 10px 0;
  font-size: 18px;
  text-indent: 20px;
}
.list-ul li:nth-child(odd){
  background-color: #efefef;
}
.list-ul h6{
  margin: 5px 0;
  text-align: left;
  text-indent: 10px;
  background-color: #cecece;
}
.list .list-index {
  position: fixed;
  right: 10px;
  top:50%;
  font-size:18px;
}
.list .list-index li {
  margin: 5px 0;
}
</style>
