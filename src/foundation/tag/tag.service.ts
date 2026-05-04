import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async getActive(): Promise<Tag[]> {
    return await this.tagRepository
      .createQueryBuilder('tag')
      .where('tag.is_active = :isActive', { isActive: true })
      .orderBy('tag.name', 'ASC')
      .getMany();
  }

  async getByColor(color: string): Promise<Tag[]> {
    return await this.tagRepository
      .createQueryBuilder('tag')
      .where('tag.is_active = :isActive', { isActive: true })
      .andWhere('tag.color = :color', { color })
      .orderBy('tag.name', 'ASC')
      .getMany();
  }

  async create(data: {
    name: string;
    slug?: string;
    color?: string;
    is_active?: boolean;
  }): Promise<Tag> {
    const tag = this.tagRepository.create({
      name: data.name,
      slug: data.slug || data.name.toLowerCase().replace(/\s+/g, '-'),
      color: data.color || '#7073FF',
      is_active: data.is_active ?? true,
    });

    return await this.tagRepository.save(tag);
  }

  async attachToCategory(tag: Tag, categoryId: number): Promise<void> {
    await this.tagRepository
      .createQueryBuilder()
      .relation(Tag, 'categories')
      .of(tag)
      .add(categoryId);
  }
}