import { Request, Response } from "express";
import { CreatedComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, user_sender, message } = request.body
    const createComplimentService = new CreatedComplimentService()

    const compliment = await createComplimentService.execute({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    return response.json(compliment)
  }
}

export { CreateComplimentController }