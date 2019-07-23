
  function clr()
  {
  		document.getElementById("result").value="";
  		document.getElementById("total").innerHTML="";

  }
  function display(val)
  {
  	document.getElementById("result").value +=val;
 }     

function solve()
{
	var x=document.getElementById("result").value;
	var y=eval(x);
	document.getElementById("result").value = y;
	document.getElementById("total").innerHTML = "the result is "+y;

}

function decre()
{
	var decrease=document.getElementById("result").value;//for backspace button
	var strnum=decrease.toString();
	strnum = strnum.trim();
	var length = strnum.length;
	if(length>1)
	{
		strnum = strnum.substring(0,length-1);

		decrease = Number(strnum);

		document.getElementById("result").value = decrease;

	}
	else
	{
		document.getElementById("result").value = "";
	}

	//document.getElementById("total").innerHTML = "the result is "+length;

//		document.getElementById("result").value = decrease;
}
