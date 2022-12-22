import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { AuthModule } from '../auth/auth.module';
import { CategoryModule } from './common/category/category.module';
import { CommentModule } from './common/comment/comment.module';
import { DocumentModule } from './common/document/document.module';
import { ExamModule } from './common/exam/exam.module';
import { QuestionModule } from './common/question/question.module';
import { UsersModule } from './common/users/users.module';

const routes: Routes = [
  {
    path: 'v1/',
    children: [
      {
        path: '/question-management',
        module: QuestionModule,
      },
      {
        path: '/example-management',
        module: ExamModule,
      },
      {
        path: '/category',
        module: CategoryModule,
      },
      {
        path: '/comments',
        module: CommentModule,
      },
      {
        path: '/documents',
        module: DocumentModule,
      },
    ],
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
    AuthModule,
    QuestionModule,
    ExamModule,
    CategoryModule,
    CommentModule,
    DocumentModule, // setup the routes
  ],
})
export class V1Module {}
