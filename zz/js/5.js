function ace5(){
    var js=text()['a5'];
    var mychart=echarts.init(document.getElementById('ace5'));
    mychart.resize();
    mychart.clear()
    var option={
        xAxis: {
            type: 'category',
            data: text()['a1'][0].slice(1,),
            boundaryGap:false,
            splitLine:{
                show:true
            }
          },
          yAxis: {
            type: 'value',
            splitLine:{
                show:false
            },
            axisLabel:{show:false}
          },
          series: [
            {
              data: js[0],
              type: 'line',
              label:{show:true},
              symbol: 'diamond',
              symbolSize: 20,
              lineStyle: {
                color: '#5470C6',
                width: 4,
                type: 'dashed'
              },
              itemStyle: {
                borderWidth: 3,
                borderColor: '#EE6666',
                color: 'yellow'
              }
            }
          ],
          title:{
            text:'所有商品周转'
          },
          tooltip:{
            trigger:"axis",
            axisPointer:{type:"shadow"}
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true//包含标签
          },
    }
    option && mychart.setOption(option);
    window.addEventListener('resize', function () {
        mychart.resize();
    });
};
function ace6(){
    var js=text()['a5'];
    var mychart=echarts.init(document.getElementById('ace6'));
    mychart.resize();
    mychart.clear()
    var option={
        xAxis:[
            { type: 'category', gridIndex: 0,data: js[3] },
            { type: 'category', gridIndex: 1,data: js[4] }
          ],
          yAxis: [
            { gridIndex: 0,splitLine:{show:false} },
            { gridIndex: 1 ,splitLine:{show:false}}
            ],
          grid: [
            { bottom: '55%',top:'10%',right:'3%'}, 
            { top: '55%',bottom:'10%',right:'3%'}
        ],
          series: [
            {
              data: js[1],
              type: 'bar',
              showBackground: true,
              label:{show:true,position: 'top'},
              color:'#5e8f78'
            },
            {
              data: js[2],
              type: 'bar',
              showBackground: true,
              xAxisIndex: 1,
              yAxisIndex: 1,
              label:{show:true,position: 'top'},
              color:'#cf7861'
            }
          ],
          tooltip:{
            trigger:"axis",
            axisPointer:{type:"shadow"}
          },
          title:{text:'实发和均库存'}
    }
    option && mychart.setOption(option);
    window.addEventListener('resize', function () {
        mychart.resize();
    });

}
