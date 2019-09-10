# React authentication frontend starter

This is a React starter set up that hits routes for registering a user on a [Ruby on Rails backend API](https://github.com/datadaveshin/authentication-setup-rails-api). It allows users to log in and out using http cookies.
It is based on [Jordan Hudgens](https://www.youtube.com/watch?v=z18zLCAg7UU&list=PLgYiyoyNPrv_yNp5Pzsx0A3gQ8-tfg66j&index=1) set up with some mods.

Some differences:

### Node version
- 10.14.1

### React version
- 16.8.0

### Starting the app
- Run `npm run start` and it will run on http://localhost:3000

### The routes
- Home: http://localhost:3000
- Dashboard: http://localhost:3001

### Usage
- On the home page, you should be able to register, log in and log out. Upon registering and logging in, you will be redirected to the Dashboard page - which is open to further design.

### The API
- This app is meant to communicate with this [Ruby on Rails API](https://github.com/datadaveshin/authentication-setup-rails-api) running on http://localhost:3001. The rails api allows you to register a user, log in, log out.
- I also added in displaying some user information on the Dashboard page.
- The database setup for the rails api is MySQL, but that could be modified.

### Credit
- Appears that Jordan made the es6-webpack2-starter that this is based on for students, his notes below:

> Provided for the students of the [Bottega Code School](https://bottega.tech/)

*Fork from [es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter)*
