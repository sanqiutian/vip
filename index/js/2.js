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
        title:{text:"2、类目实发和均库存"},
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'实发',
            data: js1.slice(1,),
            type: 'bar',
            label: {//显示图表数值
              show: true,
              position: 'top'
            },
            itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                          offset: 0,
                          color: '#5C41FF',
                      },
                      {
                          offset: 1,
                          color: 'rgba(227, 227, 227,0.3)',
                      },
                  ]),
                  barBorderRadius: 6,
              },
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
            itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                          offset: 0,
                          color: '#419FFF',
                      },
                      {
                          offset: 1,
                          color: 'rgba(227, 227, 227,0.3)',
                      },
                  ]),
                  barBorderRadius: 6,
              },
          },
          },
          
        ],
        legend:{
          data:['实发','平均库存',],
          selected:{"平均库存":false}
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

