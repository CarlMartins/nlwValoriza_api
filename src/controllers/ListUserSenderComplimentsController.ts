import { Request, Response } from "express";
import { ListUserSenderComplimentService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController {
    async handle (req: Request, res: Response) {
        const { user_id } = req;

        const listUserSenderComplimentsService = new ListUserSenderComplimentService();

        const compliments = await listUserSenderComplimentsService.execute(user_id);

        return res.json(compliments);
    }
}

export { ListUserSenderComplimentsController };