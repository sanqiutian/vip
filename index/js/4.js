







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
        title:{text:"4、商品库存"},
        yAxis: {
          type: 'value'
        },
        legend:[],
        color:JSON.parse(JSON.stringify(colors)).splice(inde,),
        
        series: [

        ],
        tooltip: {
          trigger: 'item',
          axisPointer:{'type':'shadow'}
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
            itemStyle:{borderRadius:[35]},

        });
        li.push(js[i][0]);
      };
      // console.log(li);
      option.legend.push({data:li,right:'0',itemWidth:5,itemHeight:14,width:'100%'})
    option && myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
    });
};

// setTimeout(one,1000)

