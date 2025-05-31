document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    document.getElementById('displayFname').textContent = params.get('fname') || 'N/A';
    document.getElementById('displayLname').textContent = params.get('lname') || 'N/A';
    document.getElementById('displayEmail').textContent = params.get('email') || 'N/A';
    document.getElementById('displayPhone').textContent = params.get('phone') || 'N/A';
    document.getElementById('displayOrgName').textContent = params.get('orgName') || 'N/A';

    const timestamp = params.get('timestamp');
    if (timestamp) {
        try {
            const date = new Date(timestamp);
            document.getElementById('displayTimestamp').textContent = date.toLocaleString();
        } catch (e) {
            document.getElementById('displayTimestamp').textContent = 'Invalid Date';
            console.error("Error parsing timestamp:", e);
        }
    } else {
        document.getElementById('displayTimestamp').textContent = 'N/A';
    }
});