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

  findOne(id: string) {
    return this.bookRepository.findOneOrFail(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    await this.bookRepository.update(id, { ...updateBookDto, id });
    return this.bookRepository.findOneOrFail(id);
  }

  async remove(id: string) {
    const book = await this.bookRepository.findOneOrFail(id);
    await this.bookRepository.delete(id);

    return book;
  }
}
