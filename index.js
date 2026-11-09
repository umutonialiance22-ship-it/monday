async function sleep(millis) {
    if (!Number.isInteger(millis) || millis < 1 || millis > 1000) {
        throw new RangeError("millis must be an integer between 1 and 1000");
    }

    return new Promise((resolve) => setTimeout(resolve, millis));
}
