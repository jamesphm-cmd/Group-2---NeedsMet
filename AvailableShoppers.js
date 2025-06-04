const STAR_COUNT = 5;
const users = ["User 1", "User 2", "User 3", "User 4"];
const ratings = new Array(users.length).fill(0); // Tracks rating for each user (0-based index)

// Function to update star ratings for a user
function updateStars(userIndex, starIndex) {
    ratings[userIndex] = starIndex + 1; // Store rating (1 to 5)
    const starStates = new Array(STAR_COUNT).fill(false).map((_, index) => index <= starIndex);
    return {
        user: users[userIndex],
        rating: ratings[userIndex],
        stars: starStates.map(isFilled => ({
            symbol: isFilled ? '★' : '☆',
            color: isFilled ? '#FFD700' : '#000000' // Gold for filled, black for empty
        }))
    };
}

// Function to handle star click
function handleStarClick(userIndex, starIndex) {
    return updateStars(userIndex, starIndex);
}

// Function to handle star hover (optional)
function handleStarHover(userIndex, starIndex, isEntering) {
    return {
        user: users[userIndex],
        starIndex,
        color: isEntering ? '#FFD700' : (ratings[userIndex] > starIndex ? '#FFD700' : '#000000')
    };
}

// Function to get initial state for a user
function getUserState(userIndex) {
    const rating = ratings[userIndex];
    const starStates = new Array(STAR_COUNT).fill(false).map((_, index) => index < rating);
    return {
        user: users[userIndex],
        rating,
        stars: starStates.map(isFilled => ({
            symbol: isFilled ? '★' : '☆',
            color: isFilled ? '#FFD700' : '#000000'
        }))
    };
}

// Export functions and data for use in an app framework
module.exports = {
    users,
    STAR_COUNT,
    handleStarClick,
    handleStarHover,
    getUserState
};
