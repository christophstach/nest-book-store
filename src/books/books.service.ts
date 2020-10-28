import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save({
      ...createBookDto,
      id: undefined,
    });
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOne(id);
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    updateBookDto = { ...updateBookDto, id };
    await this.bookRepository.update(id, updateBookDto);
    return this.bookRepository.findOne(updateBookDto.id);
  }

  remove(id: number) {
    this.bookRepository.delete(id);
  }
}
