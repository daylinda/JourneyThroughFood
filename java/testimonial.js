//Script to append post to googlesheet
function submitPost() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the form element
    var form = document.getElementById('postForm');

    // Retrieve input values from the form
    var post = form.elements['postContent'].value;
    var name = form.elements['userName'].value;

    //only send if value filled
    if (!name || !post) {
        alert('Please fill out all fields.');
        return;  // Stop the function if any field is empty
    }

    //make the loading visible when operation is taking place
    document.getElementById('loading').style.display = 'block';

    //fetch api is used 
    fetch('https://script.google.com/macros/s/AKfycby85q1KXys39mcZqP8iUS9FWnYTtDDto2iL7ZZCjYaaeHQ2L96NyPL5Jedy7fH9vN7JrA/exec', {
        method: 'POST',
        mode: 'no-cors',  
        body: JSON.stringify({ value1: name, value2: post }),
    }).then(response => {
        //once I get response, I Load the data on webpage
        console.log('Data sent to Google Sheet');
        fetchData();
    }).catch(error => {
        console.error('Error:', error);
    }).finally(() => {
        // Hide the loading indicator regardless of the result
        document.getElementById('loading').style.display = 'none';
        form.reset();
    });
    
    
}
document.addEventListener('DOMContentLoaded', function () {
    //Always load data when webpage is loading the first time
    fetchData()
});

//used to read data from googlesheet
function fetchData() {
    //required credentials
    const sheetId = '17gIeC87on3aKgRdFSblxU-o-s4faPJm_LNSNVuHXY5E';  
    const apiKey = 'AIzaSyDQH5I0KtsFfyIpnbf9qIqUMBJ985BtugM';    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:B500?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //need to do this to check if any data is there
            if (data.values.length > 0) {
                displayContents(data.values);
                console.log('Data received:', data.values);
            } else {
                console.log('No data found.');
            }
        })
        .catch(error => console.error('Error:', error));

}

//display on the webpage
function displayContents(data) {
    const container = document.getElementById('postsContainer');

    let tableHtml = '<table><tr><th>Name</th><th>Testimonial</th></tr>';

    data.forEach(row => {
        tableHtml += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
    });

    tableHtml += '</table>';
    container.innerHTML = tableHtml;
    
}


