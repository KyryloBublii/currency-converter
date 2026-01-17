## Currency Converter
***
### Description
A full-stack currency conversion application that allows users to convert between
different currencies using real-time exchange rates. The project features a Java
backend with Gradle and a modern React + TypeScript frontend, providing a seamless
and efficient experience.

### 🚀 Features

- 🔄 Convert between multiple currencies
- 🌎 Fetches real-time exchange rates from CurrencyAPI
- 🎨 User-friendly interface built with React and TypeScript
- 🏗️ Backend powered by Java and Spring Boot
- ⚡ Uses Gradle for build automation
  🌐 How It Works
- **Frontend Interaction:** The frontend collects user input (currencies and amounts)
  and sends it to the backend using an API request.
- **Backend Processing:** The Java Spring backend processes the request, fetches the
  relevant exchange rate data from [CurrencyAPI](https://currencyapi.com/), and calculates the conversion.
- **Response to Frontend:** The backend sends the calculated result back to the frontend,
  which displays the conversion to the user.
  This seamless communication between the frontend and backend ensures efficient and real-time currency conversion.

### 🛠️ Technologies Used

**Backend**
- Java – Core backend logic
- Spring Boot – Web framework for RESTful API
- Gradle – Build automation tool
- [CurrencyAPI](https://currencyapi.com/) – Provides real-time exchange rates
  
**Frontend**
- React 18 – Modern UI library for building interactive interfaces
- TypeScript – Type-safe JavaScript for frontend logic
- Vite – Fast build tool and development server
- CSS3 – Modern styling
- Fetch API – Handles API calls to interact with the backend