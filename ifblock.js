function ifblock() {
    //Looking for each <if> in the body and execute the following code for each
    $("if").each(function() {
        //We store the content of the <if> and store each line as an array, then removing the empty lines
        base = $(this).html().replaceAll("\t", "").split(/\r?\n/).filter(item => item);
        //Declaring all the array to know what this line is. 
        //example: "type[]" determine if the instruction is a if, elseif or else, 
        //          or "nothing" (nothing is when it's not a condition but the code to actually execute)
        const type = [];
        const append = [];
        const value = [];



const store = [];
let current = "";
// Grouping multiple lines if this happens
for (let i = 0; i < base.length; i++) {
if(base[i].slice(0, 1) == "@"){
    if(current.length) store.push(current.join(''))
    current = [];
    store.push(base[i]);
} else if (base[i].slice(0, 1) == "<") {
   current.push(base[i])
}
}
if(current != "") {
store.push(current);
}



        //A loop for every lines
        for (let i = 0; i < store.length; i++) {

            //Detect if the line is if
            if(store[i].slice(0, 3) == "@if") {
                type.push("if");
                append.push("nothing");
                value.push(store[i].split("@if ")[1]);

                //Detect if the line is elseif
            } else if(store[i].slice(0, 7) == "@elseif") {
                type.push("elseif");
                append.push("nothing");
                value.push(store[i].split("@elseif ")[1]);

                //Detect if the line is else
            } else if(store[i].slice(0, 5) == "@else") {
                type.push("else");
                append.push("nothing");
                value.push(store[i].split("@else ")[1]);

                //In this case the line is not a condition but the HTML line we want to append
            } else {
                type.push("append");
                append.push(store[i]);
                value.push("nothing");
            }
        }

        //Trying to know how many "elseif" there is in the <if> HTML block
        var count = 0;
        for (let i = 0; i < store.length; i++) {
            if(type[i] == "elseif") {
                count++;

            }
            
        }

        
        //Putting everything together in a string
        final = "if(" + value[0] + ") {$(this).after('" + append[1] + "');}"
        for (let i = 0; i < store.length; i++) {
            after = i + 1
            if(type[i] == "elseif") {
                final+= "else if (" + value[i] + ") {$(this).after('" + append[after] + "');}" 
            } else if(type[i] == "else") {
                final+= "else {$(this).after('" + append[after] + "');}"
            }
        }
        //Now that the full condition is stored in the string, we can execute it.. but it's not working
        eval(final);
        $(this).remove();
    })

}