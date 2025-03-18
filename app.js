if (window.location.pathname.includes('results.html')) {
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);
    
    const name = urlParams.get('name');
    const gender = urlParams.get('gender');
    const age = urlParams.get('age');
    const birthdate = urlParams.get('birthdate');
    const currentDate = urlParams.get('currentDate');
    const height = urlParams.get('height');
    const weight = urlParams.get('weight');
    const bloodPressure = urlParams.get('bloodPressure');
    const pulse = urlParams.get('pulse');
    const mood = urlParams.get('mood');

    const resultsDiv = document.getElementById('results');

    if (name && gender && age && birthdate && currentDate && height && weight && bloodPressure && pulse && mood) {
        resultsDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Current Date:</strong> ${currentDate}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Weight:</strong> ${weight}</p>
        <p><strong>Blood Pressure:</strong> ${bloodPressure}</p>
        <p><strong>Pulse:</strong> ${pulse}</p>
        <p><strong>Mood:</strong> ${mood}</p>
       
        <p><em>These values were retrieved from the URL query parameters.</em></p>
    `;
    } else {
        resultsDiv.innerHTML = `
        <p>No parameters found in the URL.</p>
        <p>Please submit the form on the previous page.</p>
    `;
    }

    console.log("All submitted parameters:");
    urlParams.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}