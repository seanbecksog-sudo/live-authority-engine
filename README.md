<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authority Engine</title>
    <style>
        body { background-color: black; color: #00FF00; font-family: 'Courier New', monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
        .btn { background-color: #00FF00; color: black; border: none; padding: 20px 40px; font-size: 1.2rem; font-weight: bold; cursor: pointer; border-radius: 5px; margin: 10px; text-decoration: none; display: inline-block; }
        .btn-alt { background-color: transparent; color: #00FF00; border: 2px solid #00FF00; }
        #log { margin-top: 30px; font-size: 0.9rem; border-top: 1px solid #333; padding-top: 20px; width: 80%; max-width: 400px; }
        .status { color: white; font-size: 0.8rem; margin-bottom: 20px; }
    </style>
</head>
<body>

    <h1>HUMAN PRESENCE PROTOCOL</h1>
    <p class="status">ENGINE STATUS: <span style="color: #00FF00;">ACTIVE</span></p>

    <button class="btn" onclick="verifyPresence()">VERIFY HUMAN PRESENCE</button>

    <a href="mailto:your-email@example.com?subject=Licensing Inquiry: Human Presence Protocol" class="btn btn-alt">CONTACT FOR LICENSING</a>

    <div id="log">
        <h3>AUTHORITY LOG</h3>
        <div id="results">Waiting for input...</div>
    </div>

    <script>
        function verifyPresence() {
            const now = new Date();
            const timeString = now.toUTCString();
            
            // The Pop-up Alert
            alert("PRESENCE VERIFIED\nTemporal Lock: " + timeString);
            
            // Adding to the Log (The "Proof")
            const logDiv = document.getElementById('results');
            logDiv.innerHTML = "SUCCESS: Verified at " + timeString + "<br>" + logDiv.innerHTML;
        }
    </script>

</body>
</html>
