import {gql} from "apollo-server";

const typeDefs = gql`
    type Team {
        id: Int,
        manager: String,
        office: String,
        extension_number: String,
        mascot: String,
        cleaning_duty: String,
        project: String,
        supplies: [Supply]
    }
    type Equipment implements Tool{
        id: ID!,
        used_by: Role!,
        count: Int,
        new_or_used: NewOrUsed!   
    }
    type EquipmentAdv{
        id: ID!,
        used_by: Role!,
        count: Int!,
        use_rate: Float,
        is_new: Boolean!,
        users: [String!]
    }
    type Supply {
        id: String,
        team: Int,
    }

    type Software implements Tool{
        id: ID!,
        used_by: Role!,
        developed_by: String!,
        description: String
    }

    enum Role {
        developer,
        designer,
        planner
    }

    enum NewOrUsed {
        new,
        used
    }

    union Given = Equipment | Supply

    interface Tool {
        id: ID!
        used_by: Role!
    }

    type Query {
        getTeams: [Team],
        getTeamById(id: Int): Team,
        getEquipments: [Equipment],
        getSupplies: [Supply],
        getEquipmentAdvs: [EquipmentAdv],

        givens: [Given]
    }  

    type Mutation {
        deleteEquipment(id: ID): [Equipment],
        insertEquipment(id: ID, used_by: String, count: Int, new_or_used: String): Equipment,
        updateEquipment(id: ID, used_by: String, count: Int, new_or_used: String): Equipment,

        deleteSupplies(id: String) : [Supply]
        insertSupply(id: String, team: Int) : Supply,
        updateSupply(id: String, team: Int) : Supply,
    }
`; 

export default typeDefs