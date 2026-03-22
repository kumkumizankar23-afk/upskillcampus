let total = 0;

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (name === "" || isNaN(amount)) {
        alert("Please enter valid data");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + amount;

    document.getElementById("list").appendChild(li);

    total += amount;
    document.getElementById("total").innerText = "Total: ₹" + total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}