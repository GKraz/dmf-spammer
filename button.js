const HtmlButton = document.getElementById("WebhookButton")

HtmlButton.onclick = () => {
    let request = new XMLHttpRequest()
    request.open("POST", "https://webhook-api-app-pal65.ondigitalocean.app/webhook")
    request.send()
}