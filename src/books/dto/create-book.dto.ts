import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  isbn: string;

  @ApiProperty({ required: false })
  publisher: string;

  @ApiProperty({ required: false })
  publicationYear: number;

  @ApiProperty({ required: false })
  lastModifiedDate: Date;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
