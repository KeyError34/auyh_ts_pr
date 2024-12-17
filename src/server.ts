import express, { Application } from 'express';
import 'dotenv/config';
import connectDB from './db/index';

class App {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000; // Преобразуем порт к числу
    this.initDB();
    this.initMiddleware();
    this.startServer();
  }

  private async initDB(): Promise<void> {
    try {
      await connectDB();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed: ', error);
    }
  }

  private initMiddleware(): void {
    this.app.use(express.json()); 
  }

  private startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}


new App();