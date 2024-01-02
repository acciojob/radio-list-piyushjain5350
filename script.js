//your JS code here. If required.
let lebels = document.querySelectorAll("label");
for ( let i = 0; i < lebels.length; i++ ){
	if(i%2 == 1){
		lebels[i].style.color = "red";
	}
}