import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { ValidationPipe } from '../common/validation.pipe';
import { CreateItemDto } from './create-item.dto';
import { AdminGuard } from '../common/admin.guard';

@Controller('items')
export class ItemsController {

    constructor(
        private itemService: ItemsService
    ) {}

    @Get()
    async findAll(): Promise<Array<Item>> {
        return this.itemService.findAll();
    }

    @Post() 
    @UseGuards(new AdminGuard)
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: CreateItemDto) {
        return this.itemService.create(createItemDto);
    }

}
