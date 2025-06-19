import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads .env
    MongooseModule.forRoot(process.env.MONGO_URI!), 
    StudentModule,
  ],
})
export class AppModule {}
