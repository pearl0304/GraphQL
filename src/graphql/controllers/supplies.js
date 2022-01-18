import chalk from "chalk";
import { supplies } from "../database/data.js";

const supplyController = {
    getSupplies: async() => {
        try {
            return supplies;

        } catch(e) {
            console.log(chalk.red(e))
        }
    },

    insertSupply: async (args) => {
        try {
            supplies.push(args);
            return args;


        } catch(e) {
            console.log(chalk.red(e));
        }
    },
    deleteSupplies: async (id) => {
        try {
            const result = supplies.filter((supply)=>{
                return supply.id !== id;
            });
            return result;

        } catch(e) {
            console.log(chalk.red(e));
        }
    },
    updateSupply: async (args)=> {
        try {
          const result = supplies.filter((supply)=>{
                return supply.id === args.id
          }).map((supply)=>{
            Object.assign(supply,args)
            return supply
          });
          return result[0];

        } catch(e) {
            console.log(chalk.red(e));
        }
    }
}

export default supplyController;



