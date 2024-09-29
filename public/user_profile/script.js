function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addAddress() {
    alert("Add new address functionality would be implemented here.");
}

function addPaymentMethod() {
    alert("Add new payment method functionality would be implemented here.");
}

// Sample data
const orders = [
    { id: "ORD001", date: "2023-09-15", total: "₹120.50", status: "Delivered" },
    { id: "ORD002", date: "2023-09-20", total: "₹75.00", status: "Shipped" },
    { id: "ORD003", date: "2023-09-25", total: "₹200.75", status: "Processing" }
];

const addresses = [
    { id: "ADDR001", type: "Home", address: "123 Main St, Anytown, AN 12345" },
    { id: "ADDR002", type: "Work", address: "456 Office Blvd, Workville, WK 67890" }
];

const paymentMethods = [
    { id: "PAY001", type: "Credit Card", last4: "1234", expiry: "12/25" },
    { id: "PAY002", type: "PayPal", email: "john.doe@example.com" }
];

// Function to populate order history
function populateOrders() {
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = orders.map(order => `
        <div class="order-item">
            <strong>Order ID: ${order.id}</strong><br>
            Date: ${order.date}<br>
            Total: ${order.total}<br>
            Status: ${order.status}
        </div>
    `).join('');
}

// Function to populate addresses
function populateAddresses() {
    const addressList = document.getElementById("addressList");
    addressList.innerHTML = addresses.map(addr => `
        <div class="address-item">
            <strong>${addr.type}</strong><br>
            ${addr.address}
        </div>
    `).join('');
}

function populateUser() {
    document.getElementById("userName").textContent = "RSS F";
    document.getElementById("userEmail").textContent = "team.RSSF@example.com";
    document.getElementById("profiePic").textContent = "R";
}



// Initialize the page
window.onload = function() {
    populateOrders();
    populateAddresses();
    populateUser();
};
