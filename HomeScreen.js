<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Interface</title>
    <!-- Tailwind CSS CDN for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom font for a clean look */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6; /* Light gray background */
        }
        /* Ensure the main content area has enough top padding to not be hidden by the fixed header */
        main {
            padding-top: 5rem; /* Adjust based on header height */
        }
        /* Basic screen transition effect */
        .screen {
            transition: opacity 0.3s ease-in-out;
        }
        .screen.hidden {
            opacity: 0;
            pointer-events: none; /* Disable interactions when hidden */
            position: absolute; /* Prevent hidden elements from taking up space */
            width: 100%; /* Maintain layout consistency */
        }
        .screen:not(.hidden) {
            opacity: 1;
            position: relative;
            z-index: 1; /* Ensure visible screen is on top */
        }
    </style>
</head>
<body class="min-h-screen bg-gray-100 flex flex-col items-center">

    <!-- Application Wrapper -->
    <div id="app" class="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-xl overflow-hidden relative">

        <!-- Header Section -->
        <header class="w-full bg-white border-b border-gray-200 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md sm:relative sm:top-auto sm:left-auto sm:right-auto">
            <!-- Menu Icon (Hamburger) -->
            <button id="menu-btn" class="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md transition duration-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <!-- Navigation Icons -->
            <nav class="flex items-center space-x-6">
                <!-- Home Icon -->
                <button id="home-icon" class="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md transition duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                </button>
                <!-- Profile Icon -->
                <button id="profile-icon" class="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md transition duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </button>
                <!-- Notification Icon (Bell) -->
                <button id="notification-icon" class="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md transition duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </button>
                <!-- Chat Icon -->
                <button id="chat-icon" class="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md transition duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                </button>
            </nav>
        </header>

        <!-- Main Content Area -->
        <main class="flex-1 w-full flex flex-col items-center justify-center p-4 min-h-[calc(100vh-80px)] sm:min-h-0"> <!-- Adjusted min-h for small screens to prevent header overlap -->

            <!-- Home Screen: Visible by default -->
            <section id="home-screen" class="screen w-full max-w-md flex flex-col space-y-4 px-4 py-8 bg-white rounded-lg shadow-md">
                <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">Welcome!</h2>
                <button id="post-request-btn" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300">
                    POST YOUR REQUEST
                </button>
                <button id="see-requests-btn" class="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-600">
                    SEE REQUESTS
                </button>
            </section>

            <!-- Post Your Request Screen: Hidden initially -->
            <section id="post-request-screen" class="screen hidden w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">Post Your Request</h2>
                <p class="text-gray-600">This is where you can create and submit a new request. You can add a form here for details.</p>
                <div class="mt-6 flex flex-col space-y-4">
                    <input type="text" placeholder="Request Title" class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <textarea placeholder="Request Description" rows="4" class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">Submit Request</button>
                </div>
            </section>

            <!-- See Requests Screen: Hidden initially -->
            <section id="see-requests-screen" class="screen hidden w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">See Requests</h2>
                <p class="text-gray-600">Here you can browse through all the requests posted by others. This could be a list or card view.</p>
                <ul class="mt-6 space-y-3 text-left">
                    <li class="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h3 class="font-semibold text-lg">Request #1: Need help with gardening</h3>
                        <p class="text-sm text-gray-700">Looking for someone to help with planting and weeding this weekend.</p>
                    </li>
                    <li class="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h3 class="font-semibold text-lg">Request #2: Dog walking services</h3>
                        <p class="text-sm text-gray-700">Seeking a reliable dog walker for daily walks.</p>
                    </li>
                    <li class="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h3 class="font-semibold text-lg">Request #3: Tutoring in Math</h3>
                        <p class="text-sm text-gray-700">High school student needs help with Algebra.</p>
                    </li>
                </ul>
            </section>

            <!-- Profile Screen: Hidden initially -->
            <section id="profile-screen" class="screen hidden w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">User Profile</h2>
                <p class="text-gray-600">This section displays your personal information and settings.</p>
                <div class="mt-6 space-y-4">
                    <img src="https://placehold.co/100x100/A0B0C0/FFFFFF?text=Avatar" alt="User Avatar" class="w-24 h-24 rounded-full mx-auto shadow-md">
                    <p class="text-xl font-medium text-gray-700">John Doe</p>
                    <p class="text-md text-gray-500">johndoe@example.com</p>
                    <button class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out">Edit Profile</button>
                </div>
            </section>

            <!-- Notifications Screen: Hidden initially -->
            <section id="notification-screen" class="screen hidden w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">Notifications</h2>
                <p class="text-gray-600">All your alerts and updates will appear here.</p>
                <ul class="mt-6 space-y-3 text-left">
                    <li class="bg-yellow-50 p-3 rounded-md border border-yellow-200 flex items-start space-x-2">
                        <svg class="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h2a1 1 0 001-1V9a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <h3 class="font-semibold text-lg text-yellow-800">New Message!</h3>
                            <p class="text-sm text-yellow-700">You received a reply to your "Gardening Help" request.</p>
                        </div>
                    </li>
                    <li class="bg-green-50 p-3 rounded-md border border-green-200 flex items-start space-x-2">
                        <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <div>
                            <h3 class="font-semibold text-lg text-green-800">Request Accepted!</h3>
                            <p class="text-sm text-green-700">Your "Dog Walking" request has been accepted by a user.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <!-- Chat Screen: Hidden initially -->
            <section id="chat-screen" class="screen hidden w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
                <h2 class="text-2xl font-bold mb-4 text-gray-800">Chat</h2>
                <p class="text-gray-600">Connect with other users in real-time. This is a placeholder for your chat conversations.</p>
                <div class="mt-6 h-40 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                    <p>No active chats. Start a new conversation!</p>
                </div>
                <button class="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out">Start New Chat</button>
            </section>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Select all screen sections
            const screens = document.querySelectorAll('.screen');

            /**
             * Shows the specified screen and hides all others.
             * @param {string} screenId The ID of the screen to show (e.g., 'home-screen').
             */
            function showScreen(screenId) {
                screens.forEach(screen => {
                    if (screen.id === screenId) {
                        screen.classList.remove('hidden');
                        screen.classList.add('flex'); // Add flex to center content
                    } else {
                        screen.classList.add('hidden');
                        screen.classList.remove('flex');
                    }
                });
            }

            // --- Event Listeners for Main Buttons ---
            // 'POST YOUR REQUEST' button
            const postRequestBtn = document.getElementById('post-request-btn');
            if (postRequestBtn) {
                postRequestBtn.addEventListener('click', () => {
                    showScreen('post-request-screen');
                });
            }

            // 'SEE REQUESTS' button
            const seeRequestsBtn = document.getElementById('see-requests-btn');
            if (seeRequestsBtn) {
                seeRequestsBtn.addEventListener('click', () => {
                    showScreen('see-requests-screen');
                });
            }

            // --- Event Listeners for Header Navigation Icons ---
            // Home icon
            const homeIcon = document.getElementById('home-icon');
            if (homeIcon) {
                homeIcon.addEventListener('click', () => {
                    showScreen('home-screen');
                });
            }

            // Profile icon
            const profileIcon = document.getElementById('profile-icon');
            if (profileIcon) {
                profileIcon.addEventListener('click', () => {
                    showScreen('profile-screen');
                });
            }

            // Notification icon
            const notificationIcon = document.getElementById('notification-icon');
            if (notificationIcon) {
                notificationIcon.addEventListener('click', () => {
                    showScreen('notification-screen');
                });
            }

            // Chat icon
            const chatIcon = document.getElementById('chat-icon');
            if (chatIcon) {
                chatIcon.addEventListener('click', () => {
                    showScreen('chat-screen');
                });
            }

            








































































