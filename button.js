const button = document.getElementById("WebhookButton")
let request
let quantity

const params = {
    username: "I HATE DMF!!!",
    content: "<@395361681087266816>",
}

button.onclick = () => {
    quantity = document.getElementById("SpamQuantity").value

    if (quantity == 0)
        quantity = 1

    for (let i = 0; i < quantity; i++)
    {
        request = new XMLHttpRequest()

        request.open("POST", "https://discord.com/api/webhooks/1070562513491591238/tsaEmQfP55jB4WtULJxF-s4eX_SH9m6AYj51lZ6ZWwigdesgf0e6MzVmwHqlDkev3F5u")
        request.setRequestHeader("Content-type", "application/json")

        request.send(JSON.stringify(params))

        delete button.request
    }
}