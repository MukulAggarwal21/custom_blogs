Social Posts Application
A modern React application for creating, sharing, and interacting with posts. This application features a clean UI with commenting system, sharing capabilities, and real-time interactions.
Features

Create and fetch posts
Like and comment on posts
Nested comment replies (up to 3 levels deep)
Share posts via social media
Loading states and animations
Responsive design
Modern UI components using shadcn/ui

Prerequisites

Node.js (v14.0.0 or higher)
npm or yarn package manager
Basic knowledge of React and Tailwind CSS

Installation

Clone the repository:

bashCopygit clone <your-repository-url>
cd <project-directory>

Install dependencies:

bashCopynpm install
# or
yarn install

Install required shadcn/ui components:

bashCopynpx shadcn-ui@latest add dialog
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add card
Project Structure
Copysrc/
  components/
    Comment/
      Comment.jsx        # Comment component with nested replies
    CreatePostDialog/
      CreatePostDialog.jsx  # Dialog for creating new posts
    Loader/
      Loader.jsx        # Loading spinner component
    Post/
      Post.jsx          # Individual post component
    Posts/
      Posts.jsx         # Main posts container
    ShareDialog/
      ShareDialog.jsx   # Dialog for sharing posts
Dependencies

React
lucide-react (for icons)
shadcn/ui (for UI components)
Tailwind CSS (for styling)
Configuration

Add the following to your tailwind.config.js:

javascriptCopymodule.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

Make sure your jsconfig.json or tsconfig.json includes the following path alias:

jsonCopy{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
Usage

Start the development server:

bashCopynpm run dev
# or
yarn dev

Open your browser and navigate 
License
This project is licensed under the MIT License - see the LICENSE file for details.
