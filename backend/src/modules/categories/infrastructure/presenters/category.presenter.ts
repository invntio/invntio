import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../domain/entity/category.entity';

export class CategoryPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
