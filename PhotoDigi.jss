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


