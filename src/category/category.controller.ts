/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesDto } from 'src/dto/category.dto';

@Controller('category')
export class CategoryController {
  @Get()
  getAllCategories(): string {
    return JSON.stringify("Hello ssup");
  }

  @Post()
  postCategory(@Body() category: CategoriesDto): string {
    return `category name is ${category.categories}`;
  }
}
