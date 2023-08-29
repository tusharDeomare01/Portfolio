// live contest js
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                ihtml += `
                <div class="card-container">
                <!-- Repeat the following card code block for each card -->
                <div class="card">
                  <img src="contest.webp" style="width:100%">
                  <div class="card-body">
                    <h4><b>${contests[item].name}</b></h4>
                    <p>Status: ${contests[item].status}</p>
                    <p>Site: ${contests[item].site}</p>
                    <p>Within 24 Hours: ${contests[item].in_24_hours}</p>
                    <p>Starts at: ${contests[item].start_time}</p>
                    <p>Ends at: ${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="button" target="_blank">Visit Contest</a>
                  </div>
                </div>
                <!-- Repeat the above card code block for each card -->
              </div>
                `
        }
        cardContainer.innerHTML = ihtml
})
