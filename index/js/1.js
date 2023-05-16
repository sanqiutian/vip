function ace1(a=0){
    var xz=text()['a0'][0];
    var js=text()['a0'][a+1];
    var myChart=echarts.init(document.getElementById('a'));
    option = {
        color:['#F47100'],
        xAxis: {
          type: 'category',
          data: xz.slice(1,),//列表从索引1开始往后切片。x轴标签
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:js[0],
            data: js.slice(1,),
            type: 'line',
            symbol:'triangle',//不显示标记
            label: {//显示图表数值
              show: true,
              position: 'top'
            },
          }
        ],
        legend:{
          data:[js[0]]
        },
        tooltip: {
          trigger: 'axis',
          axisPointer:{'type':'cross'}
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
        title:{text:"1、类目周转"}
      };
    option && myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
    });
};
// setTimeout(one,1000)

