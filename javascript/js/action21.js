var val1 =0; //global variables
var val2 = 0; //global variable
var x;
var op;
var PLUS = false, MINUS = false, MUL=false, DIVISION = false , MOD = false, PER = false;//for indication of action e.g. plus, minus


function display(val)
 {
  	document.getElementById("header").innerHTML += val;
  	
 }

 function clr()
 {
 	document.getElementById("header").innerHTML = "";
 	document.getElementById("result").innerHTML = "";
 }




function plus()
{
	val1 = document.getElementById("header").innerHTML;
	//val1 = val1.tostring();

	//document.write(val1);
	document.getElementById("header").innerHTML = "";
	//val2 = document.getElementById("header").innerHTML;

	//val1 = Number(val1)
	//val2 = Number(val2)
	
	PLUS = true;

	//document.getElementById("header").innerHTML = "";




}
function mul()
{
	val1 = document.getElementById("header").innerHTML;
	document.getElementById("header").innerHTML = "";
	MUL = true;


}
function division()
{
	val1 = document.getElementById("header").innerHTML;
	document.getElementById("header").innerHTML = "";
	DIVISION = true;
}
function minus()
{
	val1 = document.getElementById("header").innerHTML;
	document.getElementById("header").innerHTML = "";
	MINUS = true;
}
function solve()
{
	if(PLUS == true)
	{
		val1 = val1.trim();
		val1 = Number(val1)

		val2 = document.getElementById("header").innerHTML;
		val2=val2.trim();
		val2 = Number(val2);
		x = val1 + val2;
		document.getElementById("header").innerHTML = x;
		op = '+';

		//document.write(x);
		//document.getElementById("header").innerHTML = x.tostring();

	}
	if(MINUS == true)
	{
		val1 = val1.trim();
		val1 = Number(val1);
		val2 = document.getElementById("header").innerHTML;
		val2=val2.trim();
		val2 = Number(val2);
		x = val1 - val2;
		document.getElementById("header").innerHTML = x;
		op = '-';

	}
	if(MUL == true)
	{
		val1 = val1.trim();
		val1 = Number(val1);
		val2 = document.getElementById("header").innerHTML;
		val2=val2.trim();
		val2 = Number(val2);
		x = val1*val2;
		document.getElementById("header").innerHTML = x;
		op = '*';

	}
	if(DIVISION == true)
	{
		val1 = val1.trim();
		val1 = Number(val1);
		val2 = document.getElementById("header").innerHTML;
		val2=val2.trim();
		val2 = Number(val2);
		x = val1 / val2;
		//x = x.parseFloat()
		x = x.toFixed(2);
		document.getElementById("header").innerHTML = x;
		op = '/';

	}
	if (MOD == true) 
	{
		val1 = val1.trim();
		val1 = Number(val1);
		val2 = document.getElementById("header").innerHTML;
		val2=val2.trim();
		val2 = Number(val2);
		x = val1 % val2;
		document.getElementById("header").innerHTML = x;
		op = '%';
	}

	if(PER == true)
	{

		val1 = val1.trim();
		val1 = Number(val1);
		val2 = document.getElementById("header").innerHTML;
		val2 = val2.trim();
		val2 = Number(val2);
		x = val1 / val2;
		x = x*100;
		x = x.toFixed(2)+"%";
		document.getElementById("header").innerHTML = x;
		op = "%";
	}

	document.getElementById("result").innerHTML = val1+""+op+""+val2+" = "+x;
}


function backspace()
{
	var decrease=document.getElementById("header").innerHTML;//local variable
	var strnum=decrease.toString();//local variable
	strnum = strnum.trim();
	var length = strnum.length;
	if(length>1)
	{
		strnum = strnum.substring(0,length-1);//for decreasing one digit

		decrease = Number(strnum);

		document.getElementById("header").innerHTML = decrease;

	}
	else
	{
		document.getElementById("header").innerHTML = "";
		document.getElementById("result").innerHTML = "";
	}
}

function mod()
{
	val1 = document.getElementById("header").innerHTML;
	document.getElementById("header").innerHTML = "";
	MOD = true;
}

function per()
{
	val1 = document.getElementById("header").innerHTML;
	document.getElementById("header").innerHTML = "";
	PER = true;
}
