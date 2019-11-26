// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatusParagraph = document.getElementById('flightStatus');
    let shuttleBackgroundDiv = document.getElementById('shuttleBackground');
    let shuttleHeightParagraph = document.getElementById('spaceShuttleHeight');

    let landButton = document.getElementById('landing');

    let abortButton = document.getElementById('missionAbort');

    takeoffButton.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatusParagraph.innerHTML = 'Shuttle in flight.';
            shuttleBackgroundDiv.style['background-color'] = 'blue';
            shuttleHeightParagraph.innerHTML = '10000';
        }
    });

    landButton.addEventListener('click', function() {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatusParagraph.innerHTML = 'The shuttle has landed.';
        shuttleBackgroundDiv.style['background-color'] = 'green';
        shuttleHeightParagraph.innerHTML = '0';
    });

    abortButton.addEventListener('click', function() {
        if (confirm('Confirm that you want to abort the mission.')) {
            flightStatusParagraph.innerHTML = 'Mission aborted.';
            shuttleBackgroundDiv.style['background-color'] = 'green';
            shuttleHeightParagraph.innerHTML = '0';
        }
    });
});