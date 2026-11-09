function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
}

async function sendDeliveryNotification() {
    console.log("Preparing delivery notification...");

    await sleep(1000);

    console.log("Your delivery is on its way!");
}

sendDeliveryNotification();