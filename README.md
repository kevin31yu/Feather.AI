# WanderPlan.AI

WanderPlan.AI is a travel planning application designed to help users create detailed and personalized trip itineraries. It leverages OpenAI's API to generate travel plans based on user inputs, such as destination and number of days.

## Features

- **Personalized Trip Planning**: Generate customized trip itineraries based on user inputs.
- **User-Friendly Interface**: Simple and intuitive interface for entering trip details and viewing plans.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Customizable**: Easily configurable to fit different use cases and requirements.

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: None (for this version)
- **Hosting**: AWS Elastic Beanstalk
- **API**: OpenAI API

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your local machine.
- A GitHub account and basic knowledge of Git.
- An OpenAI API key (for generating trip plans).

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/WanderPlan.AI.git
cd WanderPlan.AI
```

### Setup the Backend

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the `backend` directory and add your environment variables:

    ```env
    OPENAI_API_KEY=your_openai_api_key
    PORT=5000
    ```

4. **Start the backend server**:

    ```bash
    npm start
    ```

### Setup the Frontend

1. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the `frontend` directory and add your environment variables:

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. **Start the frontend development server**:

    ```bash
    npm start
    ```

5. **Build the frontend for production**:

    ```bash
    npm run build
    ```

    This will generate a production-ready build of your application in the `build` directory.
