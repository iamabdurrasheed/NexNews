# 📰 NexNews App

A responsive and dynamic single-page news application built with React.js, Bootstrap, and NewsAPI.org. Stay informed with the latest headlines from around the world.

## 🌟 Features

- **Real-time News**: Fetch and display live news headlines from NewsAPI.org
- **Category Navigation**: Browse news by categories (Technology, Sports, Business, Health, Entertainment, Science)
- **Advanced Search**: Search for news articles using keywords
- **Responsive Design**: Mobile-first responsive layout using Bootstrap Grid
- **Theme Toggle**: Switch between light and dark themes
- **Article Modal**: View full article details in a modal popup
- **User Feedback**: Integrated feedback form with validation
- **Error Handling**: Comprehensive error handling and loading states

## 🚀 Technology Stack

- **Frontend**: React.js (JSX), HTML5, CSS3
- **UI Framework**: Bootstrap 5
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **API**: NewsAPI.org

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd NexNewsApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your NewsAPI key:
     ```
     VITE_NEWS_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
nexnews-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── NewsCard.jsx
│   │   ├── NewsList.jsx
│   │   ├── CategoryNav.jsx
│   │   ├── SearchBar.jsx
│   │   └── FeedbackForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CategoryPage.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   └── useFetchNews.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── api.js
├── .env
├── package.json
└── README.md
```

## 🎯 Key Components

### Functional Requirements ✅
- ✅ Home page displaying latest news headlines
- ✅ Navigation menu for news categories
- ✅ Search bar to find news by keywords
- ✅ Modal to view full article
- ✅ Form to collect user feedback
- ✅ Responsive layout using Bootstrap Grid
- ✅ Toggle between light/dark themes

### Technical Requirements ✅
- ✅ **HTML5**: Forms, lists, hyperlinks, semantic elements
- ✅ **CSS3**: Internal, inline, and external CSS with font effects, shadows, selectors
- ✅ **Bootstrap**: Grid system, navigation, buttons, modals, typography
- ✅ **React.js**: JSX, functional components, props, state, event handling, hooks, routing

## 🔗 API Integration

The app uses [NewsAPI.org](https://newsapi.org/) to fetch news data. Features include:
- Top headlines by category
- Search functionality
- Article details
- Source attribution
- Published date formatting

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: User preference-based theme switching
- **Loading States**: Skeleton screens and spinners for better UX
- **Error Handling**: Friendly error messages with retry options
- **Accessibility**: ARIA labels and semantic HTML

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_NEWS_API_KEY=your_newsapi_key_here
```

Get your free API key from [NewsAPI.org](https://newsapi.org/)

## 🚀 Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting platform (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React.js, Bootstrap, and NewsAPI.org
