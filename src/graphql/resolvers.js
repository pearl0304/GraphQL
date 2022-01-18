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
    },

    Mutation: {
        insertEquipment: (_,args)=> equipmentController.insertEquipment(args),
        deleteEquipment: (_,{id})=> equipmentController.deleteEquipment(id),
        updateEquipment: (_,args)=> equipmentController.updateEquipment(args),

        insertSupply: (_,args)=> supplyController.insertSupply(args),
        deleteSupplies: (_,{id})=> supplyController.deleteSupplies(id),
        updateSupply: (_,args)=> supplyController.updateSupply(args)
    }
};


export default resolvers;
