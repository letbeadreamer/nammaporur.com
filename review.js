// JavaScript for handling user reviews and ratings

// Store reviews in an array
var reviews = [];

// Function to add a review to the array
function addReview(username, rating, review) {
  reviews.push({ username: username, rating: rating, review: review });
}

// Function to display reviews in the list
function displayReviews() {
  var reviewsList = document.getElementById("reviewsList");

  // Clear the current list
  reviewsList.innerHTML = "";

  // Loop through the reviews array and add to the list
  reviews.forEach(function (review) {
    var li = document.createElement("li");
    li.innerHTML = `
      <strong>${review.username}</strong> rated it ${review.rating} stars
      <p>${review.review}</p>
    `;
    reviewsList.appendChild(li);
  });
}

// Event listener for form submission
document.getElementById("reviewForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var username = document.getElementById("username").value;
  var rating = document.getElementById("rating").value;
  var review = document.getElementById("review").value;

  // Add review to the array and display
  addReview(username, rating, review);
  displayReviews();

  // Clear form fields
  document.getElementById("username").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("review").value = "";
});
