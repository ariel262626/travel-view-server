import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';

import {typeDefs} from "./typeDefs";
import {resolvers} from "./resolvers";


const startServer = async () => {

    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.applyMiddleware({ app });

    const mongoUri = 'mongodb+srv://admin:A1A2A3A4@cluster0-mdmyn.mongodb.net/test?retryWrites=true&w=majority';
    await mongoose.connect(mongoUri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).catch(error => console.log(error));

    mongoose.connection.on('connected', () => {
        console.log('Connected to mongo instance');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to mongo', err);
    });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();
