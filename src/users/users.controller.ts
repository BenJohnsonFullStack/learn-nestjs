import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // api route --->  /users
export class UsersController {
  // create instance of UsersService (note: this is a singleton in Nest and will pull in automatically if created elsewhere)
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET /users
   * GET /users/:id
   * POST /users
   * PATCH /users/:id
   * DELETE /users/:id
   */

  @Get() // GET /users or /users?role=value
  getAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.getAll(role);
  }

  @Get(':id') // GET /users/:id
  getById(@Param('id') id: string) {
    // convert id paramter (a string) to a number
    return this.usersService.getById(parseInt(id));
  }

  @Post() // POST /users
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() updatedUser: object) {
    return { id, ...updatedUser };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
