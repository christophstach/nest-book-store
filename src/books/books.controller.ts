import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
  Logger,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags } from '@nestjs/swagger';
import fastify from 'fastify';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.booksService.findOne(+id);

    if (book) {
      return book;
    } else {
      throw new HttpException('Book not found!', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const book = await this.booksService.update(+id, updateBookDto);

    if (book) {
      return book;
    } else {
      throw new HttpException('Book not found!', HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const book = await this.booksService.remove(+id);

    if (book) {
      return book;
    } else {
      throw new HttpException('Book not found!', HttpStatus.NOT_FOUND);
    }
  }
}
