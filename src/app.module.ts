import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { heroGrpcClientOptions } from './grpc-client.options';
import { UsersModule } from './modules/users/users.module';
import { HeroModule } from './modules/hero/hero.module';
import config from './configs/config';

const env = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${env}.env`,
      cache: true,
      isGlobal: true,
      load: [config],
    }),
    ClientsModule.register([heroGrpcClientOptions]),
    UsersModule,
    HeroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
