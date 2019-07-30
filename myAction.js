function func1(txt)
{
	var btn = document.getElementById('a1');
	if (txt.value != '')
		btn.disabled=false;
	else
		btn.disabled=true;
}
function func2()
{
	var inpt =document.getElementById('inpid1');
	var val1 = inpt.value;
	
	var divs = document.createElement("div");
	div3id.appendChild(divs);
	//divs.innerHTML = val1;
	divs.className="dynDiv";
	document.getElementById('inpid1').value = '';
    // This is to disable the button after every Submit.
	func1(inpt);
	var array1 = ["&#10003", val1, "&#8593", "&#10060"]
	for(var i=0;i<4;i++)
	{
		var smalldivs = document.createElement("div");
		divs.appendChild(smalldivs);
		smalldivs.innerHTML = array1[i];
		smalldivs.className = "horDiv";
		smalldivs.id = "horDiv" + i;
		
	}
	
	
	
	     
}	