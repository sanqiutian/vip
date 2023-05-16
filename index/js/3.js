var arr1=['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc','#0000CC','#00FF00','#FF00FF']


var colors=[]
while(arr1.length){
    var index=parseInt(Math.random()*arr1.length)
    colors=colors.concat(arr1.splice(index,1))
}
var inde=0

function ace3(a=0){
    var xz=text()['a1'][0].slice(1,);
    for(i=0;i<xz.length;i++){
      xz[i]=xz[i]+'实发'
    }
    var js=text()['a3'][a];
    var myChart=echarts.init(document.getElementById('c'));
    myChart.clear();
    option = {
        xAxis: {
          type: 'category',
          data:xz,
        },
        title:{text:"3、商品实发"},
        yAxis: {
          type: 'value'
        },
        legend:[],
        color:JSON.parse(JSON.stringify(colors)).splice(inde,),
        series: [

        ],
        tooltip: {
          trigger: 'item',
        //   axisPointer:{'type':'shadow'}
        },
        //扩大图表区域
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true//包含标签
        },
        dataZoom:[
          { 
              type:'inside',
          } 
      ],
        // toolbox: {
        //   feature: {
        //     dataZoom:{},//缩放
        //     magicType: {type: ['line', 'bar'] },//开启折线和柱状转换
        //     restore: {},//开启恢复
        //     dataView: {},//开启展示数据源
        //     saveAsImage: {},//开启下载
            
        //   }
        // },

      };
    //   console.log(js[0]);
      for (var i = 0; i < option.series.length; i++) {
        option.series[i].data=[];
        option.series[i].name='';
        option.legend.data=""
      }
      var li=new Array();
      for(var i=0;i<js.length;i++){
        option.series.push({
            name:js[i][0],
            type:'line',
            data:js[i].slice(2,),
            smooth: true,//平滑曲线
            //symbol:'none',//不显示标记
            emphasis: {
              focus: 'series'
            },
            areaStyle:{
              color:new echarts.graphic.LinearGradient(0,0,0,1,[
                  {offset:0,color:colors[inde+i]},
                  {offset:1,color:"white"}
              ])
          }
        });
        li.push(js[i][0]);
      };
      // console.log(li);
      option.legend.push({data:li,right:'0'})
    option && myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
    });
};

// setTimeout(one,1000)
