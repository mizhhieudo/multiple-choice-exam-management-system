import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from './common/users/users.module';

const routes: Routes = [
  {
    path: 'v1/admin',
    children: [],
  },
  {
    path: 'v1/client',
    children: [],
  },
  {
    path: 'v1/auth',
    children: [
      {
        path: '/accounts',
        module: UsersModule,
      },
      {
        path: '',
        module: AuthModule,
      },
    ],
  },
];

@Module({
  imports: [
    RouterModule.register(routes),
    UsersModule,
    AuthModule, // setup the routes
  ],
})
export class V1Module {}