import { Injectable } from '@nestjs/common';

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
}
