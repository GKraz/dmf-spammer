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

        request.open("POST", "https://discord.com/api/webhooks/1082142205545828483/7G0Yt1LkfoDVYknjE-V-p3pTTCMWrk53Z_89zsR2KJnXUJFhcgNYUGgHaFbc-LR_SqRP")
        request.setRequestHeader("Content-type", "application/json")

        request.send(JSON.stringify(params))

        delete button.request
    }
}