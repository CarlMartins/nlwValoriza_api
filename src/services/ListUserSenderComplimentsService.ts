import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";

class ListUserSenderComplimentService {
    async execute (user_id: string) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where: {
                user_sender: user_id
            }
        });

        return compliments;
    }
}

export { ListUserSenderComplimentService };