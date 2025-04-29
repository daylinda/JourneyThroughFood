//below code is used to retrieve the section Id from url
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const itemid = params.get('itemid'); //  retrieve the section id parameter, this is to know which section should be made visible
    if (itemid !== null) { //make sure that id is not null
        const element = document.getElementById(itemid); // Get the element by ID 
        if (element) { 
            element.classList.add('visible'); 
        }
    }
});

