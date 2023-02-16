function ace4(a=0){
    var xz=text()['a1'][0].slice(1,);
    for(i=0;i<xz.length;i++){
      xz[i]=xz[i]+'库存'
    }
    var js=text()['a4'][a];
    var myChart=echarts.init(document.getElementById('d'));
    myChart.clear()
    option = {
        xAxis: {
          type: 'category',
          data:xz,
        },
        yAxis: {
          type: 'value'
        },
        legend:[],
        series: [

        ],
        tooltip: {
          trigger: 'axis',
          axisPointer:{'type':'shadow'}
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
      var li=new Array();

      for(var i=0;i<js.length;i++){
        option.series.push({
            name:js[i][0],
            type:'bar',
            data:js[i].slice(2,),
            // label: {//显示图表数值
            //     show: true,
            //     position: 'top'
            //   },

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

