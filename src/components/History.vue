<script>

import * as echarts from 'echarts';
import axios from 'axios'
export default {

    data(){
      return{
        time:[],
        frail:[],
        rcs:[],
        snaq:[],
        clock:[],
        sarcf:[],
        userId:this.$route.params.userId?this.$route.params.userId:955
      }
    },
    methods:{
          echartInit(){
            console.log(this.sarcf)
       		var myChart = echarts.init(document.getElementById('main'));
        	// 指定图表的配置项和数据
        	var option = {
            title: {
              text: 'History Data'
            },
            legend: {
              // Try 'horizontal'
              orient: 'vertical',
              right: 10,
              top: 'center'
            },
            tooltip: {},
            xAxis: {
              data: this.time
            },
            yAxis: {},
            series: [
              {
                name: 'Frail Score',
                type: 'line',
                data: this.frail
              },
              {
                name: 'Sarcf Score',
                type: 'line',
                data: this.sarcf
              },
              {
                name: 'Snaq Score',
                type: 'line',
                data: this.snaq    
              },
              {
                name: 'Rcs Score',
                type: 'line',
                data: this.rcs  
              },
              {
                name: 'Clock Score',
                type: 'line',
                data: this.clock 
              }
            ]
	        };
	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
   		}
    },
    //onMounted
    	mounted(){
        let url = '/api/main/ans/getHistory/' + this.userId
        axios.get(
          url
        ).then((res)=>{
          console.log(res.data)
          if (res.data.data && res.data.data.length>0){
            for(let list of res.data.data){
              for (let val of list){
                switch(val.quesPid){
                  case(1):{
                    this.time.push(val.createTime)
                    this.frail.push(val.score)
                    break;
                  }
                  case(2):{
                    this.sarcf.push(val.score)
                    break;
                  }
                  case(3):{
                    this.snaq.push(val.score)
                    break;
                  }
                  case(4):{
                    if(val.score=='-1'){
                      this.clock.push(val.clockState==1?0:4)
                    }else{
                      this.rcs.push(val.score)
                    }
                    break;
                  }
                }
              }
            }
          }
          this.echartInit()

    	})

  }
}
</script>
<template>
  <body>
  <div class="map">
    
     <div id="main" style="width: 100%; height: 600px;">
    </div>
  </div>
  </body>
</template>
