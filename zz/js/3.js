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
        series: [

        ],
        tooltip: {
          trigger: 'axis',
        //   axisPointer:{'type':'shadow'}
        },
        //扩大图表区域
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true//包含标签
        },
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

      }
      var li=new Array();
      for(var i=0;i<js.length;i++){
        option.series.push({
            name:js[i][0],
            type:'line',
            data:js[i].slice(2,),
            smooth: true,//平滑曲线
            symbol:'none',//不显示标记
            emphasis: {
              focus: 'series'
            },
        });
        li.push(js[i][0]);
      };
      // console.log(li);
      option.legend.push({data:li})
    option && myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
    });
};

// setTimeout(one,1000)

