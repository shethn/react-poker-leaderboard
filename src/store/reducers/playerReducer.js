import { ADD_PLAYER_PROFILE } from '../actions/actionTypes';

const initialState = {
    "1d915e02-d9b6-406b-90ed-e1ddb2583635": {
        name: "Jonis Minni",
        winnings: 15653982,
        country: "AGO",
        id: "1d915e02-d9b6-406b-90ed-e1ddb2583635",
        avatar: "http://i.pravatar.cc/150?u=1d915e02-d9b6-406b-90ed-e1ddb2583635"
    },
    "2d492b56-0353-4e7b-9a88-663b15980a80": {
        name: "Reba Stultz",
        winnings: 13125606,
        country: "ATF",
        id: "2d492b56-0353-4e7b-9a88-663b15980a80",
        avatar: "http://i.pravatar.cc/150?u=2d492b56-0353-4e7b-9a88-663b15980a80"
    },
    "fd441556-2733-4937-9cbf-823d2a98c97b": {
        name: "Grayce Yim",
        winnings: 17651343,
        country: "JOR",
        id: "fd441556-2733-4937-9cbf-823d2a98c97b",
        avatar: "http://i.pravatar.cc/150?u=fd441556-2733-4937-9cbf-823d2a98c97b"
    },
    "0702abd4-c3fb-44ae-ab1a-3ef93bea08e5": {
        name: "Aline Fortunio",
        winnings: 15251236,
        country: "DJI",
        id: "0702abd4-c3fb-44ae-ab1a-3ef93bea08e5",
        avatar: "http://i.pravatar.cc/150?u=0702abd4-c3fb-44ae-ab1a-3ef93bea08e5"
    },
    "d9431f3a-c854-40ee-8b66-f96923dc6e23": {
        name: "Kellina Craggy",
        winnings: 11021425,
        country: "GGY",
        id: "d9431f3a-c854-40ee-8b66-f96923dc6e23",
        avatar: "http://i.pravatar.cc/150?u=d9431f3a-c854-40ee-8b66-f96923dc6e23"
    },
}

const playerReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_PLAYER_PROFILE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default playerReducer;
