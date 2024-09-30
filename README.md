# ReactJS Core Project

This repository is the core of a ReactJS project that is designed to be scalable, maintainable, and easy to extend. It includes the foundational setup for developing a React-based web application.

## Features

- **React 18.x**: Utilizes the latest version of React for building modern UIs.
- **Vite**: A fast development server and build tool.
- **Ant Design (antd)**: Comprehensive UI component library.
- **Zustand**: State management with a minimal and flexible API.
- **ESLint & Prettier**: Code formatting and linting to maintain clean and consistent code.
- **React Router**: Routing library for navigation.
- **Axios**: Promise-based HTTP client for API requests.
- **React-Query**: React query handling for API requests.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (20.17.0 or higher)
- Yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/cong85010/reactjs-core.git
cd reactjs-core
```

2. Install the dependencies

```bash
yarn install
```

### Running the App
Start the development server:

```bash
yarn dev
```

### Folder Structure
```bash
reactjs-core/
├── node_modules/          # Project dependencies
├── public/                # Static files
├── src/
│   ├── api/               # API client code (e.g., Axios setup)
│   ├── assets/            # Static assets like images, fonts, etc.
│   ├── components/        # Reusable UI components
│   ├── context/           # React context providers
│   ├── core/              # Core app logic and configuration
│   ├── hoc/               # Higher-order components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components (for each route)
│   ├── routes/            # Route definitions (React Router)
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   ├── queryClient.ts     # React Query setup
│   ├── vite-env.d.ts      # Vite environment typings
├── .env                   # Environment variables
├── .gitignore             # Files and directories to ignore in Git
├── .prettierrc            # Prettier configuration for code formatting
├── .eslintrc.js           # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── yarn.lock              # Dependency lock file (yarn)

```


### Contributing
Feel free to fork this project and submit pull requests. If you find any bugs or issues, please open an issue.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

```bash
This README reflects the structure shown in your folder, including `api`, `context`, `core`, and other directories.

```