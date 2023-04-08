function add(){

    
    var last = 0,b=0;

    //save the value in the last
    last = f.text1.value;
    // alert(last);
    // if(last.charAt(1)=='+'||last.charAt(1)=='-'||last.charAt(1)=='*'||last.charAt(1)=='/'){
    //     f.text1.value='';
    // }
    //check the last element == +,-,*,/
    //bcs if i entered + and again iam choosing - it needs to revert to -

    b=last.charAt(last.length-1);

    if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.text1.value = last.substring(0,last.length - 1);
        f.text1.value+='+';
    }
    else{
        f.text1.value+='+';
    }


    //get the number without the +,-,*,/ then get till last number

}

function sub(){

    var last = 0,b=0;

    last = f.text1.value;

    b=last.charAt(last.length-1);

    if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.text1.value = last.substring(0,last.length - 1);
        f.text1.value+='-';
    }
    else{
        f.text1.value+='-';
    }
}

function mul(){

    var last = 0,b=0;
    
    last = f.text1.value;

    b=last.charAt(last.length-1);

    if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.text1.value = last.substring(0,last.length - 1);
        f.text1.value+='*';
    }
    else{
        f.text1.value+='*';
    }
}

function div(){

    var last = 0,b=0;

    last = f.text1.value;

    b=last.charAt(last.length-1);

    if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.text1.value = last.substring(0,last.length - 1);
        f.text1.value+='/';
    }
    else{
        f.text1.value+='/';
    }
}