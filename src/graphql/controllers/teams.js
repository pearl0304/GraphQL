import chalk from "chalk";
import { teams } from "../database/data.js";
import { supplies } from "../database/data.js";

const teamController = {
    getTeams: async() =>{
        try {
            return teams;

        } catch(e) {
            console.log(chalk.red(e))
        }
    },
    getTeamById: async(id) =>{
        try {
            const result = teams.filter((team)=>{
                return team.id === id
            })
            return result[0];
        
        } catch(e) {
            console.log(chalk.red(e))
        }
    },
    getTeamWithSupplies: async()=>{
        try {
            const result = teams.map((team)=>{
                team.supplies = supplies
                .filter((supply)=>{
                    return supply.team === team.id
                })
                return team    
            });
            return result

        } catch(e) {
            console.log(chalk.red(e))
        }
    }
    
}

export default teamController;










