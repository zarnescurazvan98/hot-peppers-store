# hot-peppers-store

Welcome to the Hot Peppers E-Commerce Store! This project is an online shop for selling a variety of hot peppers, allowing users to browse, filter, and add peppers to a shopping cart for purchase. It is built with Vue 3, Tailwind CSS, and Vuex for state management.

## Project Structure

The project is organized into the following folders:

```bash
public/
public/
│
├── images             # Static assets like images for the application (e.g., product images, banners)
├── index.html         # The main HTML file that serves as the entry point for the application; includes the root div for Vue to mount.

src/
│
├── assets/            # Static assets like JSON data
│   └── products.json  # Contains a list of peppers with details such as name, price, and Scoville rating
│
├── components/        # Vue components that encapsulate reusable parts of the UI
│   ├── FiltersBar.vue          # Provides dropdown filters for sorting products by price and Scoville rating
│   ├── Footer.vue              # Displays the footer section of the website, containing contact info and links
│   ├── Header.vue              # Contains the navigation bar and logo; allows users to access different sections
│   ├── ProductCard.vue         # Displays individual pepper details in a card layout, including image and price
│   ├── QuantitySelector.vue     # Allows users to select the quantity of a product before adding it to the cart
│   └── ToastNotification.vue    # Displays brief notifications for actions like adding products to the cart
│
├── router/            # Vue Router configuration to handle navigation within the application
│   └── index.js       # Sets up routes and links components to specific paths
│
├── store/             # Vuex store for managing the application state, particularly the shopping cart
│   ├── modules/       
│   │   └── cart.js    # Vuex store module managing shopping cart functionality (adding, removing items)
│   └── index.js       # Main Vuex store configuration file, combining all modules
│
├── views/             # Page components representing different views in the application
│   ├── HomePage.vue         # Homepage with hero section, best sellers, new arrivals, and testimonials
│   ├── ProductsList.vue     # Displays a list of all available peppers with options to filter and sort
│   └── ShoppingCart.vue     # View that shows the items added to the shopping cart, allowing for quantity adjustments
│
└── App.vue            # Main application wrapper; serves as the root component that houses all other components
└── main.js            # Application entry point; initializes the Vue instance and mounts it to the DOM
```

## Technologies Used

- **Vue 3**: Core framework for building the single-page application.
- **Vue Router**: Used for client-side navigation between different pages (Home, Products, Cart).
- **Vuex**: State management library for handling the shopping cart functionality, including adding, updating, and removing items.
- **Tailwind CSS**: Utility-first CSS framework for responsive design and custom styles across the site.
- **Heroicons**: For icons used across various components, like the shopping cart icon and dropdown arrows.
- **JSON**: Static data file (`products.json`) for pepper details such as name, price, and Scoville rating.
- **ESLint**: Used for code linting and ensuring code quality.

## Features

- **Homepage**: Features a hero section with a call to action, best sellers, new arrivals, and customer testimonials.
- **Product Listing and Filtering**: Products can be filtered by price or Scoville rating using dropdowns.
- **Shopping Cart**: Vuex-powered shopping cart that allows users to add, remove, and modify items in the cart.
- **Customer Testimonials**: Displays customer feedback with dynamic styling for responsiveness.
- **Newsletter Subscription**: Users can subscribe to get updates about new peppers, promotions, and recipes.
- **Responsive Design**: Tailwind CSS ensures the site is fully responsive across devices.

## Project Setup

### Install dependencies

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Deployment
The project can be deployed using GitHub Pages. For this:

1. Build for production:
```bash
npm run build
```

2. Set the correct public path in vue.config.js:
```bash
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hot-peppers-store/' // Change to your repo name
    : '/'
}
```

3. Commit and push to GitHub:
```bash
git add -A
git commit -m "Prepare for deployment"
git push
```

4. Follow the GitHub Pages deployment steps to publish your project.

## License
This project is open-source and licensed under the MIT License.

Feel free to copy and paste this directly into your `README.md` file! If you need any more adjustments or additions, let me know!