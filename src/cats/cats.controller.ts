import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatService } from './cats.service';
import { Cat } from 'src/dto/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catService.findOne(id);
  }
  
  @Post('create')
  async create(@Body() cat: Cat): Promise<Cat> {
    try {
      return this.catService.create(cat);
    } catch(error) {
      console.error(error);
    }
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updatedCat: Cat): Promise<Cat> {
    return this.catService.update(id, updatedCat);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<void> {
    this.catService.delete(id);
  }
}
