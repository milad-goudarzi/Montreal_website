const express = require('express')
const app = express()
const { Op, Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
// const database = new Sequelize("postgres://postgres:123456789@localhost:5432/hyp")

// Production (use this code when deploying to production in Heroku)
const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Cat = database.define("cat", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        breed: DataTypes.STRING,
        img: DataTypes.STRING, 
    })
    const Location  = database.define("location", {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
    })
    Location.hasMany(Cat)
    Cat.belongsTo(Location)
    
    
    const POI = database.define("poi", {
        imgPathMain: DataTypes.STRING,
        descriptionMain: DataTypes.TEXT,
        descriptionSecond: DataTypes.STRING,
        heading: DataTypes.STRING,
        address: DataTypes.STRING,
        hours: DataTypes.STRING,
        cost: DataTypes.STRING,  
        imgPathText: DataTypes.STRING,
        imgPathMap: DataTypes.STRING,
        category: DataTypes.STRING,
        url: DataTypes.STRING,
        hosts: DataTypes.STRING,
        itinerary: DataTypes.INTEGER, 
        Neighbourhood: DataTypes.STRING,
        poiName: DataTypes.STRING,
        eventId: DataTypes.INTEGER,
    })
    

    const Event = database.define("event", {
        imgPathMain: DataTypes.STRING,
        imgPathMap: DataTypes.STRING,
        description: DataTypes.TEXT,
        heading: DataTypes.STRING,
        season: DataTypes.STRING,
        month: DataTypes.STRING,
        dates: DataTypes.STRING,
        hours: DataTypes.STRING,
        cost: DataTypes.STRING,
        url: DataTypes.STRING,
        hostedIn: DataTypes.STRING,
        poiId: DataTypes.INTEGER,
    })

    const poiEventsJoinTable = database.define('poiEventsJoinTable', {
        eventId: {
          type: DataTypes.INTEGER,
          references: {
            model: Event, // 'Movies' would also work
            key: 'id'
          }
        },
        poiId: {
          type: DataTypes.INTEGER,
          references: {
            model: POI, // 'Actors' would also work
            key: 'id'
          }
        }
      });
    
    // POI.hasMany(Event)
    POI.belongsToMany(Event, {through: poiEventsJoinTable})
    Event.belongsToMany(POI, {through: poiEventsJoinTable})

    poiEventsJoinTable.belongsTo(POI)
    poiEventsJoinTable.belongsTo(Event)
    

    const Service = database.define("service", {
        Neighbourhood: DataTypes.STRING,
        heading: DataTypes.STRING,
        location: DataTypes.STRING,
        type: DataTypes.STRING,
        url: DataTypes.STRING,
        hours: DataTypes.STRING,
    })

    const AllService = database.define("allService", {
        imgPath: DataTypes.STRING,
        description: DataTypes.TEXT,
        type: DataTypes.STRING,
    })

    const Itineraries = database.define("itineraries", {
        imgPath: DataTypes.STRING,
        description: DataTypes.TEXT,
        heading: DataTypes.STRING,
        duration: DataTypes.STRING,
        imgPathMap: DataTypes.STRING,
    })

    await database.sync({ force: true })
    
    return {
        Cat,
        Location,
        POI,
        Event,
        Service,
        Itineraries,
        AllService,
        poiEventsJoinTable,
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
    /*index: {
        title: "Homepage",
        image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },*/
    about: {
        title: "About",
        image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id }, include: [{model: models.Location}] })
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our actual database
    app.get("/cats", async (req, res) => {
        const result = await models.Cat.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                breed: element.breed,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns all the POIs in our actual database
    app.get("/pois", async (req, res) => {
        const result = await models.POI.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                imgPathMain: element.imgPathMain,
                descriptionMain: element.descriptionMain,
                heading: element.heading,
                id: element.id,
                Neighbourhood: element.Neighbourhood,
                category: element.category,
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns 1 POI based on id in our actual database
    app.get('/pois/:id', async (req, res) => {
        const id = +req.params.id
        // const result2 = await models.POI.findAll({ where: { id }, include: [{model: "event", through: "poiEventsJoinTable"}]})
        // const result1 = await models.POI.findOne({ where: { id }, include: [{model: "eventkjjkj", through: "poiEventsJoinTable"}]})
        const result1 = await models.POI.findOne({ where: { id }, include: "events"})
        // const results = [json(result1), json(result2)]
        return res.json(result1)
    })

    // HTTP GET api that returns 1 POI based on id in our actual database
    app.get('/poisByItinerary/:id', async (req, res) => {
        let id = +req.params.id
        const result = await models.POI.findAll({where:{ itinerary: id }})
        const filtered = []
        for (const element of result) {
            filtered.push({
                imgPathMain: element.imgPathMain,
                descriptionMain: element.descriptionMain,
                heading: element.heading,
                id: element.id,
                itinerary: element.itinerary,
                hours: element.hours,
                category: element.category,
            })
        }
        return res.json(filtered)
        
    })

    // HTTP GET api that returns 1 Event based on id in our actual database
    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }, include: "pois"})
        return res.json(result)
    })

    // HTTP GET api that returns 1 Itinerary based on id in our actual database
    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itineraries.findOne({ where: { id }})
        return res.json(result)
    })

    app.get("/getEvents/:month", async (req, res) => {
        const month = req.params.month;
        console.log("server"+month+"sssss")
        let result = [];
        if (month == 'Jan.&Feb.' || month == 'Jan. & Feb.'){
            result = await models.Event.findAll({where:{ month:["January", "February"]}})
        } else if (month == 'Mar. & Apr.'){
            result = await models.Event.findAll({where:{ month:["March", "April"]}})
        } else if (month == 'May & Jun.'){
            result = await models.Event.findAll({where:{ month:["May", "June"]}})
        } else if (month == 'Jul. & Aug.'){
            result = await models.Event.findAll({where:{ month:["July", "August"]}})
        } else if (month == 'Sep. & Oct.'){
            result = await models.Event.findAll({where:{ month:["September", "October"]}})
        } else if (month == 'Nov. & Dec.'){
            result = await models.Event.findAll({where:{ month:["November", "December"]}})
        }

        if (result.length == 0){
            result = await models.Event.findAll({where:{ month:"never"}})
        }
        
        let filtered = []
        const finalResult = []
        let counter = 0

        for (const element of result) {
            
            filtered.push({
                imgPath: element.imgPathMain,
                eventDescription: element.description,
                eventTitle: element.heading,
                season: element.season,
                id: element.id,
                month: element.month,
            })
            counter += 1
            if(counter == 3){
                finalResult.push(filtered)
                // console.log(finalResult)
                filtered = []
                counter = 0
            }
            
        }
        (counter == 0) ? console.log() : finalResult.push(filtered)
        return res.json(finalResult)
    })

    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/cats", async (req, res) => {
        const { body } = req
        await models.Cat.create(body);
        return res.sendStatus(200)
    })

    app.get("/services", async (req, res) => {
       
        const result = await models.Service.findAll()
        console.log("server side: 1: ")
        const filtered = []
        for (const element of result) {
            filtered.push({
                Neighbourhood: element.Neighbourhood,
                heading: element.heading,
                location: element.location,
                type: element.type,
                hours: element.hours,
                url: element.url,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get("/itineraries", async (req, res) => {
        const result = await models.Itineraries.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                imgPath: element.imgPath,
                description: element.description,
                heading: element.heading,
                duration: element.duration,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get("/all-services", async (req, res) => {
        const result = await models.AllService.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                imgPath: element.imgPath,
                description: element.description,
                type: element.type,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get('/services/:type', async (req, res) => {
        const type = req.params.type
        const result = await models.Service.findAll({ where: { type: type }})
        const filtered = []
        for (const element of result) {
            filtered.push({
                Neighbourhood: element.Neighbourhood,
                hours: element.hours,
                heading: element.heading,
                location: element.location,
                type: element.type,
                url: element.url,
                id: element.id,
            })
        }
        return res.json(filtered)
    })


}

runMainApi()


export default app
