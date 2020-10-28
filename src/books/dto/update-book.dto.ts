import { CreateBookDto } from './create-book.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty({ required: false })
  author: string;

  @ApiProperty({ required: false })
  isbn: string;

  @ApiProperty({ required: false })
  publisher: string;

  @ApiProperty({ required: false, example: 2020 })
  publicationYear: number;

  @ApiProperty({ required: false })
  lastModifiedDate: Date;

  @ApiProperty({ required: false })
  createdDate: Date;

  @ApiProperty({ required: false })
  createdAt: Date;

  @ApiProperty({ required: false })
  updatedAt: Date;
}
