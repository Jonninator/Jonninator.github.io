 // Select all navigation links
        const navLinks = document.querySelectorAll('div.image-container nav a'); //all links for switching between images
        let mainImage = document.getElementById('main-image'); //gets the location of image being seen
        const mainText = document.getElementById('main-text').querySelector('p');//gets the location of current text being displayed
		const mainTitle = document.getElementById('main-text').querySelector('h1');//^^ditto^^
       // const chatBox = document.getElementById('chat-box');//UNIPORTANT
       // const sendButton = document.getElementById('send-button');//UNIPORTANT
        //const userInput = document.getElementById('user-input');//UNIPORTANT
        let isTransitioning = false;//is a binary for checks
        const imageContainer = document.querySelector('.image-container');//gets location in which to put images

        // Function to remove 'active' class from all nav links
        function clearActiveClasses() {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
        }

        navLinks.forEach(link => {//runs when opened
            link.addEventListener('click', (e) => {//runs when a image navigator link is clicked -only when they are under image container-
                e.preventDefault(); // Prevent default anchor behavior
                if (isTransitioning) return;
                const newSrc = link.getAttribute('data-img');
                const newAlt = link.textContent;
                const newText = link.getAttribute('data-text');
                const newTitle = link.getAttribute('data-title');

                // Clear active classes and set the clicked link as active
                clearActiveClasses();
                link.classList.add('active');

                // If the newSrc is the same as the current, do nothing
                if (mainImage.src === newSrc) return;

                isTransitioning = true;

                // Create a new image element for transition
                const tempImage = document.createElement('img');
                tempImage.src = newSrc;
                tempImage.alt = newAlt;
                tempImage.style.opacity = 0;

                // When the new image loads, append it and fade in
                tempImage.onload = () => {
                    // Append the new image to the container
                    imageContainer.appendChild(tempImage);

                    // Trigger reflow to ensure the browser registers the new element
                    void tempImage.offsetWidth;

                    // Fade in the new image
                    tempImage.style.opacity = 1;

                    // Fade out the current image
                    mainImage.style.opacity = 0;

                    // After the transition, remove the old image and update mainImage
                    tempImage.addEventListener('transitionend', () => {
                        if (mainImage && mainImage.parentNode) {
                            mainImage.remove();
                        }
                        tempImage.id = 'main-image';
                        mainImage = tempImage; // Update the mainImage reference
                        isTransitioning = false;
                    });
                };

                tempImage.onerror = () => {
                    console.error('Failed to load image:', newSrc);
                    isTransitioning = false;
                };

                // Update the text content with fade effect
                mainText.style.opacity = 0;
                setTimeout(() => {
                    mainText.textContent = newText;
                    mainText.style.opacity = 1;
                }, 0); // Half of the transition duration for smoother effect

				mainTitle.style.opacity = 0;
                setTimeout(() => {
                    mainTitle.textContent = newTitle;
                    mainTitle.style.opacity = 1;
                }, 0);

                
            });
        });
		// END OF PHOTO DIGITAL FUNCTIONS

function GiftFromAFLowerToAGarden() {
  let Flower = ".                         . - .                              .\n.  here   _ _       /       \\       _ _               .\n.  you   (     ` ' . \\       / . ' `     )                .\n.  go!      ' - . _ . ( ; ; ; ) . _ . - '                .\n.             . - '     , ` \" ` ,     ' - .                 .\n.         ( _ _ . - ' /       \\ ' - . _ _ )        _ , .\n.                       \\       / \\             _ _ /   / .\n.                          ' - '     \\       _ /   _ . '  .\n.    would you like it?      |   / _ _ /          .";
let OG_flower = "                                                          . - .\n                                             _ _       /       \\       _ _\n here you                             (     ` ' . \\       / . ' `     )\n go!                                       ' - . _ . ( ; ; ; ) . _ . - '\n                                              . - '     , ` \" ` ,     ' - .\n                                            ( _ _ . - ' /       \\ ' - . _ _ )         _ , \n                                                        \\       / \\             _ _ /   / \n                                                           ' - '     \\       _ /   _ . '  \n                                   would you like it?   |   / _ _ /";
  if (confirm(Flower) == true) {
   let reply = prompt("               ‧₊˚❀༉‧₊˚.\n*you now have a flower*", "Copy It: ❀ ʸᵒᵘ ᵐᵃʸ ⁿᵉᵉᵈ ᶦᵗ");
    if (reply.includes("thank") || reply.includes("Thank") || reply.includes("THANK")) {alert ("you're welcome")}
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
