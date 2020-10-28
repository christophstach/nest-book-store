import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isbn: string;

  @Column()
  publisher: string;

  @Column({ name: 'publication_year' })
  publicationYear: number;

  @Column({ name: 'last_modified_date' })
  lastModifiedDate: Date;

  @Column({ name: 'created_date' })
  createdDate: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
