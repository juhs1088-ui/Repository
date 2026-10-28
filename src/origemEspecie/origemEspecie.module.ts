import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrigemEspecie } from './origemEspecie.entity.js';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrigemEspecie])
    ]
})
export class OrigemEspecieModule {}