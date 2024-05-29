import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, "127.0.0.1"); // Specify '127.0.0.1' here
  console.log(`Application is running on: http://127.0.0.1:3000`);
}

bootstrap();
