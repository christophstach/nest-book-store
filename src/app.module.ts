import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        Logger.debug(configService.get('DATABASE_HOST'));
        Logger.debug(+configService.get<number>('DATABASE_PORT'));
        Logger.debug(configService.get('DATABASE_USERNAME'));
        Logger.debug(configService.get('DATABASE_PASSWORD'));
        Logger.debug(configService.get('DATABASE_SCHEMA'));

        return {
          type: 'mysql',
          connectTimeout: 30000,
          host: configService.get('DATABASE_HOST'),
          port: +configService.get<number>('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_SCHEMA'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
