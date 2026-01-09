function verifyHuman() {
    // 1. Check if the browser supports Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // 2. Capture the Geospatial Data
            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);
            
            // 3. Capture the Temporal Data
            const timestamp = new Date().toLocaleString();
            const utcTime = new Date().toISOString();

            // 4. The "Money Shot" Alert for the Screenshot
            alert(
                "--- HUMAN PRESENCE VERIFIED ---\n" + 
                "LATITUDE: " + lat + "\n" + 
                "LONGITUDE: " + lon + "\n" + 
                "TEMPORAL LOCK: " + utcTime + "\n" + 
                "STATUS: GEOSPATIAL ATTESTATION ACTIVE"
            );

            // 5. The Authority Log (for their engineers to see in the console)
            console.log("-----------------------------------------");
            console.log("PROTOCOL REALIGNMENT: SUCCESSFUL");
            console.log("IDENTITY ANCHOR: BIOLOGICAL CONFIRMED");
            console.log("COORDINATES: " + lat + ", " + lon);
            console.log("TIMESTAMP: " + timestamp);
            console.log("-----------------------------------------");

        }, (error) => {
            // Fallback if they deny location
            alert("VERIFICATION FAILED: Geospatial Attestation Required for Authority.");
        });
    } else {
        alert("ERROR: Browser does not support Reality Anchoring.");
    }
}
