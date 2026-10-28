import{
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('raca')
export class Raca{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length:150})
    nome!: string;

    @Column({length: 100})
    porte!: string;

    @Column({length:200})
    descricao!: string;

    @Column({type: 'int'})
    expectativaVida!: number;

    @Column({default: true})
    ativo!: boolean;
}