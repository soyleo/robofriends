# What we have here?

This is an item filter made with React and tachyons (and my first project with this tool)
## Elements

Now i'll enumerate the elements in this project so you can use it and adapt it.

### Folder Components

Here's all the components that's in my ReactApp

#### Cards.js

The first atomic element it's a Card that contain:
-An image (it's a placeholder generated with https://robohash.org/)
-A name (taked from https://jsonplaceholder.typicode.com/users)
-And an email (taked from https://jsonplaceholder.typicode.com/users)
Also the card have a grow and shadow animation when hovered and clicked

#### CardList

Instatiate and wrap all the "robots" (objects from the jason file provided by https://jsonplaceholder.typicode.com/users) Cards.

#### ErrorBoundry.js

Catch if exist some error in the functional parts and send a message to avoid the crashing.

#### Scroll.js

Wrap an element (in this case the Card List) and make it scrollable, to avoid the general Scroll

#### SearchBox.js

Create an input type search to register the filter that the user want.

### Folder Container

This carpet contain the App.js and its assets

#### App.js

This contain the main aplication with the order of all components and the main processes to them.

# Thanks to visit my robofriends repo!