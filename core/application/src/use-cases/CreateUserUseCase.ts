import { IUserRepository } from '@mcn/domain';
import { User } from '@mcn/domain';
import { UserRole } from '@mcn/types';

export interface CreateUserDTO {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role?: UserRole;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: CreateUserDTO): Promise<User> {
    const existingByEmail = await this.userRepository.findByEmail(dto.email);
    if (existingByEmail) {
      throw new Error('User with this email already exists');
    }

    const existingByUsername = await this.userRepository.findByUsername(dto.username);
    if (existingByUsername) {
      throw new Error('User with this username already exists');
    }

    const user = User.create({
      email: dto.email,
      username: dto.username,
      firstName: dto.firstName,
      lastName: dto.lastName,
      role: dto.role
    });

    await this.userRepository.save(user);
    return user;
  }
}
