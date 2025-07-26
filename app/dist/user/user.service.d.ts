import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(name: string, email: string): Promise<User>;
    findAll(): Promise<User[]>;
}
