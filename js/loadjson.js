
function Total_Ranking(a) {
    console.log("hello");
    var total = 0;
    var total = [];
    var i = 0;
    var n = a.length;
    for(var x in a) {
        a[x][6] = a[x][1]/4*0.5 + (a[x][2] + a[x][3])/170*0.15 + a[x][4]/5*0.1 + a[x][5]/10*0.1;
        a[x][7] = -1;
    }
    var count = a.length + 1;
    var max = a[0][6];
    var index = 0;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            //console.log(a[i][6]+" "+a[j][6]);
            if( max < a[j][6] && a[j][7] == -1){
                max = a[j][6];
                index = j;
            }
        }    
        a[index][7] = i + 1;
        max = 0;
    }
    var count = 1;
    for (var i = 0; i < a.length; i++) {
        $("#tableData").append(
            "<tr>"
            + "<td>" + a[i][0] + "</td>"
            + "<td>" + a[i][1] + "</td>"
            + "<td>" + a[i][2] + "</td>"
            + "<td>" + a[i][3] + "</td>"
            + "<td>" + a[i][4] + "</td>"
            + "<td>" + a[i][5] + "</td>"
            + "<td>" + a[i][6].toFixed(3)+ "</td>"
            + "<td>" + a[i][7] + "</td>"
            + "</tr>"
            );
    }

    
       
    // $("#tableData").find('tr').each(function(){
    //     total[n] = +$(this).find('td').eq(6).text();
    //     n = n+1;
    //     console.log(total);
    // });

    // for(var j=0; j<n; j++){
    //     for(var i=0; i < n; i++){
    //         if(totalArray[i] < totalArray[i+1]){
    //             var temp = totalArray[i];
    //             totalArray[i] = totalArray[i+1];
    //             totalArray[i+1] = temp;
    //         }
    //     }       
    // }

    // $("#entrydata").find('tr').each(function(){
    //     var totalNum = +$(this).find('td').eq(6).text();

    //     for(var k=0; k<n-1; k++){
    //         if(total[k] === totalNum){
    //             var rank = 0;

    //             if (total[k] === totalArray[k+1]) {
    //                 rank = k+1;
    //                 k = k+1;
    //             }
    //             else {
    //                 rank = k+1;
    //             }   
    //         }
    //     }

    //     $(this).find('td').eq(6).after('<td>'+rank+'</td>');
    // });

    // console.log(total);
    return a;
}

$(document).ready(function() {
    $.getJSON('https://hivelab.org/static/students.json', function(data) {
        var a = new Array();
        console.log(a);
        for (var x in data) {
            var item = data[x];

            a.push([item.Name, item.GPA, item.GRE_V, item.GRE_Q, item.Essay, item.Recom]);
        }
        //$.each(data, function(i, item) {
          //  rowNum = i;
            //console.log(i + " ");

            //console.log(a[i]);
            /*var $tr = $('<tr>').append(   
                $('<td>').text(item.Name),
                $('<td>').text(item.GPA),
                $('<td>').text(item.GRE_V),
                $('<td>').text(item.GRE_Q),
                $('<td>').text(item.Essay),
                $('<td>').text(item.Recom)
                ).appendTo('#tableData tbody');*/
        //});
        a = Total_Ranking(a);
        console.log(a);
    });
});
    