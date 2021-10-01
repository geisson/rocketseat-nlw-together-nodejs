import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticaded";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentController = new ListUserSendComplimentController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentController()
const listTagsController = new ListTagsController()
const listUserController = new ListUserController()

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated,  listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle)

router.get("/tags", ensureAuthenticated, listTagsController.handle)

router.get("/users", ensureAuthenticated, listUserController.handle)

export { router }