function forblock() {
    $("for").each(function() {
        forloop = $(this).html().replaceAll("\t", "").split(/\r?\n/).filter(item => item);
        console.log(forloop);

        
        forcon = forloop[0].split("@")[1];
        forcon = forcon.replaceAll("&lt;", "<");
        forloop = forloop.slice(1);
        forloop = forloop.join('');

        if (forcon.includes("..")) {
            dotif = forcon.substring(dotif.indexOf("..") + 1, dotif.lastIndexOf(";"));
            forcon.replace(dotif, "eval(" + dotif + ")");
        }
        
        $(this).after('<div id="remove"></div>');
        finstr = "for (" + forcon + ") {$('#remove').append('" + forloop + "')}";
        eval(finstr);
        $(this).remove();

        $("#remove *").contents().each(function() {
            if($(this).text().includes("..")) {
                str = $(this).text().replaceAll("..", "")
                $(this).html(eval(str));
            }
        })
        var cnt = $("#remove").contents();
$("#remove").replaceWith(cnt);
    })
}