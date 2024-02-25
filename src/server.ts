import Express, { Application } from "express";
import Mysql from "./services/connectionDB";
import MedicosController from "./controllers/MedicosController";

class Server {
  private app: Application;
  private port: number;
  constructor({ port }: any) {
    this.app = Express();
    this.port = port ?? 3000;
  }

  async startServer() {
    Mysql.authenticate()
      .then(() => console.log("okay"))
      .catch((e) => console.log(e));

    this.app.listen(this.port, () => {
      console.log(`run server in ${this.port}`);
    });
  }
}

export default Server;
