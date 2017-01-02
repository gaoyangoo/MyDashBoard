/**
 * Created by alex on 2017/1/2.
 */

myApp.controller("echartsCtrl", function ($scope) {

    $scope.init = function () {

        var part1Dom = document.getElementById("echart-part1");
        var part1Echart=echarts.init(part1Dom);
        var option = {
            tooltip: {
                show: true
            },
            legend: {
                data: ['销量']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    "name": "销量",
                    "type": "bar",
                    "data": [5, 20, 40, 10, 10, 20]
                }
            ]
        };
        part1Echart.setOption(option);
    }

});