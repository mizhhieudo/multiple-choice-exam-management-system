import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/authorization/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/authorization/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/authorization/guards/roles.guard';
import { Role } from '../auth/authorization/roles/role.enum';
import { AppService } from './app.service';

@Controller()
@ApiBearerAuth('defaultBearerAuth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
