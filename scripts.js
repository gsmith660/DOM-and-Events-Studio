// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeoffButton = document.getElementById('takeoff');
    let flightStatusParagraph = document.getElementById('flightStatus');
    let shuttleBackgroundDiv = document.getElementById('shuttleBackground');
    let shuttleHeightParagraph = document.getElementById('spaceShuttleHeight');

    let landButton = document.getElementById('landing');

    let abortButton = document.getElementById('missionAbort');

    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');

    let shuttleImage = document.getElementById('rocket');
    shuttleImage.style.position = 'relative';
    shuttleImage.style.left = '0px';
    shuttleImage.style.top = '0px';

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

    rightButton.addEventListener('click', function() {
        let horizontalPosition = Number(shuttleImage.style.left.slice(0, -2));
        horizontalPosition += 10;
        shuttleImage.style.left = `${horizontalPosition}px`;
    });

    leftButton.addEventListener('click', function() {
        let horizontalPosition = Number(shuttleImage.style.left.slice(0, -2));
        horizontalPosition -= 10;
        shuttleImage.style.left = `${horizontalPosition}px`;
    });

    upButton.addEventListener('click', function() {
        let verticalPosition = Number(shuttleImage.style.top.slice(0, -2));
        verticalPosition -= 10;
        shuttleImage.style.top = `${verticalPosition}px`;
        shuttleHeight = Number(shuttleHeightParagraph.innerHTML);
        shuttleHeight += 10000;
        shuttleHeightParagraph.innerHTML = String(shuttleHeight);
    })

    downButton.addEventListener('click', function() {
        let verticalPosition = Number(shuttleImage.style.top.slice(0, -2));
        verticalPosition += 10;
        shuttleImage.style.top = `${verticalPosition}px`;
        shuttleHeight = Number(shuttleHeightParagraph.innerHTML);
        shuttleHeight -= 10000;
        shuttleHeightParagraph.innerHTML = String(shuttleHeight);
    })
});