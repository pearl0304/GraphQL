import chalk from "chalk";
import {equipments} from "../database/data.js"

const equipmentController = {
    getEquipment: async ()=> {
        try {
            return equipments;
        }catch(e){
            console.log(chalk.red(e));
        }
    },
    insertEquipment: async (args)=>{
        try {
            equipments.push(args);
            return args;

        } catch(e) {
            console.log(chalk.red(e));
        }
    },
    deleteEquipment: async (id)=> {
        try {
            const reuslt = equipments.filter((equipment)=>{
                return equipment.id !== id;
            })
            return reuslt ;

        } catch(e) {
            console.log(chalk.red(e));
        } 
    },
    updateEquipment: async (args)=> {
        try{
            const result = equipments.filter((equipment)=>{
                return equipment.id === args.id
            }).map((equipment)=>{
                Object.assign(equipment,args)
                return equipment
            })
            return result[0];

        } catch(e) {
            console.log(chalk.red(e));
        }
    },
    getEquipmentAdvs: async() =>{
        try {
            console.log(chalk.blue('ddddd'))
            const reuslt = equipments.map((equipment)=>{
                if (equipment.used_by === 'developer') {
                    equipment.use_rate = Math.random().toFixed(2)
                }
                equipment.is_new = equipment.new_or_used === 'new'
                return equipment
            })
            return reuslt

        } catch(e) {
            console.log(chalk.red(e))
        }
    }
    
}

export default equipmentController


