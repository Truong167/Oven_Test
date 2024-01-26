## Getting Started

First, run the development server:

```bash
# install library
npm install
# run project
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Folder Structure

├── /app # manage routing
│ ├── /page.tsx home page
│ ├── /layout.tsx # Root Layout
│ └── ... # Other pages
├── /public # Static resources, such as images or other files
├── /components # Reusable React components
├── /context # manage context
├── /reducers # manage state
├── /.gitignore # Files and directories to be ignored by Git
├── /next.config.js # Specific configuration for Next.js
├── /package.json # Project information and dependencies
├── /typing.d.ts # define global type or interface for entire application
└── README.md # Project documentation

## Libraries used in the project
  - Antd
  - uuid
  - TailwindCss
  - React-icons

## Feature
  - Add new task
  - Mark task as completed
  - Delete task
  - Search task by name
  - Responsive


