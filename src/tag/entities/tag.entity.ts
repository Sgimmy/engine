import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Article {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
    comment: 'Titolo articolo'
  })
  title: string;

  @Column({
    nullable: true,
    comment: 'Descrizione articolo'
  })
  description: string;

  @Column({
    nullable: true,
    comment: 'User ID'
  })
  uid: string;

  @Column('json', {
    nullable: true,
    comment: 'Tag articolo'
  })
  tags: string[];

  @Column('json', {
    nullable: true,
    comment: 'Contenuto articolo'
  })
  content: string;

  @Column({
    nullable: true,
    comment: 'Thumbnail articolo'
  })
  thumbnail: string;

  @Column({
    nullable: false,
    comment: 'Fonte articolo'
  })
  source: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

}
