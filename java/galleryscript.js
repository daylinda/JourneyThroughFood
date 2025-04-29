  // Function to display image details
function displayImageDetails(item) {
    const img = item.querySelector('img');
    const displayContainer = document.getElementById('displayContainer');
    const displayImage = document.getElementById('displayImage');
    const displayHeader = document.getElementById('displayHeader');
    const displayDescription = document.getElementById('displayDescription');

    displayImage.src = img.src; // Update the  src for the large image
    displayImage.alt = img.alt;
    displayHeader.textContent = img.alt; // Use the alt text as the title
    displayDescription.textContent = img.getAttribute('data-description'); // Get the description

    displayContainer.style.display = 'flex'; // Show the display container
}

//below code is opens a display container when image is clicked
document.querySelectorAll('.photo-item').forEach(item => {
    
    item.addEventListener('click', function () {

        displayImageDetails(item)        
    });
});


//below code closes the display container when cross is clicked
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the description from toggling again
        this.parentElement.style.display = 'none';//hide the display
    });
});

//used only for printing
function addDescriptionsForPrinting() {
   
        const photoItems = document.querySelectorAll('.photo-item');

        photoItems.forEach(item => {
            const description = item.querySelector('img').getAttribute('data-description');
            //checks if there is description and adds paragraph
            if (description) { 
                const descriptionParagraph = document.createElement('p');
                descriptionParagraph.textContent = description;
                item.appendChild(descriptionParagraph);
            }
        });
    
}

window.onbeforeprint = addDescriptionsForPrinting;
window.onafterprint = () => {   
   document.querySelectorAll('.photo-item p').forEach(p => p.remove()); // Clean up after printing
    
};

//specifically for accessibility
document.addEventListener('DOMContentLoaded', function () {
    const photoItems = document.querySelectorAll('.photo-item');
    let currentIndex = 0; // Track the current focused item

    // Function to update focus based on currentIndex
    function updateFocus() {
        photoItems[currentIndex].focus();
    }

    // keyboard navigation of the website, if you want to go to each picture
    photoItems.forEach((item, index) => {
        item.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                currentIndex = (index + 1) % photoItems.length; 
                updateFocus();
                event.preventDefault();
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                currentIndex = (index - 1 + photoItems.length) % photoItems.length; 
                updateFocus();
                event.preventDefault();
            } else if (event.key === 'Enter') {
                let check = document.getElementById('displayContainer').style.display;
                if (check != 'flex') {
                    displayImageDetails(item);
                } else {
                    document.getElementById('displayContainer').style.display = 'none';
                }
                event.preventDefault();
           } else if (event.key === 'Escape') {
                document.getElementById('displayContainer').style.display = 'none';
            }
        });
    });

    
});

