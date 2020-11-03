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

  @ApiProperty({ required: false, example: 2020 })
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
