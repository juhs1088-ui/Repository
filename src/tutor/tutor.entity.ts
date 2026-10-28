import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
import { EntityMetadataValidator } from 'typeorm/metadata-builder/EntityMetadataValidator.js';

@Entity('tutor')
export class Tutor{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 100, nullable:true})
    nome!: string;

    @Column({type: 'int', unique: true})
    CPF!: number;

    @Column({length:150, unique:true})
    email!: string;

    @Column({type: 'int'})
    telefone!: number;

    @Column({length: 150})
    endereco!: string;

    @Column({ default: true})
    ativo!: boolean;
    
}
