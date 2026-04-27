# Overwatch Hero Explorer

A web application built with Node.js, Express, EJS, and Axios that allows users to explore Overwatch heroes, view their abilities, perks, and story information.

## Live Demo

[https://your-app-name.onrender.com](https://overwatch-hero-explorer.onrender.com/)

## Features

* Browse all Overwatch heroes
* View detailed hero pages
* Display abilities with icons and descriptions
* Custom perks system (Minor & Major perks)
* Story section with video and chapters

## Technologies Used

* Node.js
* Express.js
* EJS
* Axios
* HTML & CSS

## API Used

This project uses the Overfast API to retrieve Overwatch hero data:

https://overfast-api.tekrop.fr/

All hero information such as abilities, images, and story content is fetched from this API.

Note: Additional data such as perks is custom-built and stored locally within the project.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/overwatch-hero-explorer.git
```

2. Navigate into the project folder:

```bash
cd overwatch-hero-explorer
```

3. Install dependencies:

```bash
npm install
```

## Running the Project

Start the server with:

```bash
node index.js
```

Then open your browser and go to:

```text
http://localhost:3000
```

## Notes

* This project uses a public API to fetch hero data.
* Some data (such as perks) is custom-built and stored locally.

## Author

Valeria Brizzolari
