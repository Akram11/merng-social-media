const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// RELATIVE IMPORTS
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const Post = require("./models/Post");
const { MONGODB } = require("./config");

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose
    .connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected");
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        // console.log(res);
        console.log(`Server runnning at ${res.url}`);
    });
