import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('pet')
export class Pet{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 150, nullable:true})
    nome!: string;

    @Column({type: 'date'})
    dataNascimento: Date;

    @Column({length: 40})
    sexo!: string

    @Column({type: 'decimal'})
    peso!: number;

    @Column({length: 100})
    cor!: string;

    @Column({default: true})
    castrado!: boolean;

    @Column({default: true})
    ativo!: boolean
}
