
fetch("https://api.spacexdata.com/v3/history")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughEvents(json);
    });

    function loopThroughEvents(eventObject) {
    const eventArray = eventObject;

    var newHTML = "";

    eventArray.forEach(function(event) {
        newHTML += `<div class="events">
                        <h3 class="historydate">${event.event_date_utc.slice(0,10)}</h3>
                        <h2 class="title">${event.title}</h2>
                        <p class="details">${event.details}</p>
                        <img src="img/arrow.png" class="arrowpic">
                    </div>`;
    });
      eventshere.innerHTML = newHTML;
}

