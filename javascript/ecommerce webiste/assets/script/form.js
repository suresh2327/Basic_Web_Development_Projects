document.addEventListener("DOMContentLoaded", function() {
    console.log("E-commerce website loaded successfully");

    // Handle search functionality
    const searchButton = document.querySelector(".btn-primary");
    const searchInput = document.querySelector(".form-control");
    
    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function() {
            let query = searchInput.value.trim();
            if (query !== "") {
                alert("Searching for: " + query);
                // Implement actual search logic here
            }
        });
    }

    // Handle add to cart functionality
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Item added to cart!");
            // Implement actual cart logic here
        });
    });
});