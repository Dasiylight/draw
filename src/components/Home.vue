<script>
import axios from 'axios'
export default {
  name:'home',
  data(){
    return{
      userId:this.$route.params.userId?this.$route.params.userId:1
    }
  },
  methods:{
    toNext(){
      this.$router.push({
          name:'frail',
          params:{userId:this.userId}
      })
    }
  }
}
</script>
<template>
  <body>
    <el-header class="title">Rapid Geriatric Assessment</el-header>
    <img src="/health.jpg"/>
    <div style="height:5vh"></div>
    <el-form>
    <el-form-item label="Please input your ID" style="width:35vw;margin:auto;font-size:3vh">
      <el-input 
        type="number" 
        min=0 
        v-model="userId" 
        placeholder="Please input your id" 
      />
    </el-form-item>
    </el-form>
    <div style="height:5vh"></div>

    <el-button type="primary" @click="toNext" >
      Start!
    </el-button>
  </body>
</template>

<style scoped>
.title{
  font-size: 4vh;
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
}

.card{
  border-radius: 10%;
  /* border: none; */
}
</style>