/**
 * Created by gy on 2016/12/22.
 */
myApp.factory("randomColor", function () {
    //use the classic color
    var colorTemp=[
        "#2ecc71",
        "#3498db",
        "#e74c3c",
        "#8e44ad",
        "#d35400",
        "#2c3e50",
        "#95a5a6",
        "#16a085",
        "#ecf0f1",
        "#f39c12",
        "#16a085",
        "#c0392b",
        "#34495e",
        "#9b59b6"
    ];
    return {
        getColor: function (len) {
            var color=[];
            if(len<=colorTemp.length){
                for(var i=0;i<len;i++){
                    color.push(colorTemp[i]);
                }
            }
            else{
                for(var j=0 ;j<(len/colorTemp).length;j++){
                    color.push(colorTemp);
                }
                for(var k=0;k<len%(colorTemp.length);k++){
                    color.push(colorTemp[k]);
                }
            }
            return color;
        }
    }
});