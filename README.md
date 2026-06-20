# task-6
Weather Dashboard Application
Project Overview

The Weather Dashboard Application is a responsive web application that allows users to search for weather information for any city worldwide. The application fetches real-time weather data from the OpenWeather API and displays current weather conditions along with a 5-day forecast.

The project demonstrates modern JavaScript development concepts including asynchronous programming with Async/Await, API integration, Local Storage, DOM manipulation, error handling, and responsive web design.

Project Objectives
Fetch weather data from a public weather API.
Display current weather conditions.
Display a 5-day weather forecast.
Implement city search functionality.
Save user preferences using Local Storage.
Handle loading states and errors gracefully.
Create a responsive and accessible user interface.
Features
Current Weather Display
City Name
Temperature
Weather Description
Humidity
Wind Speed
Weather Icon
5-Day Forecast
Forecast Cards
Daily Temperature
Weather Icons
Weather Conditions
Search Functionality
Search by City Name
Search using Enter Key
Dynamic Data Updates
Local Storage
Save Last Searched City
Automatically Load Saved City
User Preference Persistence
Error Handling
Invalid City Detection
API Error Handling
User-Friendly Error Messages
Loading State
Loading Indicator During API Requests
Improved User Experience
Responsive Design
Mobile-Friendly Layout
Tablet Support
Desktop Support
Technologies Used
HTML5
CSS3
JavaScript (ES6+)
OpenWeather API
Local Storage
Fetch API
Async/Await
Project Structure

weather-dashboard/

├── index.html

├── css/

│ └── styles.css

├── js/

│ ├── app.js

│ ├── api.js

│ └── storage.js

└── README.md

File Descriptions
index.html

Contains:

Search Input
Search Button
Current Weather Section
Forecast Section
Loading Indicator
Error Message Area
css/styles.css

Contains:

Responsive Layout
Weather Card Design
Forecast Grid Layout
Animations
Mobile Styling
js/api.js

Responsible for:

API Communication
Current Weather Requests
Forecast Requests
Error Handling
js/storage.js

Responsible for:

Saving User Preferences
Loading User Preferences
Local Storage Management
js/app.js

Responsible for:

Event Listeners
Search Functionality
DOM Manipulation
UI Updates
Forecast Rendering
Installation Instructions
Step 1

Download or clone the project repository.

Step 2

Create an OpenWeather API account and generate an API key.

Step 3

Open:

js/api.js

Replace:

const API_KEY = "YOUR_API_KEY";

with your actual API key.

Step 4

Save all files.

Step 5

Open:

index.html

in your web browser.

API Integration

The application uses the OpenWeather API.

Current Weather Endpoint:

https://api.openweathermap.org/data/2.5/weather

Forecast Endpoint:

https://api.openweathermap.org/data/2.5/forecast

Data is fetched using Async/Await and processed before displaying to the user.

Technical Details
Architecture

User
↓
Search City
↓
app.js
↓
api.js
↓
OpenWeather API
↓
JSON Response
↓
DOM Update

Algorithms Used
Weather Search Algorithm
User enters city name.
Search button clicked.
Validate input.
Send API request.
Receive weather data.
Update UI.
Save city in Local Storage.
Forecast Processing Algorithm
Fetch forecast data.
Filter daily records.
Generate forecast cards.
Render cards dynamically.
Data Structures Used
Objects

Used to store:

Weather Data
Forecast Data
User Preferences
Arrays

Used for:

Forecast List Processing
Dynamic Forecast Card Generation
Local Storage

Stores:

{
"defaultCity": "London"
}

Accessibility Features
Semantic HTML5 Structure
ARIA Labels
Keyboard Accessibility
Responsive Text Sizes
Accessible Color Contrast
Testing Evidence
Functional Testing
Test Case	Expected Result	Status
Search Valid City	Weather Displayed	PASS
Search Invalid City	Error Message	PASS
Enter Key Search	Weather Displayed	PASS
Load Saved City	Weather Loaded	PASS
Forecast Display	5-Day Forecast Visible	PASS
Loading State	Spinner Visible	PASS
Browser Testing
Browser	Status
Google Chrome	PASS
Mozilla Firefox	PASS
Microsoft Edge	PASS
Responsive Testing
Device	Status
Desktop	PASS
Tablet	PASS
Mobile	PASS
Deployment
GitHub Pages
Upload project files to GitHub.
Open Repository Settings.
Select Pages.
Choose Main Branch.
Save Changes.
Netlify
Create Netlify account.
Drag and drop project folder.
Deploy website instantly.
Future Enhancements
Weather Maps
Geolocation Support
Dark Mode
Multiple City Favorites
Hourly Forecast
Weather Alerts
Air Quality Index Integration
Conclusion

The Weather Dashboard Application successfully demonstrates modern web development concepts including API integration, asynchronous programming, Local Storage, responsive design, and error handling. The project provides a user-friendly experience while meeting all technical requirements specified for the assignment.
