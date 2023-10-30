# Github Search Web App

This repository contains the code for the Github Search Web App.

## Prerequisites

Ensure you have the following tools installed on your environment:

- NodeJs (v18.17.0)
- Yarn (v1.22.19)

## Local Development

First, clone this repository to your local machine.

1. Navigate to the project's directory:

```bash
cd github-search
```

2. Install the required dependencies:

```bash
yarn install
```

3. IMPORTANT - CHANGE NEXT_PUBLIC_GITHUB_TOKEN ON THE .env FILE WITH A VALID GITHUB TOKEN:

```makefile
NEXT_PUBLIC_GITHUB_TOKEN={YOUR_TOKEN_HERE}
```

4. Run the development server:

```bash
yarn dev
```

## Production Build and Start

To deploy for production, follow these steps:

1. Navigate to the project's directory:

```bash
cd github-search
```

2. Install the required dependencies:

```bash
yarn install
```

3. IMPORTANT - CHANGE NEXT_PUBLIC_GITHUB_TOKEN ON THE .env FILE WITH A VALID GITHUB TOKEN:

```makefile
NEXT_PUBLIC_GITHUB_TOKEN={YOUR_TOKEN_HERE}
```

4. Create a production build

```bash
yarn build
```

5. Start the production server:

```bash
yarn start
```

## Technologies Used

This project was built using the following technologies:

- Next.js
- Zustand
- TypeScript
- Material UI
- GraphQL

## Additional Notes

- To optimize performance, I opted for Zustand instead of the more traditional Redux/Redux Saga. Zustand is both simple and efficient, making it particularly suitable for smaller projects.

- For debouncing functionalities, I've crafted two custom hooks. You can find them in the hooks directory. If I had been using Redux Saga, the takeLatest effect would have been my choice.

- It's worth noting that I'm more accustomed to working with Tailwind CSS rather than Material UI. Therefore, there might be room for optimization with certain Material UI components.

- In order to change the ranking order in favorites page, you can drag and drop the cards.

Thank you for taking the time to review this project. I truly enjoyed building it.
