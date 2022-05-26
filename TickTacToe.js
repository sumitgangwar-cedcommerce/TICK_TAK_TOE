function reset(){
    for(i=1;i<10;i++){
        t = "id"+i;
        document.getElementById(t).value="";
        document.getElementById(t).disabled = false;
        document.getElementById("out").innerHTML="";
    }
}
function block(){
    for(i=1;i<10;i++){
        t = "id"+i;
        document.getElementById(t).disabled = true;
    }
}
var temp="X";
function put(id){
    if (temp == "X"){
        document.getElementById(id).value=temp;
        document.getElementById(id).disabled = true;
        if(is_over()){
            document.getElementById("out").innerHTML="Player X Won";
            block();
        }
        else if(is_full()){
            document.getElementById("out").innerHTML="Match Tie";
        }      
        temp="O";
    }
    else{
        document.getElementById(id).value=temp;
        document.getElementById(id).disabled = true;
        if(is_over()){
            document.getElementById("out").innerHTML="Player O Won";
            block();
        }
        else if(is_full()){
            document.getElementById("out").innerHTML="Match Tie";
        }
        temp="X";
    }
}
var arr = [];
function is_over(){
    
    for(i=1;i<10;i++){
        cc = "id"+i;
        arr[i] = document.getElementById(cc).value;
        // console.log(arr[i]);
    }

    if(row_check() || col_check() || dia_check()){
        // console.log("True")
        return true;
    }    
    else{
        // console.log("False");
        return false;
    }
}

function is_full(){
    for(i=1;i<10;i++)   if(arr[i]=="")  return false;
    return true;
}

function row_check(){
    if(arr[1]==arr[2] && arr[2]==arr[3] && arr[1]!="")    return true;
    if(arr[4]==arr[5] && arr[5]==arr[6] && arr[4]!="")    return true;
    if(arr[7]==arr[8] && arr[8]==arr[9] && arr[7]!="")    return true;
    return false;
}
function col_check(){
    if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!="")    return true;
    if(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!="")    return true;
    if(arr[3]==arr[6] && arr[6]==arr[9] && arr[3]!="")    return true;
    return false;
}
function dia_check(){
    if(arr[1]==arr[5] && arr[5]==arr[9] && arr[1]!="")  return true;
    if(arr[3]==arr[5] && arr[5]==arr[7] && arr[3]!="")   return true;
    return false;
}