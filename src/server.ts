import Express, { Application } from "express";
import Mysql from "./services/connectionDB";
import router from "./routes/index";
import bodyParser from "body-parser";

class Server {
  private app: Application;
  private port: number;
  constructor({ port }: any) {
    this.app = Express();
    this.port = port ?? 3000;
    this.configure();
    this.router();
  }

  router() {
    this.app.use("/api", router);
  }

  configure() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(Express.json());
  }

  async startServer() {
    Mysql.authenticate().then(() => console.log("okay"));
    const persona = await Mysql.models.Persona.create({
      id: 0,
      Nombres: "",
      Apellidos: "",
      birthdate: new Date().toISOString(),
      email: "",
      telefono: "",
      recibeNotificaciones: false,
    }).then((res) => res.dataValues);

    await Mysql.models.Users.create({
      Id: 0,
      username: "xd",
      password: "xd",
      Persona_id: persona.id,
    });

    this.app.listen(this.port, () => {
      console.log(`run server in ${this.port}`);
    });
  }
}

export default Server;
