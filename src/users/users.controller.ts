import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users') // api route --->  /users
export class UsersController {
  /**
   * GET /users
   * GET /users/:id
   * POST /users
   * PATCH /users/:id
   * DELETE /users/:id
   */

  @Get() // GET /users
  findAll() {
    return [];
  }

  @Get(':id') // GET /users/:id
  findById(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  createUser(@Body() user: object) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  updateUser(@Param('id') id: string, @Body() updatedUser: object) {
    return {
      id,
      message: `User Successfully Updated`,
      data: { ...updatedUser },
    };
  }

  @Delete(':id') // DELETE /users/:id
  deleteUser(@Param('id') id: string, @Body() deletedUser: object) {
    return {
      id,
      message: `User Successfully Deleted`,
      data: { ...deletedUser },
    };
  }
}
