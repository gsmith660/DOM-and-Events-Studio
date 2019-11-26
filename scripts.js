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
    shuttleImage.style.top = '122px';

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
        shuttleImage.style.left = '0px';
        shuttleImage.style.top = '122px';
    });

    abortButton.addEventListener('click', function() {
        if (confirm('Confirm that you want to abort the mission.')) {
            flightStatusParagraph.innerHTML = 'Mission aborted.';
            shuttleBackgroundDiv.style['background-color'] = 'green';
            shuttleHeightParagraph.innerHTML = '0';
            shuttleImage.style.left = '0px';
            shuttleImage.style.top = '122px';
        }
    });

    rightButton.addEventListener('click', function() {
        let backgroundWidth = shuttleBackgroundDiv.offsetWidth;
        let shuttleWidth = shuttleImage.offsetWidth;
        let horizontalPosition = Number(shuttleImage.style.left.slice(0, -2));
        if (horizontalPosition < (backgroundWidth - shuttleWidth / 2) / 2 - 10) {
            horizontalPosition += 10;
            shuttleImage.style.left = `${horizontalPosition}px`;
        } else {
            alert('Shuttle Will Go Off Screen!');
        }
    });

    leftButton.addEventListener('click', function() {
        let backgroundWidth = shuttleBackgroundDiv.offsetWidth;
        let shuttleWidth = shuttleImage.offsetWidth;
        let horizontalPosition = Number(shuttleImage.style.left.slice(0, -2));
        if (horizontalPosition > -((backgroundWidth - shuttleWidth / 2) / 2 - 10)) {
            horizontalPosition -= 10;
            shuttleImage.style.left = `${horizontalPosition}px`;
        } else {
            alert('Shuttle Will Go Off Screen!');
        }

    });

    upButton.addEventListener('click', function() {
        let verticalPosition = Number(shuttleImage.style.top.slice(0, -2));
        if (verticalPosition > 3) {
            verticalPosition -= 10;
            shuttleImage.style.top = `${verticalPosition}px`;
            shuttleHeight = Number(shuttleHeightParagraph.innerHTML);
            shuttleHeight += 10000;
            shuttleHeightParagraph.innerHTML = String(shuttleHeight);
        } else {
            alert('Shuttle Will Go Off Screen!');
        }
    });

    downButton.addEventListener('click', function() {
        let backgroundHeight = shuttleBackgroundDiv.offsetHeight;
        let shuttleHeight = shuttleImage.offsetHeight;
        let verticalPosition = Number(shuttleImage.style.top.slice(0, -2));
        if (verticalPosition < (backgroundHeight - shuttleHeight)){
            verticalPosition += 10;
            shuttleImage.style.top = `${verticalPosition}px`;
            shuttleHeight = Number(shuttleHeightParagraph.innerHTML);
            shuttleHeight -= 10000;
            shuttleHeightParagraph.innerHTML = String(shuttleHeight);
        } else {
            alert('Shuttle Will Go Off Screen!');
        }
    });
});