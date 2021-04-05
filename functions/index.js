const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./utils/fbAuth");

const { getAllPosts, postOnePost } = require("./handlers/posts");
const { signup, login } = require("./handlers/users");

// Post routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);

//Signup Route
app.post("/signup", signup);

// Login Route
app.post("/login", login);

exports.api = functions.https.onRequest(app);