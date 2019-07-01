import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';

@Injectable()
export class ItemsService {
    private readonly items: Array<Item> = [];

    findAll(): Array<Item> {
        return this.items;
    }
    create(item: Item) {
        this.items.push(item);
        // console.log('this.items', this.items);
    }
}
