function longfade(){
			const thing = document.querySelector('.fade-in');
			thing.style.opacity = 1;
		}

function GiftFromAFLowerToAGarden() {
  let Flower = ".                         . - .                              .\n.  here   _ _       /       \\       _ _               .\n.  you   (     ` ' . \\       / . ' `     )                .\n.  go!      ' - . _ . ( ; ; ; ) . _ . - '                .\n.             . - '     , ` \" ` ,     ' - .                 .\n.         ( _ _ . - ' /       \\ ' - . _ _ )        _ , .\n.                       \\       / \\             _ _ /   / .\n.                          ' - '     \\       _ /   _ . '  .\n.    would you like it?      |   / _ _ /          .";
let OG_flower = "                                                          . - .\n                                             _ _       /       \\       _ _\n here you                             (     ` ' . \\       / . ' `     )\n go!                                       ' - . _ . ( ; ; ; ) . _ . - '\n                                              . - '     , ` \" ` ,     ' - .\n                                            ( _ _ . - ' /       \\ ' - . _ _ )         _ , \n                                                        \\       / \\             _ _ /   / \n                                                           ' - '     \\       _ /   _ . '  \n                                   would you like it?   |   / _ _ /";
  if (confirm(Flower) == true) {
   let reply = prompt("               ‧₊˚❀༉‧₊˚.\n*you now have a flower*", "Copy It: ❀ ʸᵒᵘ ᵐᵃʸ ⁿᵉᵉᵈ ᶦᵗ");
    if (reply.includes("thank") || reply.includes("Thank") || reply.includes("THANK")) {alert ("you're welcome, \nI hear minimal snails love flowers")}
  } else {
    alert ("oh.");
  }

}


function Doorman() {
	let giftmostbeautiful = prompt("       , - '   ;     !   ` - . \n     /   :     !     :     .   \\ \\   \n   | _   ;       _ _ :    ;     |  \\   \n   ) |   .     : ) ( .     !     |   | \n   |     :     ; ` '     ( _ )   (   |   - Hello. you cannot come in \n   |     :     :      .           |   |         without a gift most beautiful. \n   | _ __            :     .     | _ | \n          '  \" \" - - - . _ _ _ | ", "do you have a gift most beautiful?");
	if (giftmostbeautiful.includes("❀")) {
		if (confirm(
"   ,-' ;  ! `-. ____\n  / :  !  :  . \\        \\ \n |_ ;   __:  ;  |         \\ \n | .  :)(.   !  |            | \n |  :  ;`'  (_) (           |  - Allright, i guess we'll let you in\n |  :  :  .     |            | \n |___     :  .  |_______|\n      \"---.___|                    *do you enter the door?*\n NOTE: this will redirect you into the door which may be blocked by the portal you are acessing this world through") == true) {window.open("FrogButt/FBindex.html");
        }
        else {alert ("Well if you want to come in just show the gift")}
    }
    else if (giftmostbeautiful.includes("no")){alert ("that is a shame, but I appreciate you not lying to me, I hear a beauty enjoyer hangs out near the sketch books")}
    else {alert ("that is not what I am looking for, if you wish to get in then bring a gift most beautiful to my humble door")}
}

