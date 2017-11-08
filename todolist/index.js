var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

$('#mytab1 tr').each(function(){
    $(this).find('td').each(function(e){
        //do your stuff, you can use $(this) to get current cell
        if(e == 1) {
        	var due = $(this).text();
        	due = due.substring(due.indexOf("/") + 1);
        	var priority = due - day
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
