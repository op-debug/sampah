import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pengepul } from './entity/pengepul.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sampah',
      entities: [Pengepul],
    }),
    TypeOrmModule.forFeature([Pengepul])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
