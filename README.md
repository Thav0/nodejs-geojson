# Store Locator

> Node/Express/Mongo API with GeoJSON location field for store locations. Simple vanilla JS frontend using the Mapbox Library

# What I've learned

- How to use GeoJson and Mapbox
- NodeJs folders organization
- MongoDB cloud connection
- Mongoose Middleware with GeoJson
- MVC with NodeJS
- Destructuring assignment
- Async/Await


## Quick Start

Add your MONGO_URI and GEOCODER_API_KEY to the "config/config.env" file.

```bash
# Install dependencies
npm install

# Serve on localhost:5000
npm run dev (nodemon)
or
npm start

# Routes
GET    /api/v1/stores # Get Stores

POST   /api/v1/stores # Add Store
body { storeId: "0001", address: "Avenida Sebastião Queiroz Alcântara Macapa" }
```
