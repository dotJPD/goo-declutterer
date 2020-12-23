document.getElementById("NR-sub").addEventListener("load", declutter());

function declutter(){
	document.getElementById("NR-sub").remove();

	document.getElementById("NR-main").style.width = "100%";

	document.getElementsByClassName("lcont")[0].style.width = "100%";
	document.getElementsByClassName("rcont")[0].style.width = "100%";

	while(document.getElementsByClassName("NR-ad").length){
		document.getElementsByClassName("NR-ad")[0].remove();
	}
}