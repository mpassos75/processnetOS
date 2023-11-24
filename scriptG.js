
			
	
        var db;
        var databasename = "todo";
        var storename = "todos";
		
		$(function (){
		idEquip();
		});
		
       $(function () {
          openDb();
         //  $("#txtDates").datepicker({dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, showAnim: "fold", showButtonPanel: true });
       });
		
	// -------------------------------------------------------------------------------------------
		
	function openDb() {
	
	var vers = "3.230417"
	document.title = "GERAR-OS v0"+vers;
	
	 
	 var chekJTconv; chekJTsobre;
	//document.getElementById("chekJTconv").checked = false;
	//document.getElementById("chekJTsobre").checked = false;
	document.getElementsByName("ckJT")[0].checked = false;
	document.getElementsByName("rdmanut")[0].checked = false;
	document.getElementById('selIdentE').disabled = true;
	document.getElementById('selTE').disabled = true;
	document.getElementById('equipInstTxt').disabled = true;
	document.getElementById('equipRemoTxt').disabled = true;
	document.getElementById('equipReviTxt').disabled = true;
	document.getElementById('E_Remov').disabled = true;
	document.getElementById('E_Inst').disabled = true;
	document.getElementById('E_Revis').disabled = true;
	//document.getElementById('E_Remov').disabled = true;
	
           var request = indexedDB.open(databasename, 4);
           // request.onerror = function (event) {
           //     alert("Desculpe! O navegador não oferece suporte aos recursos necessários!");
         //  };
           request.onsuccess = function (event) {
                db = event.target.result;
                listTodos();
            };

            request.onupgradeneeded = function (event) { //Criar chave
                var newversion = event.target.result;
                if (!newversion.objectStoreNames.contains(storename)) {
				
                 var store = newversion.createObjectStore(storename, { autoIncrement: true });
                 var index = store.createIndex("dateindex","date", { unique: false });
				//  var index2 = store.createIndex("index2","gOS", { unique: false });
				// store.createObjectStore(storename,{keyPath: "date"});
				 store.createIndex("hsF", "hsF",{unique:false, multiEntry: true});
                }
            }
			
		
		
        }
		
		//--------------------------
		
		
		const ultSOx = vlnSeqOS;
		
		function conIII(){
		var transaction = db.transaction(storename, "readonly");
var store = transaction.objectStore(storename);
var request = store.getAll();
request.onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
        console.log(cursor.value);
		alert(cursor.value);
        cursor.continue();
    }
}
		
		}
		
		function searchPeople(event) {

  var hobby = "11:00"; //$("#hobby").val();

    if(hobby == "") return;

    var range = IDBKeyRange.only(hobby);

    var transaction = db.transaction([storename],"readonly");
    var store = transaction.objectStore(storename);
    var index = store.index("hsF");

    var s = "";

    index.openCursor(range).onsuccess = function(event) {
        var cursor = event.target.result;
        if(cursor) {
            s += "<h2>Key "+cursor.key+"</h2><p>";
            for(var field in cursor.value) {
                s+= field+"="+cursor.value[field]+"<br/>";
					alert(cursor.value[field]);
            }
            s+="</p>";
            cursor.continue();
        }
    }

    transaction.oncomplete = function() {
        //no results?
        if(s === "") s = "<p>No results.</p>";
        $("#results").html(s);
    }

}
		
		function displayData(key) {
		
	  var transaction = db.transaction(storename, "readonly");
            var store = transaction.objectStore(storename);
            var getRequest = IDBKeyRange.only('157693 - SADY MOREIRA');
			//getRequest.getAll();
			
            getRequest.onsuccess = function (event) {
                var todo = event.target.result;
				 if (getRequest.result !== undefined) {
    alert("Books", getRequest.result); // array of books with price=10
	
  } else {
    alert("No such books");
  }
			   
			   
            };



}





		

		//------------TESTE
	function selec_Equipa(){
			
			var iJ = 0;
			var ERem = document.getElementById('E_Remov').checked;
			var EIns = document.getElementById('E_Inst').checked;
			var disEquiRev =  document.getElementsByName('ckbEquipRev')[iJ];
			var disEquiRem =  document.getElementsByName('ckbEquipRem')[iJ];
			var disEquiInst =  document.getElementsByName('ckbEquipInst')[iJ];
			var SMov = document.getElementById("movEquipas").innerHTML;
			
			
			var movEquip = 0;
			var vlMovSM;
				
			
			
			if (EIns == false && ERem == false){
			movEquip = 0;
			}else{
			movEquip = 1;
			}
			
			
			
			if ((movEquip == 0) && ( SMov == "")) {
			
			if(confirm("EQUIPAMENTO - Instalado, Removido ou Revisado?"+"\n\n"+toUnicodeVariant('CANCELAR', 'bold sans', 'bold')+" -> Não será possível incluir!")){
			iJ = 1;
			 movEquip = 0;
			 vlMovSM = "";
			disEquiRem.disabled = false; // desabilitar Removido
			disEquiInst.disabled = false;
			disEquiRev.disabled = false;
			
			 vlMovSM = "MOV";
			//	alert(movEquip);
				}else{
			 movEquip = 1;
			 vlMovSM = "SEM/MOV";
			 
			 disEquiInst.checked = true;
			 disEquiRem.checked = true;
			 disEquiRem.disabled = true; // desabilitar Removido
			 disEquiInst.disabled = true; // desabilitar Instalado
			disEquiRev.disabled = true;
			disEquiRev.checked = true;
			
		
			}
			 document.getElementById("movEquipas").innerHTML = vlMovSM;
			}
			}
			
//-------------------------------------------------------------------------TIPO EQUIPAMENTO	
	function eventosRevEquip_Inicio(){
		
		var ERev = document.getElementById('E_Revis');
		var vlTxtRev = document.getElementById('equipReviTxt');
		
		
		if(confirm("Selecione: TIPO e IDENTICAÇÃO!")){
		
		
		
		if (ERev.disabled = true){
		
		//alert("Selecione: TIPO e IDENTICAÇÃO!");
		document.getElementById('selTE').disabled = false;
		document.getElementById('selTE').style.backgroundColor = "yellow";	
		document.getElementById('selTE').value = "tipoE";
		document.getElementById('selIdentE').value = "ident";
		
		}
		}else{
		ERev.disabled = true;
		EInsNot = 0; // Confirma não instalado
		
		}
		}
		
		
//----------------EvenINS		
	function eventosInsEquip_Inicio(){
		
		var ERem = document.getElementById('E_Remov');
		var EIns = document.getElementById('E_Inst');
		var ERev = document.getElementById('E_Revis');
		var vlTxtRev = document.getElementById('equipReviTxt');
		var EInsNot;
		
		if(confirm("Selecione: TIPO e IDENTICAÇÃO!")){
		
		

		if (EIns.disabled = true){
		if(ERev.checked = false){
		vlTxtRev.disabled = false;
		}
		
		
		//alert("Selecione: TIPO e IDENTICAÇÃO!");
		document.getElementById('selTE').disabled = false;
			//ERem.disabled = true;
			EIns.disabled = false;
				//	alert("hh");
			document.getElementById('selTE').value = "tipoE";
			document.getElementById('selTE').style.backgroundColor = "yellow";
		document.getElementById('selIdentE').value = "ident";
		//document.getElementById('equipInstTxt').disabled = false;
		if(ERev.checked = false){
		ERev.checked = false;
		}
		}
		}else{
		EIns.checked = true;
		EIns.disabled = true;
		EInsNot = 0; // Confirma não instalado
		
		}
		}
//-----EvRemEquip		
	function eventosRemEquip_Inicio(){
	
		var ERem = document.getElementById('E_Remov');
		var EIns = document.getElementById('E_Inst');
		
		
		if(confirm("Selecione: TIPO e IDENTICAÇÃO!")){
		
		
		
		//ERem.checked = true;
		
	//	alert("Selecione: TIPO e IDENTICAÇÃO!");
		document.getElementById('selTE').disabled = false;
		document.getElementById('selTE').value = "tipoE";
		document.getElementById('selIdentE').value = "ident";
		document.getElementById('selTE').style.backgroundColor = "yellow";
		document.getElementById('selIdentE').disabled = true;
		//document.getElementById('selIdentE').disabled = false;
	
	
			//EIns.disabled = true;
			document.getElementById('equipInstTxt').disabled = true;
		}else{
		ERem.disabled = true;
		ERem.checked = true;
		document.getElementById('equipInstTxt').disabled = true;
		document.getElementById('selTE').value = "tipoE";
		document.getElementById('selIdentE').value = "ident";
		
		}
		}
//------------------->>>>		
	function TipoEquipa(){
		
			var ERem = document.getElementById('E_Remov').checked;
			var EIns = document.getElementById('E_Inst').checked;
			var ERev = document.getElementById('E_Revis').checked;
			//var ERemHabil = document.getElementById('E_Remov');
			//var EInsHabil = document.getElementById('E_Inst');
			var vlTxtInst = document.getElementById('equipInstTxt');	
			var vlTxtRem = document.getElementById('equipRemoTxt');
			var vlTxtRev = document.getElementById('equipReviTxt');
			var sel_T_Equip = document.getElementById('selTE');	
			var vlTxtTipo_Inst = "";
			var vlTxtTipo_Rem = "";
			var vlTxtTipo_Rev = "";
			
			var vlRDT_E = new Array();
			
			if (EIns.checked = true){
			vlTxtTipo_Inst = sel_T_Equip.options[sel_T_Equip.selectedIndex].text;
			vlTxtInst = vlTxtTipo_Inst;
			vlRDT_E.push(vlTxtTipo_Inst);
			document.getElementById('selIdentE').style.backgroundColor = "yellow";
			document.getElementById('selTE').style.backgroundColor = "white";
			
			document.getElementById('selIdentE').disabled = false;
			} else if (ERem.checked = true) {4
			vlTxtTipo_Rem = sel_T_Equip.options[sel_T_Equip.selectedIndex].text;
			vlTxtInst = vlTxtTipo_Rem;
			vlRDT_E.push(vlTxtTipo_Rem);
			document.getElementById('selIdentE').style.backgroundColor = "yellow";
			document.getElementById('selTE').style.backgroundColor = "white";
			document.getElementById('selIdentE').disabled = false;
			}else if(ERev.checked = true){
			vlTxtTipo_Rev = sel_T_Equip.options[sel_T_Equip.selectedIndex].text;
			vlTxtInst = vlTxtTipo_Rev;
			vlRDT_E.push(vlTxtTipo_Rev);
			document.getElementById('selIdentE').style.backgroundColor = "yellow";
			document.getElementById('selTE').style.backgroundColor = "white";
			document.getElementById('selIdentE').disabled = false;
			
			}
			
		
			return vlRDT_E;
		
			}
			
	//--------(A)		

	//----------------------------------------------------------------------IDENTIF EQUIPAMENTO
	function idEquipam(){
		
		
		
		
		
	var ERem = document.getElementById('E_Remov').checked;
	var EIns = document.getElementById('E_Inst').checked;
	var ERev = document.getElementById('E_Revis').checked;
	var ERemHabil = document.getElementById('E_Remov');
	var EInsHabil = document.getElementById('E_Inst');
	var ERevHabil = document.getElementById('E_Revis');
	
	var vlTxtInst = document.getElementById('equipInstTxt');	
	var vlTxtRem = document.getElementById('equipRemoTxt');
	var vlTxtRev = document.getElementById('equipReviTxt');
	var sel_Ident_Equip = document.getElementById('selIdentE');														
	var vlTxtID_Inst = "";
	var vlTxtID_Rem = "";
	var vlRDID_E = "";
		
	
	var vlRDID_E = new Array();
	
	var vlRDT_E = TipoEquipa();
	
	//----INSTALDO
	vlTxtID = sel_Ident_Equip.options[sel_Ident_Equip.selectedIndex].value;
	//TipoEquipa();
	
	
	//alert("vlTXT" + vlTxtInst);
	// && ( vlTxtInst.value =="") && ( EInsHabil.disabled == false))
		if ((EInsHabil.checked == true) && ( vlTxtInst.value =="")) {
		//	document.getElementById('equipInstTxt').disabled = false;		
			document.getElementById('selIdentE').disabled = false;
			document.getElementById('equipInstTxt').disabled = false;
			document.getElementById('selIdentE').style.backgroundColor = "white";
			document.getElementById('equipInstTxt').style.backgroundColor = "yellow";
			document.getElementById("equipInstTxt").focus();
		//		document.getElementById("equipInstTxt").style.borderColor = "Aqua";
	//document.getElementById("equipInstTxt").style.backgroundColor = "19FFFF";
		EIns.disabled = true;
		//ERem.disabled = true;
		//alert(" X1A Insira número idenficação!");
		document.getElementById("equipInstTxt").focus();
		// && (vlTxtRem.value =="") && (ERemHabil.disabled == false))
		}else if ((ERemHabil.checked == true)&& (vlTxtRem.value =="")) {
		//vlTxtInst.disabled = true;
		//ERem.disabled = true;
		document.getElementById('equipRemoTxt').disabled = false;
		document.getElementById('selIdentE').disabled = false;
		document.getElementById('selIdentE').style.backgroundColor = "white";
		document.getElementById('equipRemoTxt').style.backgroundColor = "yellow";
			document.getElementById("equipRemoTxt").focus();
		
		
		}
		
		
		if((ERevHabil.checked == true)&&(vlTxtRev.value =="")){
		
		document.getElementById('selIdentE').disabled = false;
		
		vlTxtRev.disabled = false;
		document.getElementById("equipReviTxt").focus();
		document.getElementById("equipReviTxt").style.borderColor = "Aqua";
		document.getElementById("equipReviTxt").style.backgroundColor = "19FFFF";
		
		
			//alert("XXX Insira número idenficação!");
		}
		
	
	vlRDID_E.push(vlTxtID);
	
	
		return vlRDID_E;

	//}	
	
	
	//----REMOVIDO
	//if(ERem == true && vlTxtRem == ""){
	
	
	
	//var vlRDID_E = new Array();
	
	
	
	//	 vlTxtID_Rem = sel_Ident_Equip.options[sel_Ident_Equip.selectedIndex].value; 
		
		
		//document.getElementById('equipRemoTxt').value = vlTxtID_Rem;
		
		//vlRDID_E.push(vlTxtRem);
		
	//document.getElementById('selIdentE').value = "ident";
	
	//}
	
	
 }
	function eventoInsEquip_Final(valoresEqpInst){	
		var vlRDT_E = TipoEquipa();
		var vlRDID_E = idEquipam();
		var ERemHabil = document.getElementById('E_Remov');
		var EInsHabil = document.getElementById('E_Inst');
		var vlTxtRem = document.getElementById('equipRemoTxt');
		var	vlTxtInst = document.getElementById('equipInstTxt');

//var valoresEqpInst = "INS-> " + vlRDT_E + "-" +   vlRDID_E + "->" + vlTxtInst + "";
	if ((EInsHabil.checked = true) && (vlTxtInst.value !="")){
	
	var vlMovEquip1 = "INS-:";
	if ( vlRDID_E !="SI"){
	var valoresEqpInst = vlRDT_E + "-" +   vlRDID_E + ": " + vlTxtInst.value + "";
	EInsHabil.disabled = true;

	//ERemHabil.disabled = false;
	
	 document.getElementById("movEIns").innerHTML = vlMovEquip1 + valoresEqpInst;	
	 document.getElementById("movEquipInst").innerHTML = valoresEqpInst;
	}else{
	
	var valoresEqpInst2 = vlRDT_E + "-: SEM IDENTICAÇÃO";
	 document.getElementById("movEIns").innerHTML = vlMovEquip1 + valoresEqpInst2;
	 document.getElementById('equipInstTxt').value = "SEM IDENTICAÇÃO";
	 document.getElementById("equipInstTxt").select();
	 
	  document.getElementById("movEquipInst").innerHTML = valoresEqpInst2;
	// vlTxtInst.disabled = true;
	}
	document.getElementById('selTE').disabled = true;
	document.getElementById('selIdentE').disabled = true;
	document.getElementById('selIdentE').style.backgroundColor = "white";
	document.getElementById("equipInstTxt").style.borderColor = "blue";
	document.getElementById("equipInstTxt").style.backgroundColor = "#00FFFF";
		}		
		}
		
	function eventoRemEquip_Final(valoresEqpInst){	
		
		var vlRDT_E = TipoEquipa();
		var vlRDID_E = idEquipam();
		var ERemHabil = document.getElementById('E_Remov');
		var EInsHabil = document.getElementById('E_Inst');
		var vlTxtRem = document.getElementById('equipRemoTxt');
		var	vlTxtInst = document.getElementById('equipInstTxt');


	if (ERemHabil.checked = true){
	var vlMovEquip2 = "REM-:";
	if ( vlRDID_E !="SI"){
	var valoresEqpInst = vlRDT_E + "-" + vlRDID_E + ": " + vlTxtRem.value + "";
	ERemHabil.disabled = true;
	
	 document.getElementById("movERem").innerHTML = vlMovEquip2 + valoresEqpInst;
	 document.getElementById("movEquipRemo").innerHTML = valoresEqpInst;
	
	}else{
	var valoresEqpInst2 = vlRDT_E + "-: SEM IDENTICAÇÃO";
	 document.getElementById("movERem").innerHTML = vlMovEquip2 + valoresEqpInst2;
	 document.getElementById('equipRemoTxt').value = "SEM IDENTICAÇÃO";
	document.getElementById("movEquipRemo").innerHTML = valoresEqpInst2;
	}
	document.getElementById('selTE').disabled = true;
	document.getElementById('selIdentE').disabled = true;
	document.getElementById('selIdentE').style.backgroundColor = "white";
	document.getElementById("equipRemoTxt").style.borderColor = "blue";
	document.getElementById("equipRemoTxt").style.backgroundColor = "#00FFFF";	
		}
		}
		
	function eventoRevEquip_Final(valoresEqpInst){	
		
		var vlRDT_E = TipoEquipa();
		var vlRDID_E = idEquipam();
		var ERemHabil = document.getElementById('E_Remov');
		var EInsHabil = document.getElementById('E_Inst');
		var ERevHabil = document.getElementById('E_Revis');
		var vlTxtRem = document.getElementById('equipRemoTxt');
		var	vlTxtInst = document.getElementById('equipInstTxt');
		var	vlTxtRev = document.getElementById('equipReviTxt');


	if (ERevHabil.checked = true){
	vlTxtInst.disabled = true;
	vlTxtRem.disabled = true;
	var vlMovEquip3 = "REV-:";
	if ( vlRDID_E !="SI"){
	var valoresEqpInst = vlRDT_E + "-" + vlRDID_E + ": " + vlTxtRev.value + "";
	ERevHabil.disabled = true;
	
	 document.getElementById("movERev").innerHTML = vlMovEquip3 + valoresEqpInst;
	 document.getElementById("movEquipRev").innerHTML = valoresEqpInst;
	
	}else{
	
	var valoresEqpInst2 = vlRDT_E + "-: SEM IDENTICAÇÃO";
	document.getElementById("movERev").innerHTML = vlMovEquip3 + valoresEqpInst2;
	 document.getElementById("movEquipRev").innerHTML = valoresEqpInst2;
	 document.getElementById('equipReviTxt').value = "SEM IDENTICAÇÃO";
	
	}
	document.getElementById('selTE').disabled = true;
	document.getElementById('selIdentE').disabled = true;
	document.getElementById('selIdentE').style.backgroundColor = "white";
	document.getElementById("equipReviTxt").style.borderColor = "blue";
	document.getElementById("equipReviTxt").style.backgroundColor = "#00FFFF";
	
		}
		
		}
		
		//-----------------TTTT
		
		var DTFa;
		var DTIa;
		
		function runNos(){
		
		var lTab = document.getElementById("todosList");
	var colTab = lTab.getElementsByTagName('td');
	//document.getElementsByTagName('todosList')[0].getElementsByTagName('tr').innerHTML
	var textP = document.getElementById("todosList").lastChild.text;
	var Lrows = document.getElementsByTagName('tr');
	 var nTable = document.getElementById("todosList").innerHTML;
	 var tabEquip = document.getElementById("logEquip").innerHTML;
				tabEquip = $("#logEquip").text();
				var text = tabEquip.trim();
		
		var tabEqp = text.toString();	
		tabEqp = text.replace('COPXL','');
	
	//alert(notInfo+"blz");
	
	for (var t = 0; t < Lrows.length; t++) {
		var Trows = t+1;
		}
	
	
	
	//alert(Trows+"ultL");
    
	if (typeof Trows == "undefined"){
	document.formi2.texto.value = "0001"+tabEqp;
	}
  
 // alert(DTIa+"DTIa\u2605");
	
    for (var w= 0; w < colTab.length;w++) {
 
	  if((w==2)&&(t==Trows)){
	  
     var DTIa = colTab[w].textContent;
	// alert(DTIa+"DTIa\u2606")
	   }
   }
		// alert(DTIa+"1B");
		//alert(tds+"xx");
		
		 tr = lTab.getElementsByTagName("tr");
  for (var z = 0; z < tr.length; z++) {
    var tds = tr[z].getElementsByTagName("td");
	
    }
  
	var DTFa;
		 var td = tds[z];
		// alert(tds+"1A");
		
		
		DTFa = tds[1].textContent;
		
		
		
		 
		 
		 var osA = DTFa.replace('ATB','');
	 ultOS = parseInt(osA);
	if (Trows > 0){
//	alert("vl Trow"+Trows);
	vlnOS = Trows;
	}else{
	 if(ultOS>0){
	ultOS++;
	vlnOS = ultOS;
	
	
    
    }else{
	var vlnSeqOS = ""; 
	 jx++;
 alert(jx+"jx");
 vlnOS = jx;
}	
	
	}

//var nSeqOS2 = document.getElementById("nSeqOS").innerHTML = vlnOS+1;

   //  alert("Task is performed-1"+ vlnOS);	
	 
		
				var date = $("#Dates").val();
			
		
		var osDate = date.toString();
		var osDateF = osDate.slice('0','7');
		var osDateFF = osDateF.replace('-','');
		
  

		
		var vlconta = vlnOS.toString();
		
	
		vlnSO = vlconta.padStart(4, '0'); 
		
		var CEQP = vlnSO.concat('',tabEqp);
		 document.formi2.texto.value = CEQP
		
	 
		

		 
		//  fun(Trows);
		// fun(DTFa); //passar p outra função.
		
		
		//addTodo(Trows);
		
		
		}
		
		
		 
             
       document.getElementById("btnOS").onclick = function () {
	   
       fuz()   
       };
	   
	   function fuz(){
	  
		 var vlnOS = []
		 alert(vlnOS);
	if(jx=>0)    
    { 
	}   
	
jx++;

	var jxx = parseInt(jx);
	alert(jxx);
	//var jxx = jx.toString();
let length = vlnOS.push(jxx);
	
	//vlnOS.push(jxx);
     alert("Task is performed"+ jx);	
	   }
	   //------------
	   		

		
		
	function confExec() {
		
		var textST = "";
	if(confirm("SERVIÇO EXECUTADO?"+"\n"+toUnicodeVariant('CANCELAR', 'bold sans', 'bold')+"-> Ficará PENDENTE")){
//alert('SIM!');

textST = "EXECUTADO";
} else {	
//alert('NÃO');
textST = "PENDENTE";
}
document.formi.texto.value = textST
document.getElementById("realiz").innerHTML = textST;

	$(function (){
		runNos();
		});
}
	
		
	//--------------------------------------------------------------------SeleçãoMultiplaUnidades
	function SelecUnid() {
    var unidade = document.getElementById("SubUnidList");
	var US = document.getElementById("cidList");
	
	var USn = [];
    var selected1 = [];
	
	 for (var ix = 0; ix < US.length; ix++) {
        if (US.options[ix].selected) USn.push(US.options[ix].value);
    }
	
    for (var i = 0; i < unidade.length; i++) {
        if (unidade.options[i].selected) selected1.push(unidade.options[i].value);
    }
    //console.log(selected1);
	//alert(selected1);
	//document.getElementById("#cidList").value = USn
	//document.getElementById("val").value = selected1 + '  '
	//document.getElementById("#SubUnidList").value =  USn
	
	alert(selected1);
}

//---------------------SelecRD__TM

	function Selec_TM(){

	var mtVal = "";



var textinputs = document.querySelectorAll('input[name="rdmanut"]'); 
var empty = [].filter.call( textinputs, function( el ) {
   return !el.checked
});

			if (textinputs.length == empty.length) {
			alert("Insira, TIPO MANUTENÇÃO para continuar!");
			return false;
			}else{

 //---IDENTIFICAR TIPO MANUTENÇÃO
	   	    var submit = 'submitMT';
	        var submitMT = function(){
			var curRadio = document.querySelector('input[name="rdmanut"]:checked').value;
		
			if(curRadio!="")
			{
			mtVal=curRadio;
			}
	//alert(mtVal);
	//document.formi.texto.value = mtVal
		document.getElementById("rdTM").innerHTML = mtVal;
          
			};
			eval(submit)();
	  
	//-------------------------------------------
			}
			
			}
			
			
	function formatoMaisc(e) {
   var sels = e.target.selectionStart;
   var sele = e.target.selectionEnd;
   e.target.value = e.target.value.toUpperCase();
   e.target.selectionStart = sels;
   e.target.selectionEnd = sele;
}



		
// ------------------------------------------------------------------------Incluir
    function addTodo() {
	

		
	var gOS = $("#nOS").val();
	//var inOS = document.formi2.texto.value
	//var innSeq = document.getElementById("nSeqOS").innerHTML;
     //       if (gOS == "") {
        //        alert("Falta Gerar num OS para continuar!");
				
			//	 return;
			//}else if (inOS == "0001ATB") {
			
			
           //     return;
          //  }
	
	
	
		var vlMovSM = selec_Equipa();
		//var vlMovEquip1 = eventoInsEquip_Final();
		//var vlMovEquip2 = eventoRemEquip_Final();
		//var vlMovEquip3 = eventoRevEquip_Final();
		
		var ckbEquipRem = document.getElementById('E_Remov').checked;
		var ckbEquipInst = document.getElementById('E_Inst').checked;
		var ckbEquipRev =  document.getElementById('E_Revis').checked;
		
	    var vlMovEquip = document.getElementById("movEquipas").innerHTML;
		var vlMovInsEquip = document.getElementById("movEquipInst").innerHTML;
		var vlMovRemEquip = document.getElementById("movEquipRemo").innerHTML;
		var vlMovRevEquip = document.getElementById("movEquipRev").innerHTML;
		
		
		vlMovEquip = $("#movEquipas").text();
		vlMovInsEquip = $("#movEquipInst").text();
		vlMovRemEquip = $("#movEquipRemo").text();
		vlMovRevEquip = $("#movEquipRev").text();
		// || (vlMovInsEquip == "") || (vlMovRemEquip == ""))

		if ((ckbEquipRem != true) && (ckbEquipInst != true) && (ckbEquipRev != true)){
		
		//	if ((vlMovEquip != "MOV")||(vlMovInsEquip != "")||(vlMovRemEquip != "")|| (vlMovRevEquip = "SEM IDENTICAÇÃO")) {
				alert("Ação Realizada!");
				return;
					
           		}
			
		
		
		
		//---------------------- JORNADA TRBALHO(A)
		
		//var locJT = document.querySelectorAll('input[name="ckJT"]:checked');
		var locJT = document.querySelector('input[name="ckJT"]:checked');   
		var vlJT = document.createElement("vl_JT");
		var mtVal = document.createElement("rdTM");
		
		var  sReal;
		
		var ckconv = document.getElementById("chekJTconv").checked;
		var cksobre = document.getElementById("chekJTsobre").checked;
		var ckcont = document.getElementById("chekJTcont").checked;
	
		
		if(locJT == null) {
		
		alert("Escolha - JORNADA DE TRABALHO!");
				return;
		}else{
		if(cksobre == true && ckconv == true){
			document.getElementById("chekJTconv").checked = false;
			document.getElementById("chekJTsobre").checked = false;
			document.getElementById("chekJTcont").checked = false;
				alert("Escolha somente um tipo de JORNADA!");
				
		}	
		var vlJTx = document.querySelector('input[name="ckJT"]:checked').value;
		if (ckconv == true){
				
		}else if (cksobre == true){
		
		
		}
		}
		document.getElementById('selIdentE').value = "ident";
		document.getElementById('selIdentE').disabled = true;
		document.getElementById('selTE').value = "tipoE";
		document.getElementById('selTE').disabled = true;
		
		
		//-----------------(A)
		
		
		
		var textinputs = document.querySelectorAll('input[name="rdmanut"]'); 
		var empty = [].filter.call( textinputs, function( el ) {
		return !el.checked
		});

		if (textinputs.length == empty.length) {
		alert("Insira, TIPO MANUTENÇÃO para continuar!");
		return false;
		}else{

 //----------------IDENTIFICAR TIPO MANUTENÇÃO
	   	    var submit = 'submitMT';
			
	        var submitMT = function(){
			var valMT = document.querySelector('input[name="rdmanut"]:checked').value;
			
			if(valMT!="")
			{
			mtVal=valMT;
			}
		
          	};
			eval(submit)();
		  
	//-------------------------------------------

		}
			//alert("B" + vlJT);
	
			vlJT = $("#vl_JT").val();
			if (vlJT == "") {
			
           				
                return;
		    }
		
	
			mtVal = $("#rdTM").val(); 
			if (mtVal == "") {
			
         
				
                return;
		    }
			
			var func = $("#txtFun").val();
            if (func == null) {
			
                alert("Insira, COLABORADOR para continuar!");
				
                return;
		    }
			
			var cidad  = $("#SubUnidList").val();
		    var UScid = $("#cidList").val();
			var US;
			var USn;
			
			if(UScid == "TORRES") {
			US = "226";
			}else if(UScid == "CAPÃO DA CANOA"){
			US = "046";
			}else if(UScid == "XANGRI-LA"){
			US = "245";
			}
		
		
			
			
			
			
			
			
			//cidad = usCid + cidadXr
			//alert(cidad);
            if (cidad == "") {
                alert("Insira, LOCALIZAÇÃO para continuar!");
                return;
            }
			
		
             
			
		//	var date = $("#Dates").val();
			//var hsI = $("#txthsInic").val();
			var hsF = $("#txthsFina").val();
            if (hsF == "") {
                alert("Insira, DATA e HORA para continuar!");
                return;
            }
			
			
			 sReal = $("#realiz").val();
			//alert(sR);
            if (sReal == "") {
                alert("Insira, AÇÃO para continuar!");
                return;
            }
		
			 
			var hsI = $("#txthsInic").val();
            if ((hsI == "")&&(sReal == "EXECUTADO") && (sReal == "PENDENTE")){
					alert("Insira, HS INICIAL para continuar!");
          
			 
                return;
            }
			
			var hsF = $("#txthsFina").val();
            if ((hsF == "")&&(sReal == "EXECUTADO") && (sReal == "PENDENTE"))  {
			
                alert("Insira, HS FINAL para continuar!");
                return;
            }
			
			var textA = document.getElementById('txtText').value
		//	alert(textA);
			var textx = textA.replace(/(\r\n|\n|\r)/gm, "");
			//alert(textx);
			$("#txtText").val(textx);
            if (textx == "") {
                alert("Insira, ATIVIDADE REALIZADA para continuar!");
                return;
            }
			
			
			
		
			

            var todo = { vlJT: $('input[name="ckJT"]:checked').val(), func: $("#txtFun").val(), date: $("#Dates").val(), hsI: $("#txthsInic").val(), hsF: $("#txthsFina"+
			"").val(),  cidad: (US+"-"+$("#SubUnidList").val()), textx: $("#txtText").val(), sReal: $("#realiz").val(), mtVal : $('input[name="rdmanut"]:checked').val(), vlMovEquip: $("#movEquipas"+
			"").text(), vlMovInsEquip: $("#movEquipInst").text(), vlMovRemEquip: $("#movEquipRemo").text(), vlMovRevEquip: $("#movEquipRev").text(), gOS: $("#nOS").val()}; 
			
			

            var transaction = db.transaction([storename], "readwrite");
            var store = transaction.objectStore(storename);
            var addrequest = store.add(todo);

            addrequest.onsuccess = function (event) {
                listTodos();
            };

            addrequest.onerror = function (event) {
                alert("Não foi possível adicionar Serviço!");
            };
			
			
        }
		var todo

	
// ------------------------------------------------------------------------Editar
	function editTodo(key) {
	//var textx = addTodo();
		
            var transaction = db.transaction([storename], "readonly");
            var store = transaction.objectStore(storename);
            var getRequest = store.get(key);
			
		
		
            getRequest.onsuccess = function (event) {
                var todo = event.target.result;
                if (todo !== undefined) {
				
				let nCid = (todo.cidad);
			//alert(nCid);
			//	alert((todo.vlJT));
				
                    $("#txtText").val(todo.textx);
				//	$("#txtFun").val(todo.func);
				//	$("#movEquipas").text(todo.vlMovEquip);
				//	$("##movEquipInst").text(todo.vlMovInsEquip);
				//    $("#movEquipRemo").text(todo.vlMovRemEquip);
				//    $("#movEquipRev").text(todo.vlMovRevEquip);
				//	$("#SubUnidList").val(todo.nCid);
                   $("#Dates").val(todo.date);
					$("#txthsInic").val(todo.hsI);
					$("#txthsFina").val(todo.hsF);
					$("#realiz").val(todo.sReal);
				//	$("#rdTM").val(todo.mtVal); 
				//	$('#input[name="ckJT"]').val(todo.vlJT); 
					
                    $("#key").val(key);
                    // show relevant buttons
                    $("#divUpdate").css("visibility", "visible");
				
					$("#divCalend").css("visibility", "invisible");
                    $("#btnAdd").hide();
					$("#btnOS").hide();
                }
            };
			equipe = $("#logEquip").text();
 var idEquip =equipe.substring(5, 8);
			
			
			alert("ATENÇÃO! OS - 00"+ key+idEquip + " será alterada.");
        }
// ------------------------------------------------------------------------Cancelar
	function cancelEdit() {
            $("#txtText").val("");
		//	$("#txtFun").val("");
		//	$("#SubUnidList").val("");
            $("#Dates").val("");
			 $("#txthsInic").val("");
			  $("#txthsFina").val("");
			  $("#realiz").val("");
		//	   $("#rdTM").val("");
		 //   $("#movEquipas").text("");
		//    $("##movEquipInst").text("");
		//    $("#movEquipRemo").text("");
		//    $("#movEquipRev").text("");
            // hide and show  relevant buttons
          $("#divUpdate").css("visibility", "invisible");
            $("#btnAdd").show();
			  $("#btnOS").show();
        }

		
	function clearTodo() {
		
		 var resp = confirm("Deseja realmente excluir TUDO?");
            if (!resp)
                return;
		
  var tx = db.transaction('todos', 'readwrite');
   tx.objectStore('todos').clear();
  listTodos();
}
		
// ------------------------------------------------------------------------Deletar
	function deleteTodo(key) {
            var resp = confirm("Deseja realmente excluir?");
            if (!resp)
                return;

            var transaction = db.transaction(storename, "readwrite");
            var store = transaction.objectStore(storename);
            var deleteRequest = store.delete(key);

            deleteRequest.onsuccess = function (event) {
                listTodos();
            };
        }
// ------------------------------------------------------------------------SalvarEdição
	function updateTodo() {
	//alert(key);
            var todo;
            var key = Number($("#key").val());
            var transaction = db.transaction(storename, "readwrite");
            var store = transaction.objectStore(storename);
            var getRequest = store.get(key);
//alert(todo.textx);
            getRequest.onsuccess = function (event) {
                todo = event.target.result;
                // now modify the name and date 
                todo.textx = $("#txtText").val();
				
			//	todo.func = $("#txtFun").val();
			//	todo.vlMovEquip = $("#movEquipas").text();
				
			//	todo.vlMovInsEquip = $("#movEquipInst").text();
			//	todo.vlMovRemEquip = $("#movEquipRemo").text();
			//	todo.vlMovRevEquip = $("#movEquipRev").text();
				
				//todo.cidad = $("#SubUnidList").val();
              
				  todo.date = $("#Dates").val();
				if (todo.date == "") {
				alert("DATA em branco - Editar Novamente!");
				}else{
				
				  todo.date = $("#Dates").val();
				}
			//	todo.hsI = $("#txthsInic").val();
			//	todo.hsF = $("#txthsFina").val();
				todo.sReal = $("#realiz").val();
			//	 todo.mtVal = $("#rdTM").val();
			//	 todo.gOS = $("#nOS").val();

                var putRequest = store.put(todo, key)
                putRequest.onsuccess = function (e) {
                    listTodos();
                   // cancelEdit();
                }
            };
        }
// ------------------------------------------------------------------------Listar
	function listTodos(notInfo) {
            var list = "";
            var todo;
			//var notInfo = 1;
	
  //  alert(notInfo);
            var transaction = db.transaction(storename, "readonly");
            var store = transaction.objectStore(storename);
            var index = store.index("dateindex");
			//var index = store.index2("index2");
            var cursor = index.openCursor(notInfo);
				
            cursor.onsuccess = function (event) {
			
                todo = event.target.result;
				//<button onclick='editTodo(" + todo.primaryKey + ")'>Edit</button>
                if (todo != null) {
                    list += "<tr><td><button style='background-color:red; color:white;  font-size: 80%; border-radius: 5px; border-width: 1px; padding:1px 4px;' onclick='deleteTodo(" + todo.primaryKey + ")'>DEL</button></td><td><button style='background-color:green; border-width: 1px; color:yellow; border-radius: 5px; font-size: 80%; padding:1px 4px;' onclick='editTodo(" + todo.primaryKey + ")'>EDIT</button></td>"
                    list += "<td>"  + todo.value.gOS + " </td><td>"  + todo.value.func + " </td><td>" + todo.value.date + " </td><td>" + todo.value.hsI + " </td><td>" + todo.value.hsF +
					" </td><td>" + todo.value.cidad + " </td><td>" + todo.value.textx + " </td><td>" + todo.value.sReal + "</td><td>" + todo.value.mtVal + 
					"</td><td>" + todo.value.vlJT + "</td><td>" + todo.value.vlMovEquip + "</td><td>" + todo.value.vlMovRevEquip + 
					"</td><td>" + todo.value.vlMovRemEquip + "</td><td>" + todo.value.vlMovInsEquip + "</td></tr>";
                    todo.continue();
                }
                else {
 
                    if (list == "" ){
				
                        $("#todosList").html('<h2 style="color:#4D83FF">** NÃO HÁ REGISTROS **</h2>');
				
                    }else{
                        $("#todosList").html("<table class='todos'><h3 style='background-color: transparent; font:18px Tahoma'>SERVIÇOS REALIZADOS</h3><th style='color:#FF5500'>***</th><th style='color:#00FF2A'>***</th><th style='text-align:center'>NUM-OS</th><th style='text-align:center'>FUNCIONARIO</th><th style='text-align:center'>DATA</th><th style='text-align:center'>HR-INICIAL</th><th style='text-align:center'>HR-FINAL</th>" +
						"<th style='text-align:center'>LOCALIZACAO</th><th style='text-align:center'>DESCRICAO</th><th style='text-align:center'>STATUS</th><th style='text-align:center'>TIPO-MANUT</th><th style='text-align:center'>JOR-TRAB</th><th style='text-align:center'>STATUS-EQUIP</th><th style='text-align:center'>REVISADO</th><th style='text-align:center'>REMOVIDO</th><th style='text-align:center'>INSTALADO</th>" 
                                 + list + "</table>");
					}			
					
									
                }
				
            };
			document.getElementById("chekJTconv").disabled = false;
			document.getElementById("chekJTsobre").disabled = false;
			document.getElementById('txtText').value ="";
			document.getElementById('txtFun').value ="";
			document.getElementById('cidList').value ="";
			document.getElementById('unidadeList').value ="";
			document.getElementById('SubUnidList').value ="";
			document.getElementById('cidList').value ="";
			document.getElementById('Dates').value ="";
			document.getElementById('txthsInic').value ="";
			document.getElementById('txthsFina').value ="";
			document.getElementById('realiz').value ="";
			document.getElementById('nOS').value ="";
			//document.getElementById("chekJTconv").checked = false;			
			//document.getElementById("chekJTsobre").checked = false;
			document.getElementsByName("ckJT")[0].checked = false;
			document.getElementsByName("ckJT")[1].checked = false;
			document.getElementsByName("ckJT")[2].checked = false;
			document.getElementsByName("rdmanut")[0].checked = false;
			document.getElementsByName("rdmanut")[1].checked = false;
			document.getElementsByName("rdmanut")[2].checked = false;
			document.getElementById('E_Remov').checked = false;
			document.getElementById('E_Inst').checked = false;
			document.getElementById('E_Revis').checked = false;
			document.getElementById('E_Remov').disabled = true;
			document.getElementById('E_Inst').disabled = true;
			document.getElementById('E_Revis').disabled = true;
			document.getElementById('selIdentE').value = "ident";
			document.getElementById('selIdentE').disabled = true;
			document.getElementById('selTE').value = "tipoE";
			document.getElementById('selTE').disabled = true;
			document.getElementById('equipReviTxt').value = "";
			document.getElementById('equipRemoTxt').value = "";
			document.getElementById('equipInstTxt').value = "";
			document.getElementById('equipInstTxt').disabled = true;
			document.getElementById('equipRemoTxt').disabled = true;
			document.getElementById('equipReviTxt').disabled = true; 
			document.getElementById("equipReviTxt").style.backgroundColor = "white";
			document.getElementById("equipRemoTxt").style.backgroundColor = "white";
			document.getElementById("equipInstTxt").style.backgroundColor = "white";
			document.getElementById("equipInstTxt").style.borderColor = "black";
			document.getElementById("equipRemoTxt").style.borderColor = "black";
			document.getElementById("equipReviTxt").style.borderColor = "black";
			document.getElementById("movEquipas").innerHTML = "";
			document.getElementById("movERev").innerHTML = "";
			document.getElementById("movERem").innerHTML = "";
			document.getElementById("movEIns").innerHTML = "";
			document.getElementById("movEquipInst").innerHTML = "";
			document.getElementById("movEquipRemo").innerHTML = "";
			document.getElementById("movEquipRev").innerHTML = "";
			document.getElementById('DatesCont').value = "dd-mm-yyyy";
			//document.getElementById('DatesCont').disabled = true;
			document.getElementById('hsICont').value = "--:--";
			document.getElementById('hsFCont').value = "--:--";
			document.getElementById('textCont').value ="";
			document.getElementById('radContA').checked = false;
		
			$("#divCalend").css("visibility", "invisible");
			$("#ViewDT1").css("visibility", "invisible");
			$("#ViewTextCont").css("visibility", "invisible");
			
			
			//document.getElementByid('ckJT').checked = false;
			//document.getElementById('rdmanut').checked = false;
			
			//document.getElementById('funcion').focus();
			//tManPre.checked == false;
			//tManCor.checked == false;
			//tManPro.checked == false;
			
			
        }
		//-------------------------------------------------------------
		
		
		
		var DTF;
		var DTI;
		
		
		
		
		
	function tableToCSV(vlDTF) {
	
	var lTab = document.getElementById("todosList");
	var colTab = lTab.getElementsByTagName('td');
	//document.getElementsByTagName('todosList')[0].getElementsByTagName('tr').innerHTML
	var textP = document.getElementById("todosList").lastChild.text;
	var Lrows = document.getElementsByTagName('tr');
	
	
	
	for (var t = 0; t < Lrows.length; t++) {
		var Trows = t+1;
			
		}
		
	
            
		

    for (var w= 0; w < colTab.length;w++) {
 
	
	  if((w==4)&&(t=!0)){
	  
       DTI = colTab[w].textContent;
	 
	   }
   }
		
		 tr = lTab.getElementsByTagName("tr");
  for (var z = 0; z < tr.length; z++) {
    var tds = tr[z].getElementsByTagName("td");
	
    }
  
		 var td = tds[j];
		 DTF = tds[4].textContent;
		
		
	
	
	
 // Variável para armazenar os dados csv finais
 var csv_data = [];
 

 // Obtém os dados de cada linha
 var rows = document.getElementsByTagName('tr');
 for (var i = 0; i < rows.length; i++) {
	
     // Obtém os dados de cada coluna
	 
	 
	 var cols = rows[i].querySelectorAll('td,th');
	  
     var csvrow = [];
     for (var j = 2; j < cols.length; j++) {
	 
         // Obtém os dados de texto de cada célula
         // de uma linha e envia para csvrow
         csvrow.push(cols[j].innerHTML);
		}
	
     // Combina cada valor de coluna com vírgula
     csv_data.push(csvrow.join(";"));
  
 }
 
  
	

 // Combina os dados de cada linha com o novo caractere de linha
 csv_data = csv_data.join('\n');

 // Chama esta função para baixar o arquivo csv
 downloadCSVFile(csv_data);

}

	function downloadCSVFile(csv_data) {
var result = prompt("Informe a Senha!!", "");
if (result == "@746") {


 // Cria objeto de arquivo CSV e feed
 // nosso csv_data nele
 CSVFile = new Blob(["\uFEFF"+csv_data], {type: "text/csv;charset=UTF-8"});

 // Cria um link temporário para iniciar
 // processo de download
 var temp_link = document.createElement('a');
 
 //Baixa o arquivo csv
 
 temp_link.href = window.URL.createObjectURL(CSVFile);
 //var equipe = document.getElementById("idEquip").innerHTML;
 var equipe = "";
 var vlDTF = DTF.substring(5, 10);
 var vlDTFx = vlDTF.replaceAll("-", "");
var vlDTI = DTI.substring(5, 10);
var vlDTIx = vlDTI.replaceAll("-", "");
 alert(vlDTF);
 equipe = $("#logEquip").text();
 var tbEquip = equipe.substring(17, 19);
alert(tbEquip);
// var tipoAqr = "_.csv";
 // var nomeArq = DTF;
 //alert(nomeArq);
 //temp_link.href = url;=
temp_link.download = tbEquip+vlDTIx+vlDTFx;
 // Este link não deve ser exibido
 temp_link.style.display = "block";
 document.body.appendChild(temp_link);

 //Clique automaticamente no link para
 // aciona o download
 temp_link.click();
 document.body.removeChild(temp_link);
 
 clearTodo()
 }else{
 alert("Senha Incorreta!!");
 }
}



document.getElementById('hwDescription').onclick = function () {
    
    this.classList.add("large");
        
    this.onkeypress = this.onkeydown = function() {
        this.size = ( this.value.length > 10 ) ? this.value.length : 10;
    };
	
 


}
function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }

	function addCalend(){
	
	var ckContA = document.getElementById("radContA").checked;
	var ckContAdt = document.getElementById("DatesCont");
	var ckContAhsI = document.getElementById("hsICont1");
	var ckContAhsF = document.getElementById("hsFCont1");
	var rdCont = document.getElementById("radContA");
	
	var ckcont = document.getElementById("chekJTcont").checked;
	
	if (ckcont == true){
		
		 $("#divCalend").css("visibility", "visible");
		  $("#ViewDT1").css("visibility", "visible");
		
		  $("#ViewTextCont").css("visibility", "visible");
		 
		 
		 document.getElementById("chekJTconv").disabled = true;
			document.getElementById("chekJTsobre").disabled = true;
			 document.getElementById("chekJTconv").checked = false;
			document.getElementById("chekJTsobre").checked = false;
			rdCont.disabled = true;
	 
	}else{	
	 $("#divCalend").css("visibility", "invisible");
	 $("#ViewDT1").css("visibility", "invisible");
	   $("#ViewTextCont").css("visibility", "invisible");
	 document.getElementById("DatesCont").value = "dd-mm-yyyy";
	 document.getElementById("hsFCont").value = "--:--";
	 document.getElementById("chekJTconv").disabled = false;
			document.getElementById("chekJTsobre").disabled = false;
	}
	
	//if ( ckContA == true) {
	//var atvCont = prompt("Atividade realizada:");
	//alert(atvCont);
//document.getElementById("#txtText").innerHTML = atvCont;
//	}
	
	
	
	}
	
var txtText;
var DatesContA; 
var hsICont1, hsFCont1, hsICont2; 
var AC1 = document.querySelector('checkbox');




AC1.addEventListener('click', function() {
alert("??");
//var txtTextAtual = document.querySelector('txtText');
	//alert(txtTextAtual.value);

});
  
    function addAtvCont(elem) {
	var divView1 = document.getElementById("ViewDT1").disabled = true;
	var ckContA = document.getElementById("radContA").checked;
	var txtCont = $("#textCont").val();
	var txtTextAtual = $("#txtText").val();
	//alert(txtTextAtual+"1"+txtCont);
	DatesContA = document.getElementById('DatesCont').value;
	hsICont1 = document.getElementById('hsICont').value;
	hsFCont1 = document.getElementById('hsFCont').value;
	//alert(ckContA+"1");
	//if (typeof(txtText) == "undefined")
	if (ckContA == true){
	
	$("#txtText").val(txtTextAtual+"\n"+"-:"+DatesContA +"("+hsICont1+"/"+hsFCont1+")-"+txtCont); 
	//alert(DatesContA +"_("+hsICont1+"/"+hsFCont1+")"+elem.value);
	
	
	
	
	 
	
	}else if (ckContA == false){
	 var ckContA = document.getElementById("radContA");
	
      //  alert("bb") ;
		ckContA.value = true;
		//alert(ckContA.value+"2");
	document.getElementById('DatesCont').value = "dd-mm-yyyy";
	document.getElementById('hsICont').value = "--:--";
	document.getElementById('hsFCont').value = "--:--";
	$("#textCont").val("");
	 ckContA.disabled = true;
	 ckContA.checked = false;
	
	
	}
	
    }
	 ckContA.onclick = function () {
    };
	
	
	function addDtCont(elemDT){
	alert(elemDT.value);
	if (typeof(txtText) == "undefined")
	$("#txtText").val(elemDT.value); 
	}
	
	
	
	function CalendCont(elemDT){
	var ckContAdt = document.getElementById("DatesCont");
	var textCont = document.getElementById("textCont").value;
	
	var rdCont = document.getElementById("radContA");
	
	
	if ((ckContAdt.value != "") && ( textCont == "" )){
	alert("** Inserir Descrição!!");
	ckContAdt.value = "dd-mm-yyyy";
	}else{
	 rdCont.disabled = false;
	 }
	}