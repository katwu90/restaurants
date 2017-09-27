# Favorite Restaurants
Please see my Ruby on Rails API for Ate@ in this [repository](https://github.com/katwu90/restaurants-api).

## About this application
Ate@ is a single page app that allows you to create a list of your favorite restaurants to the database. So when you don't know where to eat for dinner tonight, you can look back at the the app and find a list of your favorite restaurants with your rating. If a friend asks you for a recommendation for a place to eat, you can point them in the right direction with this app!

Ate@ allows a user to create an account, sign in, sign out and change password. After a user signs in they will have full access to all the features of Ate@.

Once a user signs in, you can add a new favorite restaurant to your list, you can edit your favorite restaurants, you get a whole list of your favorite restaurants or get one particular restaurant and you can also delete an old favorite. Each user has their own list and the list is only available for that user to see.

## Technologies Used
- HTML5
- CSS, Bootstrap
- Javascript, Ajax, jQuery, handlbars
- Ruby on Rails
- MVC framework
- CRUD
- MySQL

## Wireframe
[Wireframe](https://i.imgur.com/fpHjO2R.jpg)

## Planning & Strategy
My initial plan for this application was to create an application with a total of three datatables, one for the users, one for restaurants, and one for favorites, with the favorites table as a join table and a many-to-many relationship between users and restaurants. However, given the 3-day constrait of this project, I reduced my plan down to a one-to-many relationship so that a user has their own list of favorite restaurants.

I started off the project creating the Entity Relationship Diagram for my datatables so I can see the relationship and the columns I'll need for each table. Then I diagrammed a wireframe for my front end so I know how I want it to look like before I start.

After I had a clear plan, I started on the back-end to create the API using Ruby on Rails. I tested the back-end extensively using curl scripts from the terminal to ensure that it was working properly before moving onto the front-end.

After testing all the curl scripts for CRUD worked, I start creating the front-end. I had all the forms and links on the HTML file and create many click event listeners in Javascript to dynamically change the page as the user clicks on different links and buttons. On the front, I worked on each CRUD function individually and I made sure each one was working properly before moving on to the next CRUD function.

Lastly, after all the CRUD functions were working, I was change the styling of the page in my SCSS file.

## User Stories
- As a user, I can create an account.
- As a user, I can sign in.
- As a user, I can sign out.
- As a user, I can change my password.
- As a user, I can add a new favorite restaurant.
- As a user, I can edit my favorite restaurants.
- As a user, I can view all my favorite restaurants.
- As a user, I can delete my favorite restaurants.

## Current Bugs
When a user updates a restaurant, they do not immediately see the changes they submitted. In my next iteration, I would like to fix that so when a user updates, they can immediately see that change. 
