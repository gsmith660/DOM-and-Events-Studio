// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatusParagraph = document.getElementById('flightStatus');
    let shuttleBackgroundDiv = document.getElementById('shuttleBackground');
    let shuttleHeightParagraph = document.getElementById('spaceShuttleHeight');

    takeoffButton.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatusParagraph.innerHTML = 'Shuttle in flight.';
            shuttleBackgroundDiv.style['background-color'] = 'blue';
            shuttleHeightParagraph.innerHTML = '10000';
        }
    });
});