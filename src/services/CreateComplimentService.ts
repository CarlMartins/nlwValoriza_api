import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute ({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories);
        const usersRepositories = getCustomRepository(UserRepositories);

        if (user_sender === user_receiver) {
            throw new Error("You can not compliment yourself");
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if (!userReceiverExists) {
            throw new Error("User receiver does not exists");
        }

        const compliment = complimentRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };