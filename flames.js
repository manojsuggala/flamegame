function checnum(as)
{
	var dd = as.value;

            	if(!isNaN(dd))
            	{
            		dd = dd.substring(0,(dd.length-1));
            		as.value = dd;
            	}	
}



function validate(){
        var text=document.getElementById("yname").value;
        var text2=document.getElementById("pname").value;
        if( text=='' || text2==''){
            document.getElementById("mess").innerHTML="** Please Fill The Form" ;
            alert("** Please Fill The Form");
          return false;
        }
        if(text==text2){
          document.getElementById("mess").innerHTML="** Your Name and Partner Name is Same ***Please Change It , TO PLAY";
          alert("** Your Name and Partner Name is Same ***Please Change It , TO PLAY");
          return false;
        }
        var regx = /^[A-Za-z]+$/;
        var regx1 = /^[A-Za-z]+$/;
        if(regx.test(text) && regx1.test(text2)){
          document.getElementById("1b1text").innerHTML="valid";
          document.getElementById("1b1text").style.visibility="invisible";
          document.getElementById("1b1text").style.color="green";
        }
        else{
          document.getElementById("1b1text").innerHTML="*** PLEASE CHECK YOUR NAME <br> CHANGE TO PLAY*** ";
          alert(" PLEASE CHECK YOUR NAME  CHANGE TO PLAY***");
          document.getElementById("1b1text").style.visibility="visible";
          document.getElementById("1b1text").style.color="red";
        }
        if(regx1.match(text2) ){
          document.getElementById("1b2text").innerHTML="valid";
          document.getElementById("1b2text").style.visibility="visible";
          document.getElementById("1b2text").style.color="green";
        }
        else{
          document.getElementById("1b2text").innerHTML="Invalid";
          document.getElementById("1b2text").style.visibility="visible";
          document.getElementById("1b2text").style.color="red";
        }
      }



      




function calc() 
{

	var fname = document.getElementById('yname').value;
	var sname = document.getElementById('pname').value;
	if (fname=='') {
		alert("Enter Your Name");
	}
	else if (sname=='') {
		alert("Enter Partner Name");
        }
        if(fname==sname){
                document.getElementById("mess").innerHTML="** Your Name and Partner Name is Same ***Please Change It , TO PLAY";
                alert("** Your Name and Partner Name is Same ***Please Change It , TO PLAY");
                return false;
              }
        

    var r = /\s+/g;
    var orfirst = document.first.name.value.toUpperCase();
    var nam=orfirst;
    orfirst = orfirst.replace(r,"");
    if(orfirst!="")
    {
			var count = 0;
            var first = orfirst;	
            second = eval("document.first.name"+1).value.toUpperCase();
            var names=second;
            second = second.replace(r,"");	
            if(second != "")
            {
                document.getElementById("tablid").style.display = 'block';
                    for(var xx=0; xx<first.length; xx++)
                    {
                            for(var yy=0; yy<second.length; yy++)
                            {
                                    if(first[xx] == second[yy])
                                    {
                                            var a1 = first.substring(0,xx);
                                            var a2 = first.substring(xx+1,first.length);
                                            first = a1+a2;
                                            xx=-1;
                                            var b1 = second.substring(0,yy);
                                            var b2 = second.substring(yy+1,second.length);
                                            second = b1+b2;
                                            yy=-1;
                                            break;
                                    }
                            }
                    }
            
                    var ss=(first+second);
                    var l=ss.length;
                    var ar = new Array("F", "L", "A", "M", "E", "S");
                    var stp=1;
            
                    for(var x=6; x>1; x--)
                    {
                            var g=((l%x)+stp)-1;
                            if(g>x)
                            {
                                    g=g%x;
                            }
                            if(g==0)
                            {
                                    g=ar.length;
                            }
                            ar.splice(g-1,1);
                            stp=g;
                            //alert(ar);
                    }

                    if(ar=="F")
                    {
                            //res="FRIENDS";
                                                        friends();
                                                        document.getElementById("msg").innerHTML = ' The Relationship is :<br> FRIENDS';
                                                        document.getElementById("msg").style.color='blue';  
                                                        var img = document.createElement("img");
                                                    img.src = "friends.png";
                                                  var src1 = document.getElementById("x");
                                                src1.appendChild(img);                
                    }
                    else if(ar=="L")
                    {
                            //res="LOVER";
                                                        lover();
                                                        document.getElementById("msg").innerHTML = '   The Relationship is :<br> LOVER';
                                                        document.getElementById("msg").style.color='#FF0080';
                                                        var img = document.createElement("img");
                                                        img.src = "lover.png";
                                                      var src1 = document.getElementById("x");
                                                      src1.appendChild(img);
                    }
                    else if(ar=="A")
                    {
                            //res="AFFECTION";
                                                        afection();
                                                        document.getElementById("msg").innerHTML = '    The Relationship is :<br>  AFFECTION';
                                                        document.getElementById("msg").style.color='#DBA901';
                                                        var img = document.createElement("img");
                                                        img.src = "affection.jpg";
                                                      var src1 = document.getElementById("x");
                                                      src1.appendChild(img);
                    } 
                    else if(ar=="M")
                    {
                            //res="MARRIAGE";
                                                        marriage();
                                                        document.getElementById("msg").innerHTML = '  The Relationship is :<br> MARRIAGE';
                                                        document.getElementById("msg").style.color='green';
                                                        var img = document.createElement("img");
                                                        img.src = "marriage.jpg";
                                                      var src1 = document.getElementById("x");
                                                      src1.appendChild(img);
                    }
                    else if(ar=="E")
                    {	
                            //res="ENEMY";
                                                        enemy();
                                                        document.getElementById("msg").innerHTML = '    The Relationship is :<br> ENEMY';
                                                        document.getElementById("msg").style.color='red';
                                                        var img = document.createElement("img");
                                                        img.src = "enemies.jpg";
                                                      var src1 = document.getElementById("x");
                                                      src1.appendChild(img);
                    }
                    else if(ar=="S")
                    {
                            //res="SISTER";
                                                       sister();
							document.getElementById("msg").innerHTML = '    The Relationship is :<br>  SISTER';
                                                        document.getElementById("msg").style.color='violet';
                                                        var img = document.createElement("img");
                                                        img.src = "sister.png";
                                                      var src1 = document.getElementById("x");
                                                      src1.appendChild(img);
                    }
                    document.getElementById("nam"+1).style.display = 'block';
                    document.getElementById("nam"+1).textContent=nam + " & " +names;
            }
            else
            {
                    document.getElementById("nam"+1).style.display = 'none';
                    count++; 
                    if(count==4)
                    {
                            alert("Enter anyone of your partner name");
                            document.getElementById("tablid").style.display = 'block';
                    }
            }          
    }
    else
    {
            return false;
    }
}


function friends() {
        var sound = new Audio("hfriend.mp3");
        sound.play();
        
      }
      function lover() {
        var sound = new Audio("Love.mp3");
        sound.play();
      
      }
      function afection() {
        var sound = new Audio("affection.mp3");
        sound.play();
       
      }
      function marriage() {
        var sound = new Audio("marriage.mp3");
        sound.play();
       
      }
      function enemy() {
        var sound = new Audio("enemies.mp3");
        sound.play();
       
      }
      function sister() {
        var sound = new Audio("sister.mp3");
        sound.play();
        
      }
      
