<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authority Engine</title>
    <style>
        body { background-color: black; color: #00FF00; font-family: monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; text-align: center; }
        .box { border: 1px solid #00FF00; padding: 20px; max-width: 500px; margin-bottom: 20px; }
        .btn { background-color: #00FF00; color: black; border: none; padding: 20px 40px; font-size: 1.2rem; cursor: pointer; font-weight: bold; width: 100%; max-width: 400px; transition: 0.3s; }
        .btn:hover { background-color: #008800; }
        .btn-alt { background-color: transparent; color: #00FF00; border: 2px solid #00FF00; margin-top: 15px; text-decoration: none; display: inline-block; padding: 10px 20px; }
        #log { margin-top: 30px; width: 80%; max-width: 400px; border-top: 1px solid #333; padding-top: 20px; }
        h1 { margin-bottom: 5px; }
        p { color: white; line-height: 1.5; }
    </style>
</head>
<body>

    <h1>HUMAN PRESENCE PROTOCOL</h1>
    <p style="color: #00FF00; margin-bottom: 25px;">Verified Temporal & Geospatial Locking System</p>

    <div class="box">
        <h3>WHAT IS THIS?</h3>
        <p>This engine stops AI "Deepfake" scams. It forces a user to prove they are physically present at a specific coordinate in real-time.</p>
    </div>

    <button class="btn" onclick="verifyHuman()">VERIFY HUMAN PRESENCE</button>

    <br>

    <a href="mailto:Seanbecksog@gmail.com?subject=Licensing Inquiry" class="btn btn-alt">Inquiry: Licensing / Contact</a>

    <div id="log">
        <h3>AUTHORITY LOG</h3>
        <div id="results">Waiting for input...</div>
    </div>

    <script src="authority.js"></script>

</body>
</html>
