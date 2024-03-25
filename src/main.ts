import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: "https://bbva-front.vercel.app",
  methods: "GET,POST,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
});
  await app.listen(port, "0.0.0.0");
}
bootstrap();
