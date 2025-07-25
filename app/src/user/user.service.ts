import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(name: string, email: string) {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }
}
