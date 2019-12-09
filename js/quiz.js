function onSubmit(){
	var wynik=0;
	var iloscpytan=10;
	var odpowiedziTablica=['a','b','a','a','d','c','b','c','c','d'];
	
	var p1=document.forms['quiz']['p1'].value;
	var p2=document.forms['quiz']['p2'].value;
	var p3=document.forms['quiz']['p3'].value;
	var p4=document.forms['quiz']['p4'].value;
	var p5=document.forms['quiz']['p5'].value;
	var p6=document.forms['quiz']['p6'].value;
	var p7=document.forms['quiz']['p7'].value;
	var p8=document.forms['quiz']['p8'].value;
	var p9=document.forms['quiz']['p9'].value;
	var p10=document.forms['quiz']['p10'].value;
	
	for(var i=1;i<=iloscpytan;i++){
		if(eval('p'+i)!=''){
			if(eval('p'+i)==odpowiedziTablica[i-1])
			wynik++;
			
		}else{
			alert("Nie odpowiedziales na wszystkie pytania!");
		
			break;
			
			
		}
	}
	if(p1=='' || p2=='' || p3=='' || p4 =='' || p5 =='' || p6 =='' || p7=='' || p8=='' || p9=='' || p10=='' ){
		
	}else{
		
	if(wynik<=2){
				alert("Wez sie do nauki! Twoj wynik: "+wynik+" na "+iloscpytan);
		
	}else if(wynik>2 && wynik<=5){
		alert(" Brakuje Ci jeszcze troche wiedzy. Twoj wynik: "+wynik+" na "+iloscpytan);
		
	}else if(wynik>5 && wynik<=8){
		alert("Brawo! Twoj wynik: "+wynik+" na "+iloscpytan);
	}else{
		alert("Gratuluje!! Jestes genialny. Twoj wynik: "+wynik+" na "+iloscpytan);
		
	}
	}
	
	
	
}