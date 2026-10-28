import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('origemEspecie')
export class OrigemEspecie{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length:150})
    continente!: string;

    @Column({length: 100})
    pais!: string;

    @Column({length:100})
    regiao!: string;

    @Column({length:250})
    descricao!: string;

    @Column({default: true})
    ativo!: boolean;
}