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

  async findOne(id: number) {
    if ((await this.bookRepository.count({ id })) > 0) {
      return this.bookRepository.findOne(id);
    } else {
      return false;
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    if ((await this.bookRepository.count({ id })) > 0) {
      await this.bookRepository.update(id, { ...updateBookDto, id });
      return this.bookRepository.findOne(id);
    } else {
      return false;
    }
  }

  async remove(id: number) {
    if ((await this.bookRepository.count({ id })) > 0) {
      const book = this.bookRepository.findOne(id);
      await this.bookRepository.delete(id);
      return book;
    } else {
      return false;
    }
  }
}
