const container = document.querySelector('.committee-container');
const members = Array.from(container.children);
const roles = ['chief', 'president', 'vice-president', 'secretary', 'member'];

// Clear the container to add role-specific rows
container.innerHTML = '';

// Loop through each role and create a row for each category
roles.forEach(role => {
    // Filter members based on their role
    const roleMembers = members.filter(member => member.dataset.role === role);

    if (roleMembers.length > 0) {
        // Create a row for the role
        const row = document.createElement('div');
        row.classList.add('committee-row', role + '-row');

        // Append each member with the specific role into this row
        roleMembers.forEach(member => {
            row.appendChild(member);
        });

        // Append the row to the container
        container.appendChild(row);
    }
});


var sidemenu = document.getElementById("sidemenu");
var barsIcon = document.querySelector('.fa-bars');

// Open menu function
function openmenu() {
    sidemenu.style.right = "0"; // Slide in menu
    sidemenu.classList.add("open"); // Add class to show it's open
    barsIcon.classList.add('hide'); // Hide the bars icon when menu is open
}

// Close menu function
function closemenu() {
    sidemenu.style.right = "-200px"; // Slide out menu
    sidemenu.classList.remove("open"); // Remove open class
    barsIcon.classList.remove('hide'); // Show the bars icon again
}


document.getElementById('donate-btn').addEventListener('click', function() {
    document.getElementById('donate-popup').style.display = 'flex'; // Show the pop-up
});

function closePopup() {
    document.getElementById('donate-popup').style.display = 'none'; // Hide the pop-up
}

function copyBankDetails() {
    const bankDetails = document.getElementById("bank-details").innerText;
    navigator.clipboard.writeText(bankDetails).then(() => {
        showNotification("Copied");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.innerText = message;
    notification.style.display = "block"; // Show the notification
    setTimeout(() => {
        notification.style.display = "none"; // Hide after 3 seconds
    }, 3000);
}






