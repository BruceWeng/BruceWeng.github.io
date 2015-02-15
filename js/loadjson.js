$(document).ready(function() {
    $.getJSON('https://hivelab.org/static/students.json', function(data) {
        $.each(data, function(i, item) {        
            rowNum = i;
            var $tr = $('<tr>').append(   
                $('<td>').text(item.Name),
                $('<td>').text(item.GPA),
                $('<td>').text(item.GRE_V),
                $('<td>').text(item.GRE_Q),
                $('<td>').text(item.Essay),
                $('<td>').text(item.Recom)
                ).appendTo('#tableData tbody');
        });
    });
});

function Total_Ranking() {
    var total = 0;
    var total = [];
    var i = 0;
    var n = 0;
    $('#tableData').find('tr').each(function() {
        var gpa = +$(this).find('td').eq(1).text();
        var grev = +$(this).find('td').eq(2).text();
        var greq = +$(this).find('td').eq(3).text();
        var essay = +$(this).find('td').eq(4).text();
        var recom = +$(this).find('td').eq(5).text();
        var total = (gpa/4)*0.5 + (grev+greq)/170*0.15 + (essay/5)*0.1 + (recom/10)*0.1;
        $(this).find('td').eq(5).after('<th>' + total + '</th>');
    })
       
    $("#tableData").find('tr').each(function(){
        total[n] = +$(this).find('td').eq(6).text();
        n = n+1;
        console.log(total);
    });

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
};