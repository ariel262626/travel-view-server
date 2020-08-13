import {TravelPoint} from "./models/TravelPoint";

export const resolvers = {
    Query: {
        hello: () => 'helloA',
    },
    Mutation: {
        createTravelPoint: async(_, {name, type, lat, lng}) => {
            const travelPoint = new TravelPoint({name, type, lat, lng});
            await travelPoint.save();
            console.log('firstTravelPoint saved');
            return travelPoint;
        }
    }
};
