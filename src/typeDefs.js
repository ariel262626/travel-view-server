import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Query {
		hello: String!
        travelPoints: [TravelPoint!]!
	}
    
    type TravelPoint {
        id: ID!
        name: String!
        type: String
        lat: Float!
        lng: Float!
    }
    
    type Mutation {
        createTravelPoint(name: String!, type: String, lat: Float!, lng: Float!): TravelPoint!
    }
`;
