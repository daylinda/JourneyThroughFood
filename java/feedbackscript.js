
//feedback form related changes
//below code is to select countries in the feedback form
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives"
    // more countries to be added
];


// to get the element from html form
const countrySelect = document.getElementById("country");

// select the country and make it visible
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.toLowerCase().replace(/\s+/g, "-"); // Convert to lowercase and replace spaces with hyphens
    option.textContent = country;
    countrySelect.appendChild(option);
});

// use to submit feedback form opens up the outlook app with body populated
function submit() {
    var form = document.getElementsByName('feedbackForm')[0];
    
    form.preventDefault();
    var name = form.elements['name'].value;
    var favoritemeal = form.elements['favoritemeal'].value;
    var recipe = form.elements['recipe'].value;
    var feedback = form.elements['feedback'].value;
    var country = form.elements['country'].value;
    //this is for the form not be submitted blank
    if (!name || !favoritemeal || !recipe || !feedback || !country) {
        alert('Please fill out all fields.');
        return;  // Stop the function if any field is empty
    }


    form.submit(); // Submit the form
    form.reset();  // Reset all form data
    
}
