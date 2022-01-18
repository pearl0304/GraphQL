import teamController from "./controllers/teams.js";
import equipmentController from "./controllers/equipments.js";
import supplyController from "./controllers/supplies.js";


const resolvers = {
    Query: {
        getTeams: () => teamController.getTeamWithSupplies(),
        getTeamById:(_,{id})=> teamController.getTeamById(id),
        
        getEquipments: () => equipmentController.getEquipment(),
        getEquipmentAdvs: ()=> equipmentController.getEquipmentAdvs(),
        
        getSupplies: () => supplyController.getSupplies(), 

        givens: ()=> {
            const equipmentData = equipmentController.getEquipment()
            const supplyData = supplyController.getSupplies()
            return [...equipmentData, ...supplyData]
        }
    },

    Mutation: {
        insertEquipment: (_,args)=> equipmentController.insertEquipment(args),
        deleteEquipment: (_,{id})=> equipmentController.deleteEquipment(id),
        updateEquipment: (_,args)=> equipmentController.updateEquipment(args),

        insertSupply: (_,args)=> supplyController.insertSupply(args),
        deleteSupplies: (_,{id})=> supplyController.deleteSupplies(id),
        updateSupply: (_,args)=> supplyController.updateSupply(args)
    },
    Given: {
        __resolveType(given, context, info) {
            if (given.used_by) return 'Equipment'
            if (given.team) return 'Supply'
            return null
        }
    },
    Tool: {
        __resolveType(tool, context, info) {
            if(tool.developed_by) { return 'Software' }
            if(tool.new_or_used) { return 'Equipment'}
            return null
        }
    }
};


export default resolvers;
