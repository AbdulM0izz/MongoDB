import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema, Student } from './student.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])
    ]
})
export class StudentModule {}
