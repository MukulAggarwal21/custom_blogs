# Social Posts Application

A modern React application for creating, sharing, and interacting with posts. This application features a clean UI with commenting system, sharing capabilities, and real-time interactions.

## Features

- Create and fetch posts
- Like and comment on posts
- Nested comment replies (up to 3 levels deep)
- Share posts via social media
- Loading states and animations
- Responsive design
- Modern UI components using shadcn/ui

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Basic knowledge of React and Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Install required shadcn/ui components:
   ```bash
   npx shadcn-ui@latest add dialog
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add input
   npx shadcn-ui@latest add textarea
   npx shadcn-ui@latest add card
   ```

## Project Structure

```
src/
  components/
    Comment/
      Comment.jsx        # Comment component with nested replies
    CreatePostDialog/
      CreatePostDialog.jsx   # Dialog for creating new posts
    Loader/
      Loader.jsx        # Loading spinner component
    Post/
      Post.jsx          # Individual post component
    Posts/
      Posts.jsx         # Main posts container
    ShareDialog/
      ShareDialog.jsx   # Dialog for sharing posts
```

## Dependencies

- React
- lucide-react (for icons)
- shadcn/ui (for UI components)
- Tailwind CSS (for styling)

## Configuration

1. Add the following to your `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

2. Make sure your `jsconfig.json` or `tsconfig.json` includes the following path alias:
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## License

[MIT](LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please open an issue in the repository or contact the maintainers.
