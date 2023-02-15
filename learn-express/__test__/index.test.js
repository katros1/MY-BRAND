import request from "supertest";
import app from "../index.js";
import { mongoConnect, mongoDisconnect } from "../mongoconnect.js";
import path from 'path'
import UserInfo from "../model/signUp.js";
import { isAuth } from "../middleware/ath.js";
import passport from "passport";
import { jwtStrategy } from "../middleware/authorization.js";

const blog = {
    title: "hallee",
    content: "halele luyayay",
}


let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2F0cm9zIiwiVXNlck5hbWUiOiJrYXRyQGdtbS5jYyIsInVzZXJJZCI6IjYzZTM1OTkyMWE2NmNmM2MyMzJlZDJhMSIsImlhdCI6MTY3NTg2NTUyM30.WeTJHNrD_FE6ho_LLT_T8VeRrGmc-yo6xkV7VeRfjcg"
const query = {
    name: "hello",
    email: "katros@gmail.com",
    message: "https://res.cloudinary.com/dboqnapgi/",
}

const noEmailQuery = {
    name: "hello",
    message: "https://res.cloudinary.com/dboqnapgi/",
}

const InvalidEmail = {
    name: "hello",
    email: "katrosgmailcom",
    message: "https://res.cloudinary.com/dboqnapgi/",
}

const noMessageQuery = {
    name: "hello",
    email: "katros@gmail.com",
    
}

const user = {
    name: "helloo",
    UserName: "katrtts",
    Password: "katro1111",
}


jest.setTimeout(10000)
describe("App API test",() => {
beforeAll(async () =>{
   await mongoConnect();  
})




afterAll( async () =>{
    await mongoDisconnect();  

    
}, 20000)
test(" Display list of blogs", async () =>{
const response = await request(app)
.get("/api/v1/blogs")
.expect("Content-Type", /json/)
.expect(200)
}) 


test(" Find blog with valid blog_ID", async () =>{
    const response = await request(app)
    .get("/api/v1/blogs/63e5c57d79a16277858f904e")
    .expect(200)
    }) 


 test("Find blog with invalid blog_ID", async () =>{
    const response = await request(app)
    .get("/api/v1/blogs/:id")
    .expect(404)
    }) 

    test("sending message ", async () =>{
        const response = await request(app)
        .post("/api/v1/messages")
        .send(query)
        .expect("Content-Type", /json/)
        .expect(200)
    })
    test("sending message with no Email", async () =>{
        const response = await request(app)
        .post("/api/v1/messages")
        .send(noEmailQuery)
        .expect("Content-Type", /json/)
        .expect(400)
    })

    test("sending message with InvalidEmail", async () =>{
        const response = await request(app)
        .post("/api/v1/messages")
        .send(InvalidEmail)
        .expect("Content-Type", /json/)
        .expect(400)

    })

    /*test("creating account", async () =>{
        const response = await request(app)
        .post("/api/v1/auth/signUp")
        .send(
            {
                name: "helloo",
                UserName: "katrttts",
                Password: "katro1111", 
               
            }
        )
        .expect("Content-Type", /json/)
        .expect(201)
        UserInfo.findOneAndRemove({UserName: "katrtts"})
    })*/

    test("creating account with the existing username", async () =>{
        const response = await request(app)
        .post("/api/v1/auth/signUp")
        .send(user)
        .expect("Content-Type", /json/)
        .expect(400)
        
    })
    test("user login", async () =>{
        const response = await request(app)
        .post("/api/v1/auth/login")
        .send({
            
            UserName: "katrts",
            Password: "katro1111"
        })
        .expect("Content-Type", /json/)
        .expect(200)
        
    })

    test("Blogs comments", async () =>{
        const response = await request(app)
        .post("/api/v1/blogs/63e3749f6e88bcf14d716a9a/comments")
        .send({
            
            name: "helloo",
            email: "katrts@gm.cm",
            comment: "hello there"
        })
        .expect("Content-Type", /json/)

        .expect(200)
        
    })

    test("Blogs comments with blog_Id dont exit in DB", async () =>{
        const response = await request(app)
        .post("/api/v1/blogs/:id/comments")
        .send({
            
            name: "helloo",
            email: "katrts@gm.cm",
            comment: "hello there"
        })
        .expect("Content-Type", /json/)

        .expect(400)
       
    })

    test("Blogs comments with no email", async () =>{
        const response = await request(app)
        .post("/api/v1/blogs/63e4ac5c9afdae2d0140f0ae/comments")
        .send({
            
            name: "helloo",
            comment: "hello there"
        })
        .expect("Content-Type", /json/)

        .expect(400)
        
    })

    test("Blogs likes on unlogin user ", async () =>{
        const response = await request(app)
        .post("/api/v1/blogs/63e4ac5c9afdae2d0140f0ae/likes")
        .expect(401)
        
    })

    test("get messages ", async () =>{
        const response = await request(app)
        .get("/api/v1/messages")
        .set("Authorization", `Bearer ${token}`)
      .expect(200)
        
        
    })

    test("Delete message ", async () =>{
        const response = await request(app)
        .delete("/api/v1/messages/63e5d6a72af7d00f3ae0d257")
        .set("Authorization", `Bearer ${token}`)
      .expect(404)
        
        
    })


    

    test("make like on  ", async () =>{
        const response = await request(app)
        .post("/api/v1/blogs/63e3749f6e88bcf14d716a9a/likes")
        .set("Authorization", `Bearer ${token}`)
      .expect(200)
        
        
    })

    /*test("create blog ", async () =>{
        const response = await request(app)
        .post("/api/v1/blogs")
        .set("Authorization", `Bearer ${token}`)
        .field("title", blog.title)
        .field("content", blog.content)
        .field("Image", path.resolve(__dirname, "../img/Screenshot (24).png"))
        .expect(201);
        
    },25000)*/

    
})