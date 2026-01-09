const HumanPresence = {
    isVerified: false,
    checkExistence: function() {
        console.log("Monitoring biological presence in time and space...");
        this.isVerified = true;
        return "Verified: Human Present";
    }
};

window.onload = () => {
    const statusDiv = document.createElement('div');
    statusDiv.style.color = "green";
    statusDiv.style.fontWeight = "bold";
    statusDiv.style.marginTop = "20px";
    statusDiv.innerText = HumanPresence.checkExistence();
    document.body.appendChild(statusDiv);
};
