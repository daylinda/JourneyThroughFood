
//below is code for world map red dots, when the dots are clicked, their id is appended to url and sent to the recipie page
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('svg circle').forEach(item => {
        item.addEventListener('click', event => {
            //alert(`You clicked on ${item.id}`);
            //to run locally
            /*const url = `file:///C:/Users/Davina/Documents/WebDev/Labs/recipies.html?itemid=${(item.id)}`;*/
            //to run online
            //const url = `https://stuweb.cecs.anu.edu.au/~u7731298/recipies.html?itemid=${(item.id)}`;
            const url = `./recipies.html?itemid=${(item.id)}`;
            window.location.href = url;            
        });
        item.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                //alert(`You clicked on ${item.id}`);
                //to run locally
                /*const url = `file:///C:/Users/Davina/Documents/WebDev/Labs/recipies.html?itemid=${(item.id)}`;*/
                //to run online
                //const url = `https://stuweb.cecs.anu.edu.au/~u7731298/recipies.html?itemid=${(item.id)}`;
                const url = `./recipies.html?itemid=${(item.id)}`;
                window.location.href = url;
                event.preventDefault();
            }
            
        });
    });
});

//used to open feedback.html from CTA in header
function openFeedBackForm() {
    //to run locally
    /*window.location.href = 'file:///C:/Users/Davina/Documents/WebDev/Labs/feedback.html'; //test url*/
    //to run online
    // window.location.href = 'https://stuweb.cecs.anu.edu.au/~u7731298/feedback.html';
    window.location.href = './feedback.html';
}

//used to dismiss CTA in header
function dismiss() {
    var container = document.querySelector('.cta-container');
    container.style.display = 'none'; // This hides the feedback container
}
