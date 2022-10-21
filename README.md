## Group Members

* Evalyn Horemans 10719793
* Milad Goudarzi 10765491
* Anthony Ileret 10845359 
* Muhammad Irfan Mas'udi 10672914 

Contribution for each members refer to Issues in github menu.

## Setup

### `DEV Server`
```bash
# localhost:3000
$ npm run dev
```

### `PROD Server - heroku link`

https://imaje.herokuapp.com/

## Framework Implementation

We implemented our project with CSR (client-side rendering), because we know that we have to prevent requesting the entire page when only a section of it has changed to improve responsive user experience. User should have a good interaction with our contents, catch the good design with more images, and also to reduce high requesting to the server (SSR), because our purpose user of our website; i.e traveller that mostly use via mobile networks with high latency. 

### `Pages`

In order to have to deal with configuring applications’ routing. NuxtJs will automatically generate the routing based on the folder structure that we have implemented. Here the structure of the route:

    .
    ├── index.vue
    ├── pages                    
    │   ├── all-sevices          # folder directed to be routed in general page
    │   ├── index.vue            # pages that will be retrieved (/all-services)
    |       ├── sevice           # folder directed to be routed in specific page
    |           ├── index.vue    # pages that will be retrieved (/all-services/services)
    │   └── ...              
    └── ...



### `Components`

We have implemented some components for specific purpose, i.e card design for itineraries will different to card service, and also we need to manage all interaction between back-end and front-end that have specific data.

### `SEO Optimization`

In order to have a good result in SEO we implemented <meta> tags in our website through nuxt.config.js. In the meta tags, we put some keywords that will help our website retrieved by traveller that search on Google. For example, the tourist who does not know Canada, Montreal and all possible points of interest that they can do. So, we list some possible keywords from general into specific word that related to our website.
