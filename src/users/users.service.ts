import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdatedUserDto } from './dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Benny Bimdoozle',
      email: 'howdy@mechanic.biz',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Donnie Darko',
      email: 'don@rabbit.biz',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Stu Pickles',
      email: 'stumeister@rugrats.biz',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Sabrina Witch',
      email: 'classic@teenage.biz',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUserDto: UpdatedUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
