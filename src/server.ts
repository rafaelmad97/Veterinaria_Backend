import Express, { Application } from "express";
import Mysql from "./services/connectionDB";
import router from "./routes/index";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
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

    this.app.use(
      cors({
        origin: "http://localhost:5173", // Allow requests from this origin
        allowedHeaders: ["Content-Type"],
        methods: "GET,POST,PUT,DELETE",
      })
    );
  }

  async startServer() {
    const testingMode = Boolean(dotenv.config().parsed?.TESTING);

    await Mysql.authenticate().then(() => console.log("okay"));

    await Mysql.sync({
      force: testingMode,
      logging: testingMode,
    });

    if (testingMode) {
      const { Users, Pets, Types, Medicos } = Mysql.models;
      await Medicos.bulkCreate([
        {
          idMedicos: 0,
          Nombre: "Greg",
          Apellidos: "House",
          Telefono: "111111",
        },
        {
          idMedicos: 0,
          Nombre: "James",
          Apellidos: "Wilson",
          Telefono: "111111",
        },
        {
          idMedicos: 0,
          Nombre: "Eric",
          Apellidos: "Foreman",
          Telefono: "111111",
        },
        {
          idMedicos: 0,
          Nombre: "Chase",
          Apellidos: "",
          Telefono: "111111",
        },
        {
          idMedicos: 0,
          Nombre: "Chapatín",
          Apellidos: "",
          Telefono: "111111",
        },
      ]);
      await Types.bulkCreate([
        { idType: 0, typeLabel: "Gato" },
        { idType: 0, typeLabel: "Perro" },
        { idType: 0, typeLabel: "Hamster" },
        { idType: 0, typeLabel: "Gallo" },
        { idType: 0, typeLabel: "Loro" },
      ]);
    }

    this.app.listen(this.port, () => {
      console.log(`run server in ${this.port}`);
    });
  }
}

export default Server;
