document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('foodDonationForm');
    const donationList = document.getElementById('donationList');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form data
        const donorName = document.getElementById('donorName').value;
        const donorEmail = document.getElementById('donorEmail').value;
        const foodType = document.getElementById('foodType').value;
        const quantity = document.getElementById('quantity').value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = `${donorName} (${donorEmail}) donated ${quantity} of ${foodType}`;

        // Add the new list item to the donation list
        donationList.appendChild(listItem);

        // Clear the form
        form.reset();
    });
});
