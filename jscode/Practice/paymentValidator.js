
// Building a payment check validator
function paymentProcess(cartTotal, paymentMethod) {
    try {
        // Validate cart total
        if (typeof cartTotal !== "number" || cartTotal < 0) {
            throw new Error("Invalid cart total");
        }

        // Validate payment method
        if (typeof paymentMethod !== "string") {
            throw new Error("Invalid payment method type");
        }

        // Card limit check
        if (paymentMethod.toLowerCase() === "card" && cartTotal >= 50000) {
            throw new Error("Card limit exceeded");
        }

        console.log(`Method: ${paymentMethod}`);
        console.log(`Cart Total: ${cartTotal}`);

    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Process Completed");
    }
}
paymentProcess(9000, "upi")