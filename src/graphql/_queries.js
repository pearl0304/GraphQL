import {gql} from "apollo-server";
const query = gql`
    type Query {
        getTeams: [Team]
        getEquipments: [Equipment]
    }
`;
export default query