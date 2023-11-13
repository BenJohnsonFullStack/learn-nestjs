import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // DUMMY DATA //
  private users = [
    {
      id: 1,
      name: 'Joe Cool',
      email: 'joe@cool.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Manny Houser',
      email: 'manny@houser.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'David Hemmer',
      email: 'david@hemmer.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Gary Kusinski',
      email: 'gary@kusinski.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'Allison Walsh',
      email: 'allie@walsh.com',
      role: 'ENGINEER',
    },
  ];

  // METHODS //
  getAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    // DUMMY IDS FOR NEW USERS --> increment by 1 with each new user
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        // spread in original user, then spread updatedUser to only override updated properties and persist unchanged properties
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.getById(id);
  }

  delete(id: number) {
    const deletedUser = this.getById(id);

    this.users = this.users.filter((user) => user.id !== id);

    return deletedUser;
  }
}
