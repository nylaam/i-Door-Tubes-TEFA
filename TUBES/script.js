//mengyembunyikan dropdown cabang sebelum memilih nama kota
document.getElementById('jkt').style.display = "none";
document.getElementById('bl').style.display = "none";
document.getElementById('ygy').style.display = "none";



function dropdownkota(){
    var option = document.getElementById("kota").value;

    switch(option)
			{
				case "jkt" : {
                    console.log(option)
					document.getElementById('jkt').style.display = "inline-block";
					document.getElementById('bl').style.display = "none";
					document.getElementById('ygy').style.display = "none";
				}
				break;
				case "bl" : {
					document.getElementById('bl').style.display = "inline-block";
					document.getElementById('jkt').style.display = "none";
					document.getElementById('ygy').style.display = "none";
					

				}
				break;
				case "ygy" : {
					document.getElementById('ygy').style.display = "inline-block";
					document.getElementById('jkt').style.display = "none";
					document.getElementById('bl').style.display = "none";
				}
				break;
				default :
                document.getElementById('jkt').style.display = "none";
				document.getElementById('bl').style.display = "none";
				document.getElementById('ygy').style.display = "none";

			}

}
//menyembunyikan card detail cabang sebelum memilih nama cabang
document.getElementById('Thamrin').style.display = "none";
document.getElementById('Indah').style.display = "none";
document.getElementById('Kuta').style.display = "none";
document.getElementById('Sleman').style.display = "none";

//function dropdown nama cabang jakarta 
function namacabangjkt(){
var jakarta = document.getElementById("cabang1").value;

switch(jakarta)
			{
				case "thm" : {
                    document.getElementById('Thamrin').style.display = "block";
					document.getElementById('Indah').style.display = "none";
					document.getElementById('Kuta').style.display = "none";
					document.getElementById('Sleman').style.display = "none";
				}
				break;
				case "pi" : {
					document.getElementById('Indah').style.display = "block";
					document.getElementById('Thamrin').style.display = "none";
					document.getElementById('Kuta').style.display = "none";
					document.getElementById('Sleman').style.display = "none";
				}
				break;
				default :
				document.getElementById('Thamrin').style.display = "none";
				document.getElementById('Indah').style.display = "none";
				document.getElementById('Kuta').style.display = "none";
				document.getElementById('Sleman').style.display = "none";

			}

			
                

}

//function dropdown nama cabang bali
function namacabangbl(){
	var bali=document.getElementById("cabang2").value;
	switch(bali)
	{
		case "kt" : {
			document.getElementById('Kuta').style.display = "block";
			document.getElementById('Thamrin').style.display = "none";
			document.getElementById('Indah').style.display = "none";
			document.getElementById('Sleman').style.display = "none";

		}
		break;
		default :
		document.getElementById('Thamrin').style.display = "none";
		document.getElementById('Indah').style.display = "none";
		document.getElementById('Kuta').style.display = "none";
		document.getElementById('Sleman').style.display = "none";

	}
}

//function dropdown nama cabang yogyakarta
function namacabangygy(){
	var jogja=document.getElementById("cabang3").value;
	switch(jogja)
	{
		case "slm" : {
			document.getElementById('Sleman').style.display = "block";
			document.getElementById('Thamrin').style.display = "none";
			document.getElementById('Indah').style.display = "none";
			document.getElementById('Kuta').style.display = "none";

		}
		break;
		default :
		document.getElementById('Thamrin').style.display = "none";
		document.getElementById('Indah').style.display = "none";
		document.getElementById('Kuta').style.display = "none";
		document.getElementById('Sleman').style.display = "none";

	}
}

//function detail pengunjung superior
function superior(){
		document.getElementById('awal').style.display="block";
		document.getElementById('sup').style.display="block";
		document.getElementById('deluxe').style.display="none";

}

//function detail pengunjung deluxe
function deluxe(){
	   document.getElementById('awal').style.display="block";
		document.getElementById('sup').style.display="none";
		document.getElementById('deluxe').style.display="block";

}

