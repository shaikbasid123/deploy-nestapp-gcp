import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: {
        name: string;
        email: string;
    }): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
}
