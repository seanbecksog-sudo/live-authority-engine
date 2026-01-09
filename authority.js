<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sovereign Authority Engine</title>
    <style>
        body { background-color: black; color: #00FF00; font-family: 'Courier New', monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; text-align: center; }
        .box { border: 2px solid #00FF00; padding: 30px; max-width: 500px; box-shadow: 0 0 15px #00FF00; }
        .btn { background-color: #00FF00; color: black; border: none; padding: 20px 40px; font-size: 1.3rem; cursor: pointer; font-weight: bold; width: 100%; margin-top: 20px; text-transform: uppercase; }
        .btn:active { transform: scale(0.98); background-color: #008800; }
        #results { margin-top: 25px; color: white; font-size: 1.1rem; border-top: 1px solid #333; padding-top: 20px; word-break: break-all; }
        .coord { color: #00FF00; font-weight: bold; }
    </style>
</head>
<body>

    <div class="box">
        <h1 style="margin:0;">AUTHORITY ENGINE</h1>
        <p style="color: #00FF00; letter-spacing: 2px;">V.2026.PROT</p>
        <p>Proving physical human presence via hardware-level geospatial attestation.</p>
        
        <button class="btn" onclick="triggerEngine()">VERIFY PRESENCE</button>
        
        <div id="results">READY FOR HANDSHAKE...</div>
    </div>

    <script>
        function triggerEngine() {
            const display = document.getElementById('results');
            display.innerHTML = "REQUESTING HARDWARE ACCESS...";

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const time = new Date().toUTCString();
                        
                        // THE MONEY SHOT OUTPUT
                        display.innerHTML = `
                            <span style="color:red;">VERIFIED</span><br>
                            LAT: <span class="coord">${lat}</span><br>
                            LON: <span class="coord">${lon}</span><br>
                            TIME: ${time}
                        `;
                        
                        alert(`SUCCESS\nLAT: ${lat}\nLON: ${lon}\nTIME: ${time}`);
                    },
                    (error) => {
                        display.innerHTML = "ERROR: LOCATION DENIED. PLEASE ENABLE GPS.";
                        console.error(error);
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            } else {
                display.innerHTML = "ERROR: HARDWARE NOT SUPPORTED.";
            }
        }
    </script>

</body>
</html>
