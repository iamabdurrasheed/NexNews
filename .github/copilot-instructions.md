<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# NexNews App - Copilot Instructions

## Project Overview
This is a responsive and dynamic NexNews application built with React.js, Bootstrap, and NewsAPI.org. The app fetches and displays live news headlines with category navigation, search functionality, and user feedback forms.

## Technology Stack
- **Frontend**: React.js (with JSX), HTML5, CSS3
- **UI Framework**: Bootstrap 5
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **API**: NewsAPI.org

## Key Features
- Real-time news fetching from NewsAPI
- Category-based news browsing (Technology, Sports, Business, Health, Entertainment, Science)
- Search functionality with keyword-based filtering
- Responsive Bootstrap grid layout
- Dark/Light theme toggle
- Modal for viewing full articles
- User feedback form with validation
- Error handling and loading states

## Coding Guidelines
1. **Components**: Use functional components with React Hooks (useState, useEffect, useContext, useRef)
2. **Props & State**: Implement proper prop passing and state management
3. **Event Handling**: Handle form submissions, clicks, and user interactions
4. **API Calls**: Use Axios for HTTP requests with proper error handling
5. **Styling**: Combine Bootstrap classes with custom CSS for enhanced UI
6. **Responsive Design**: Ensure mobile-first responsive design using Bootstrap grid
7. **Accessibility**: Include proper ARIA labels and semantic HTML

## File Structure
- `/src/components/` - Reusable UI components
- `/src/pages/` - Route-based page components
- `/src/hooks/` - Custom React hooks
- `/src/context/` - React Context providers
- `/src/assets/` - CSS files and static assets
- `/src/api.js` - Axios configuration and API functions

## Environment Variables
- `VITE_NEWS_API_KEY` - NewsAPI.org API key for fetching news data

## Development Notes
- The app uses NewsAPI.org which has CORS restrictions in development
- Bootstrap components should be used extensively for consistent UI
- Custom CSS should complement Bootstrap classes, not override them
- All forms should include proper validation and error handling
- Loading states should be implemented for all API calls
