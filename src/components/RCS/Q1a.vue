<template>
  <div>
    <p id='title'>
      What were the five objects I asked you to remember in Q1 ?
    </p>
    <el-row :gutter='20' :justify='center' id='row'>
      <el-col :span=4>
        <el-input v-model="obj1" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj2" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj3" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj4" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj5" id='input'></el-input>
      </el-col>
    </el-row>
    <el-button type="primary"  @click="onsubmit" id='button'>
      Next
    </el-button>
  </div>
</template>

<script>
import axios from 'axios'
import { ElLoading } from 'element-plus'

export default{
  data(){
    return{
      userId:this.$route.params.userId?this.$route.params.userId:999,
      obj1:'',
      obj2:'',
      obj3:'',
      obj4:'',
      obj5:''
    }
  },
  methods: {
    onsubmit(){
      let res = ['apple','pen','tie','house','car']
      let data = [this.obj1, this.obj2,this.obj3,this.obj4,this.obj5]
      let score = 0
      data.map((val)=>{
        let temp = res.indexOf(val.toLowerCase())
        if(temp!=-1){
          score++;
          res.splice(temp,1)
        }
      });
      console.log(score)
      let toSend = [{
        userId: this.userId,
        quesId: 15,
        answer: score,
        quesPid: 4
      }]
      let userId = this.userId 
      let url = '/api/main/ans/checkClock/' + userId
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      axios.post(
        '/api/main/ans/addAnswer',toSend
      ).then(()=>{
        axios.get(
            url
          ).then((res)=>{
            console.log(res)
            loading.close()
            this.$router.push({name:'res',params:{isPass:res.data.message,userId:userId}});
          })
        })
    }
  }
}
</script>
<style>
#input{
  width: 13vw;
  height: 8vh;
  font-size: 2vw;
  text-align: center;
  padding-top: 1vh;
}
#row{
  margin-top: 8vh;
  display:flex;
  justify-content: center;
}
#title{
  font-size: 2vw;
}
#button{
  position: absolute;
  bottom:10vh
}
</style>>