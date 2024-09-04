  var worldData = {
                'PRIMEIRA OPCAO': {
                    'INFERIOR': ["CASA - A","CASA - B",	"CASA - C"],                    
                    SUPERIOR: ["AP - A","AP - B"],					
		     
                },
                'SEGUNDA OPCAO': {
                    'EBAB-ETA-ETE': ["EBAT-CENTENÁRIUO (EBAT-3)",	"EBAT-CENTENÁRIO (EBAT-7)",	"EBAT-SÃO JOÃO (EBAT-4)",	"EBAT-SÃO JORGE (EBAT-5)",	"EBAT-PRAIA REAL",	"ETA-TORRES",	"ETE-MAMPITUBA",	"ETE-OCEAN SIDE",	"EBAB-TORRES"],
                    EBE: ["EBE-1 BEIRA RIO",	"EBE-10 IRGA NORTE",	"EBE-2 PRAÇA",	"EBE-3 PRAIA GRANDE (PRAINHA)",	"EBE-4 PRAIA DA CAL",	"EBE-5 RIACHO",	"EBE-5.1 STAN",	"EBE-6 ETE VELHA",	"EBE-7.1 GUARITA ILHAS PARK",	"EBE-8.1 MORADA DAS PALMEIRAS", "EBE 8.2 IGRA SUL", "EBE 8.3 CURTUME", "EBE-9.1 RESERVA DAS ÁGUAS I",	"EBE-9.2 RESERVA DAS ÁGUAS II",	"EBE- OCEAN SIDE I",	"EBE- OCEAN SIDE II"],
                    RES: ["R0-ETA-SÃO BRÁS",	"R02-MORRO DO FAROL",	"R03-MORRO DO FAROL",	"R04-CENTENÁRIO",	"R05-MORRO DO FAROL",	"R06-CENTENÁRIO",	"R07-CENTENÁRIO",	"R08-SÃO BRÁS",	"R09-SÃO JORGE",	"R10-VILA SÃO JOÃO",	"R11-VILA PIRATABA",	"R12-PRAIA REAL"],
					US: ["OUTROS"], 
                },
                'TERCEIRA OPCAO': {
                    'EBAB-ETA-ETE': ["EBAB-ATLÂNTIDA",	"ETA-ATLÂNTIDA",	"ETE-FIGUEIRINHA", "ETE-XANGRI-LÁ"],
                    EBE: ["EBE-3 ATLÂNTIDA",	"EBE-2.1 EBE ET 2.1 (VENTURA)",	"EBE-2.2 EBE ET 2.2 (QUINTAS)",	"EBE-3.1 EBE ET 3.1 (C. HERMOSA)",	"EBE-ETE EBE RECICLO",	"EBE- NOVA XANGRI-LÁ, LOT.",	"EBE-Terceiro BLUE",	"EBE-Terceiro CASA HERMOSA",	"EBE-Terceiro ESSENCE, ED.",	"EBE-Terceiro LA PLAGE",	"EBE- ACQUALINA",	"EBE- ILHAS PARK 1",	"EBE- ILHAS PARK 2",	"EBE- VENTURA 2",	"EBE- ATLÂNTIDA SQUARE, ED.",	"EBE- BOSQUES DE ATLANTIDA",	"EBE- CARMEL",	"EBE- CELEBRATION 1",	"EBE- ENSEADA DOS LAGOS 1",	"EBE- ILHAS PARK 3",	"EBE- LAS DUNAS",	"EBE- QUINTAS DO LAGO",	"EBE- RIVIERA 1",	"EBE- GREEN VILLAGE 1",	"EBE- GREEN VILLAGE 2",	"EBE- RIVIERA 2",	"EBE- SEA COAST 1",	"EBE- SEA COAST 2",	"EBE- VENTURA 1",	"EBE- LAGOA DO PASSO",	"EBE- LAGOS PARK I",	"EBE- LAGOS PARK II",	"EBE- VENTURA 3",	"EBE- CELEBRATION 2",	"EBE- MALIBU",	"EBE- ONE ATLÂNTIDA HOUSES",	"EBE- ENSEADA DOS LAGOS 2",	"EBE- PATEO MARBELLA",	"EBE- PLAYA VISTA",	"EBE- PORTO CORONADO",	"EBE- ENSEADA DOS LAGOS 3",	"EBE- GREEN VILLAGE 3",	"EBE- LAGOS PARK 3",	"EBE- LAS PALMAS",	"EBE- ROSSI ATLÂNTIDA",	"EBE- RIVIERA 3",	"EBE- SANTORINI, LOT.",	"EBE- SENSE",	"EBE- PACIFIC",	"EBE- VILLAGIO"],
                    RES: ["R08-CENTRO",	"R09-VILLAS RESORT",	"R10-ATLÂNTIDA",	"R11-ATLÂNTIDA",	"R12-ATLÂNTIDA",	"R13-ETA",	"R14-RAINHA DO MAR",	"R15-ATLÂNTIDA SUL",	"R16-ATLÂNTIDA SUL",	"R17-LOT. PORTO CORONADO",	"R18-REMANSO/LAS DUNAS",	"R20-XANGRI-LÁ",	"R21-QUINTAS DO LAGO",	"R23-ATLÂNTIDA",	"R25-ARPOADOR",	"R26-RAINHA DO MAR"],
					US: ["OUTROS"], 
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
		
