  var worldData = {
                'PRIMEIRA_OPCAO': {
                    'INFERIOR': ["CASA-A"],                    
                    SUPERIOR: ["AP-A"],					
		     
                },
                'SEGUNDA_OPCAO': {
		'INFERIOR': ["CASA-B"],                    
                 SUPERIOR: ["AP-B"],
                    
                },
                'TERCEIRA_OPCAO': {
                    'INFERIOR': ["CASA-C"],                    
                 SUPERIOR: ["AP-C"],
                },
              
            };
			
			
		function IdenEquip(){
		var EquipeCOP = "EQUIPE_TERC-SR";
		}

		
            window.onload = function () {
		
					// ------(A)----RelaçãoFuncionarios		
		function Colab() {
        var nFun = ["FULANO","SICLANO"];
        var html = "";

    for(var i = 0; i < nFun.length; i++)
    {
        html =  '<option>'+nFun[i]+'</option>';
        document.getElementById('txtFun').innerHTML += html;
    }
	}
		$('document').ready(function(){
		Colab();
		});
		
	//-------------------------------------------------------------------------SeleçãoMultiplaFuncionarios
	
	function searchFlights() {
    var select1 = document.getElementById("txtFun");
    var selected1 = [];
    for (var i = 0; i < select1.length; i++) {
        if (select1.options[i].selected) selected1.push(select1.options[i].value);
    }
    //console.log(selected1);
	//alert(selected1);
	document.getElementById("val").value = selected1
	document.getElementById("#txtFun").value = selected1 
}
				
	//---------------(A)		
				
				
			//---*****DESATIVADO*****----(B)Relacionar Funcionario
		// var selectx = document.getElementById("selectF"),
             //        arrx = ["110155 - ANTONIO M DEMOLINER","090712 - GILBERTO AQUILES ROQUE","185819 - GIOVANE PACHECO DE FRAGA","182493 - JOSÉ LUIZ G LISBOA","184911 - LEONARDO SILVA MOREL","184853 - PATRICK MARTINS R COUGO","157693 - SADY MOREIRA","124024 - SANDRO REIS PERUZZO"];
             
            // for(var t = 0; t < arrx.length; t++)
            // {
            //     var optionx = document.createElement("OPTION");
             //        txtx = document.createTextNode(arrx[t]);
             //    optionx.appendChild(txtx);
              //   optionx.setAttribute("value",arrx[t]);
              //   selectx.insertBefore(optionx,selectx.lastChild);
            // }
	
	
		//---(B)
		
		//----(C)Relacionar Equipamentos
		 var selectx = document.getElementById("selTE"),
                     arrx = ["BANCO CAPACITOR",	"BOMBA DE ESGOTAMENTO",	"CENTRIFUGA", "CHAVE BOIA", "COMPRESSOR DE AR",	"CONVERSOR DE FREQUENCIA",	"GMB MONOBLOCO",	"GMB SUBMERSÍVEL",	"GMB SUBMERSO",	"MACROMEDIDOR",	"MEDIDOR GRANDEZAS ELE",	"MISTURADOR SUB-VERTICAL",	"MOTOR HORIZONTAL",	"MOTOR VERTICAL", "QUADRO DE COMANDO", "QUADRO GERAL DE BT",	"QUADRO GERAL MT",	"SECCIONADORA",	"SOFTSTART",	"TALHA ELÉTRICA",	"TALHA MANUAL",	"TELEMETRIA - RADIO",	"TELEMETRIA - SENSOR",	"TRANSFORMADOR DE FORÇA", "VÁLVULA GAVETA", "VÁLVULA RETENÇÃO", "VÁLVULA REDUTORA DE PRESSÃO"];
             
             for(var t = 0; t < arrx.length; t++)
             {
                 var optionx = document.createElement("OPTION");
                     txtx = document.createTextNode(arrx[t]);
                 optionx.appendChild(txtx);
                 optionx.setAttribute("value",arrx[t]);
                 selectx.insertBefore(optionx,selectx.lastChild);
             }
	
		// var selectx = document.getElementById("selecEquipB"),
          //           arrx = ["BANCO CAPACITOR",	"BOMBA DE ESGOTAMENTO",	"CENTRIFUGA", "COMPRESSOR DE AR",	"CONVERSOR DE FREQUENCIA",	"GMB MONOBLOCO",	"GMB SUBMERSÍVEL",	"GMB SUBMERSO",	"MACROMEDIDOR",	"MEDIDOR GRANDEZAS ELE",	"MISTURADOR SUB-VERTICAL",	"MOTOR HORIZONTAL",	"MOTOR VERTICAL",	"QUADRO GERAL DE BT",	"QUADRO GERAL MT",	"SECCIONADORA",	"SOFTSTART",	"TALHA ELÉTRICA",	"TALHA MANUAL",	"TELEMETRIA - RADIO",	"TELEMETRIA - SENSOR",	"TRANSFORMADOR DE FORÇA",	"VÁLVULA REDUTORA DE PRESSÃO"];
             
            // for(var t = 0; t < arrx.length; t++)
             //{
               //  var optionx = document.createElement("OPTION");
                 //    txtx = document.createTextNode(arrx[t]);
                 //optionx.appendChild(txtx);
                 //optionx.setAttribute("value",arrx[t]);
                 //selectx.insertBefore(optionx,selectx.lastChild);
            // }
			 
			 //var selectx = document.getElementById("selecEquipC"),
               //      arrx = ["BANCO CAPACITOR",	"BOMBA DE ESGOTAMENTO",	"CENTRIFUGA", "COMPRESSOR DE AR",	"CONVERSOR DE FREQUENCIA",	"GMB MONOBLOCO",	"GMB SUBMERSÍVEL",	"GMB SUBMERSO",	"MACROMEDIDOR",	"MEDIDOR GRANDEZAS ELE",	"MISTURADOR SUB-VERTICAL",	"MOTOR HORIZONTAL",	"MOTOR VERTICAL",	"QUADRO GERAL DE BT",	"QUADRO GERAL MT",	"SECCIONADORA",	"SOFTSTART",	"TALHA ELÉTRICA",	"TALHA MANUAL",	"TELEMETRIA - RADIO",	"TELEMETRIA - SENSOR",	"TRANSFORMADOR DE FORÇA",	"VÁLVULA REDUTORA DE PRESSÃO"];
             
             //for(var t = 0; t < arrx.length; t++)
            // {
               //  var optionx = document.createElement("OPTION");
                 //    txtx = document.createTextNode(arrx[t]);
                 //optionx.appendChild(txtx);
                 //optionx.setAttribute("value",arrx[t]);
                 //selectx.insertBefore(optionx,selectx.lastChild);
             //}
		//---(C)

			
                var cidList = document.getElementById("cidList"),
                    unidadeList = document.getElementById("unidadeList"),
                    SubUnidList = document.getElementById("SubUnidList");
                for (var cidade in worldData) {
                    cidList.options[cidList.options.length] = new Option(cidade, cidade);
					
                }
                cidList.onchange = function () {
                    unidadeList.length = 1;
                    SubUnidList.length = 1;
					unidadeList.select;
					
                    if (this.selectedIndex < 1) return;
					
                    for (var unidade in worldData[this.value]) {
                        unidadeList.options[unidadeList.options.length] = new Option(unidade, unidade);
						
                    }
					
                };
                cidList.onchange();
                unidadeList.onchange = function () {
                    SubUnidList.length = 1;
					SubUnidList.select;
                    if (this.selectedIndex < 1) return;
                    var SubUnid = worldData[cidList.value][this.value];
                    for (var i = 0; i < SubUnid.length; i++) {
                        SubUnidList.options[SubUnidList.options.length] = new Option(SubUnid[i], SubUnid[i]);
                    }
					
                };
            };
			
			//---------
		
