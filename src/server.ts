import Express, { Application } from "express";

class Server {
  private app: Application;
  private port: number;
  constructor({ port }: any) {
    this.app = Express();
    this.port = port ?? 3000;
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`run server in ${this.port}`);
    });
  }
}

export default Server;
