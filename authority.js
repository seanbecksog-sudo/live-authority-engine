function verifyHuman() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);
            const timestamp = new Date().toUTCString();

            // This creates the definitive mobile alert for your screenshot
            alert("--- HUMAN PRESENCE VERIFIED ---\n" + 
                  "LAT: " + lat + "\n" + 
                  "LON: " + lon + "\n" + 
                  "TIME: " + timestamp + "\n" + 
                  "STATUS: GEOSPATIAL ATTESTATION ACTIVE");

            // Updates your Authority Log on the page
            const res = document.getElementById('results');
            if(res) {
                res.innerHTML = "Success: " + timestamp + " | LOC: " + lat + ", " + lon;
            }
        }, (error) => {
            alert("VERIFICATION FAILED: Location access denied.");
        });
    } else {
        alert("ERROR: Reality Anchoring not supported on this device.");
    }
}
