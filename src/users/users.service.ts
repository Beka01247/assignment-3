import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Create a new user
  async create(data: users): Promise<users> {
    return this.prisma.users.create({ data });
  }

  // Get all users
  async findAll(): Promise<users[]> {
    return this.prisma.users.findMany();
  }

  // Get a user by email
  async findOne(email: string): Promise<users> {
    return this.prisma.users.findUnique({ where: { email } });
  }

  // Update a user
  async update(email: string, data: Partial<users>): Promise<users> {
    return this.prisma.users.update({ where: { email }, data });
  }

  // Delete a user
  async remove(email: string): Promise<users> {
    return this.prisma.users.delete({ where: { email } });
  }
}
