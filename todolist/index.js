var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getFullYear();
var today = month + '/' + day + '/' + year;

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2],mdy[0]-1,mdy[1]);
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}
console.log(daydiff(parseDate("11/9/2016"), parseDate("11/9/2017")));

$('#mytab1 tr').each(function(){
    $(this).find('td').each(function(e){
        //do your stuff, you can use $(this) to get current cell
        if(e == 1) {
        	var due = $(this).text();
        	due = due.substring(due.indexOf(" ") + 1);
        	var priority = daydiff(parseDate(today), parseDate(due));
            if(priority < 0) {
                priority = "Hurry up and stop procrastinating";
            }
        	$(this).parent().children().eq(2).text(priority);
        }
        // console.log($(this))
        // console.log(e);
        // console.log($(this).text());
        // console.log($(this).parent().children().eq(2));
    })
})
