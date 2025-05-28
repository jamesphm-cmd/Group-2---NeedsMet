<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Interface (JavaScript)</title>
    <style>
        /* Basic styling for the message box, will be dynamically shown/hidden */
        .message-box {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: none; /* Hidden by default */
            text-align: center;
        }
        .message-box button {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #ef4444; /* Red */
            color: white;
            border-radius: 0.375rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .message-box button:hover {
            background-color: #dc2626;
        }
    </style>
</head>
<body class="flex flex-col min-h-screen">
    <div id="app-root" class="flex flex-col min-h-screen"></div>

    <script>
        // Function to dynamically load a script
        function loadScript(src, callback) {
            const script = document.createElement('script');
            script.src = src;
            script.onload = callback;
            document.head.appendChild(script);
        }

        // Function to dynamically load a stylesheet
        function loadStylesheet(href) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }

        // Load Tailwind CSS and Inter font
        loadScript('https://cdn.tailwindcss.com', () => {
            // Tailwind CSS is loaded, now apply base styles
            document.body.className = 'flex flex-col min-h-screen';
            document.body.style.fontFamily = "'Inter', sans-serif";
            document.body.style.backgroundColor = "#f0f2f5"; /* Light gray background */
        });
        loadStylesheet('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');


        // Function to show the custom message box
        function showMessageBox(message) {
            const messageBox = document.getElementById('messageBox');
            const messageText = document.getElementById('messageText');
            if (messageBox && messageText) {
                messageText.textContent = message;
                messageBox.style.display = 'block';
            }
        }

        // Function to hide the custom message box
        function hideMessageBox() {
            const messageBox = document.getElementById('messageBox');
            if (messageBox) {
                messageBox.style.display = 'none';
            }
        }

        // Main function to build the UI
        function buildUI() {
            const appRoot = document.getElementById('app-root');
            if (!appRoot) {
                console.error("App root element not found!");
                return;
            }
            appRoot.innerHTML = ''; // Clear existing content

            // --- Message Box ---
            const messageBox = document.createElement('div');
            messageBox.id = 'messageBox';
            messageBox.className = 'message-box'; // Styles defined in <style> tag
            const messageText = document.createElement('p');
            messageText.id = 'messageText';
            messageText.className = 'text-lg font-medium';
            const okButton = document.createElement('button');
            okButton.textContent = 'OK';
            okButton.onclick = hideMessageBox;
            messageBox.appendChild(messageText);
            messageBox.appendChild(okButton);
            appRoot.appendChild(messageBox);

            // --- Header Section ---
            const header = document.createElement('header');
            header.className = 'bg-white p-4 shadow-sm';
            const headerDiv = document.createElement('div');
            headerDiv.className = 'container mx-auto flex items-center justify-between';
            const menuButton = document.createElement('button');
            menuButton.className = 'text-gray-700 focus:outline-none';
            menuButton.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
            headerDiv.appendChild(menuButton);
            header.appendChild(headerDiv);
            appRoot.appendChild(header);

            // --- Top Navigation Bar ---
            const nav = document.createElement('nav');
            nav.className = 'bg-gray-200 py-3 shadow-md';
            const navDiv = document.createElement('div');
            navDiv.className = 'container mx-auto flex justify-around items-center';

            // Helper function to create nav links
            function createNavLink(iconPath, text, url) {
                const link = document.createElement('a');
                link.href = url; // Set the URL for navigation
                link.className = 'text-gray-700 hover:text-gray-900 flex flex-col items-center';
                link.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}"></path>
                    </svg>
                    <span class="text-xs mt-1 hidden sm:block">${text}</span>
                `;
                return link;
            }

            // Append navigation links to the nav bar
            navDiv.appendChild(createNavLink('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6-10v10a1 1 0 001 1h3', 'Home', 'home.html'));
            navDiv.appendChild(createNavLink('M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', 'Profile', 'profile.html'));
            navDiv.appendChild(createNavLink('M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', 'Alerts', 'alerts.html'));
            navDiv.appendChild(createNavLink('M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', 'Chat', 'chat.html'));

            nav.appendChild(navDiv);
            appRoot.appendChild(nav);

            // --- Main Content Area ---
            const main = document.createElement('main');
            main.className = 'flex-grow flex flex-col items-center justify-center p-4';
            const mainDiv = document.createElement('div');
            mainDiv.className = 'w-full max-w-md space-y-6';

            // POST YOUR REQUEST Button
            const postRequestButton = document.createElement('button');
            postRequestButton.className = 'w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75';
            postRequestButton.textContent = 'POST YOUR REQUEST';
            // Set the onclick handler to navigate to 'post-request.html'
            postRequestButton.onclick = () => {
                window.location.href = 'post-request.html';
            };
            mainDiv.appendChild(postRequestButton);

            // SEE REQUESTS Button
            const seeRequestsButton = document.createElement('button');
            seeRequestsButton.className = 'w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75';
            seeRequestsButton.textContent = 'SEE REQUESTS';
            // Set the onclick handler to navigate to 'see-requests.html'
            seeRequestsButton.onclick = () => {
                window.location.href = 'see-requests.html';
            };
            mainDiv.appendChild(seeRequestsButton);

            main.appendChild(mainDiv);
            appRoot.appendChild(main);
        }

        // Build the UI when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', buildUI);
    </script>
</body>
</html>





















































