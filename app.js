// Function to fetch random user from the API
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/'); // Fetch data from the API
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }
        
        const data = await response.json();
        
        return data.results[0]; // Return the first random user
    } catch (error) 
     {
        console.error("Error fetching user data:", error);
        throw 'You have some problem!'
    }
}

// Function to display the user card
function displayUserCard(user) {
    const userCardContainer = document.getElementById("user-card");

    if (!user) {
        userCardContainer.innerHTML = `<p class="text-danger">Failed to load user data. Please try again.</p>`;
        return;
    }
    else
    userCardContainer.innerHTML = `
        <div class="card">
            <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first} ${user.name.last}">
            <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text">Email: ${user.email}</p>
                <p class="card-text">Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                <p class="card-text">Phone: ${user.phone}</p>
            </div>
        </div>
    `;
}

// Add event listener to the "Fetch Random User" button
const fetchUserButton = document.getElementById("fetch-user");
fetchUserButton.addEventListener("wheel", async () => {
    const user = await fetchRandomUser();
    displayUserCard(user);
});

