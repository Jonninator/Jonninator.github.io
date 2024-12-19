
function Pause(event) {
	document.getElementById("demo3").innerHTML = "Yippie!!";
}
function changeVidtoJump() {
	document.getElementById("VID1").src = "Frog Jump.mp4";
	document.getElementById("VID1").id = "VID2";
	document.getElementById("demo3").innerHTML = "HEY! you cant just go clicking on frogs butts you know!";
}
function changeVidtoExplode() {
	document.getElementById("VID2").src = "Frog Explode.mp4";
	document.getElementById("VID2").id = "VID3";
	  document.getElementById("demo3").innerHTML = "OH MY GOSH HES DEAD!?!? you just <b>had</b> to go touch his butt didnt you";
	  document.getElementById("demo2").value = 2
}
function CheckForDead() {
	if (document.getElementById("demo2").value == 2) {
		document.getElementById("demo3").innerHTML = "No you cant just click it away, hes really dead, we have to live with that now (dont reload the page)";
	}
	
}
		
function FindButt(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  document.getElementById("demo3").innerHTML = "Something WORKED";
  document.getElementById("demo").innerHTML = "The x-coordinate is: " + x;
  document.getElementById("demo2").innerHTML = "The y-coordinate is: " + y;
}


	

