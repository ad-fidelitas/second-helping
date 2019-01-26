import ExamplesService from '../../services/examples.service';
import { Request, Response, Router } from 'express';

export const userController: (IDriver) => Router =
(driver: IDriver) => {

  const router = Router();

  router.post("/", async (req: Request, res: Response) => {
    const newUser: IUser = req.body;
    driver.user.create(newUser)
  });
  

}
export class Controller {
  all(req: Request, res: Response): void {
    ExamplesService.all().then(r => res.json(r));
  }

  byId(req: Request, res: Response): void {
    ExamplesService.byId(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    ExamplesService.create(req.body.name).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/examples/${r.id}`)
        .json(r),
    );
  }
}
export default new Controller();
