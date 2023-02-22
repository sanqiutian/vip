function ace2(a=0){
    var xz=text()['a1'][0];
    var js=text()['a1'][a+1];
    var js1=text()['a2'][a+1];
    var myChart=echarts.init(document.getElementById('b'));
    myChart.clear()
    option = {
        xAxis: {
          type: 'category',
          data: xz.slice(1,),
        },
        title:{text:"2、类目销量和均库存"},
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'销售出仓',
            data: js1.slice(1,),
            type: 'bar',
            label: {//显示图表数值
              show: true,
              position: 'top'
            },
          },
          {
            name:'平均库存',
            data: js.slice(1,),
            type: 'bar',
            label: {//显示图表数值
              show: true,
              position: 'top'
            },
          },
          
        ],
        legend:{
          data:['销售出仓','平均库存',]
        },
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
        toolbox: {
          feature: {
            // dataZoom:{},//缩放
            magicType: {type: ['line', 'bar'] },//开启折线和柱状转换
            // restore: {},//开启恢复
            dataView: {},//开启展示数据源
            saveAsImage: {},//开启下载
            
          }
        },

      };
    option && myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
    });
};

// setTimeout(one,1000)

