<script>
import axios from 'axios'
export default {
  name:'result',
  data(){
    return{
      frailScore:0,
      sarcfScore:0,
      snaqScore:0,
      rcsScore:0,
      isPass:false,
      isFrail: false,
      isSarcf: false,
      isSnaq: false,
      isDementia: false,
      isHealthy: true,
      userId:this.$route.params.userId?this.$route.params.userId:999
    }
  },
  methods:{
    toNext(){
      this.$router.push({
          name:'history',
          params:{userId:this.userId}
      })
    }
  },
  mounted(){
    console.log(this.$route.params.isPass)
    if (this.$route.params.isPass == 'Pass'){
      this.isPass = true
    }else if(this.$route.params.isPass == 'Fail'){
      this.isPass = false
    }
    let url = '/api/main/res/getResult/' + this.userId
    axios.get(
      url
    ).then((res)=>{
      for (let val of res.data){
        if (val.parId == 1){
          this.frailScore = val.score
        }else if(val.parId == 2){
          this.sarcfScore = val.score
        }else if(val.parId == 3){
          this.snaqScore = val.score
        }else{
          this.rcsScore = val.score
        }
      }
      if (this.frailScore >= 3){
        this.isFrail = true
      }
      if (this.snaqScore <= 14){
        this.isSnaq = true
      }
      if (this.sarcfScore >= 4){
        this.isSarcf = true
      }
      if (this.rcsScore <= 5){
        this.isDementia = true
      }
      if (this.isFrail || this.isSnaq || this.isDementia || this.isSarcf){
        this.isHealthy = false
      }
    })

  }
}
</script>
<template>
  <body>
    <el-container>
      <el-header class="title">
        Result
      </el-header>
      <el-main>
        <el-result
          :icon='isHealthy?  "success":"warning"'
          title='Healthy'
          sub-title="Please follow the instructions"
        />
        <el-row :gutter='20'>
        <el-col :span="6">
          <el-card class="card">
            <el-progress type='circle' :percentage='100-frailScore*20' :status="isFrail ? 'warning':'success'" />
            <p style="font-weight:bold">FRAIL test</p>
            <p>You are in prefrail situation</p>            
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="card">
            <el-progress type='circle' :percentage='100-sarcfScore*20' :status='isSarcf ? "warning":"success"' />
            <p style="font-weight:bold">Screen for Sarcopenia</p>
            <p>You do not have Sarcopenia</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="card">
            <el-progress type='circle' :percentage='snaqScore*5' :status='isSnaq ? "warning":"success"' />
            <p style="font-weight:bold">Nutritional Assessment</p>
            <p>You are in good Nutritional situation</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="card">
            <el-progress  type='circle' :percentage='80'  :status='isPass ? "success":"warning"' />
            <p style="font-weight:bold">Rapid Cognitive Screen (Clock check)</p>
            <p v-if="isPass">Pass the clock check</p>
            <p v-else>Clock check failed</p>
          </el-card>
        </el-col>
      </el-row>
      <div style="height:10vh"/>
      <el-button type="primary" @click="toNext" >
        History
      </el-button>
      </el-main>
    </el-container>
  </body>
</template>

<style scoped>
.title{
  font-size: 3vh;
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
}

.card{
  border-radius: 10%;
  /* border: none; */
}
</style>