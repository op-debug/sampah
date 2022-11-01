import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pengepul {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama: string;

    @Column()
    nohp: string;

    @Column()
    alamat: string;

    @Column()
    password: string;
}