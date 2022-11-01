import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PengepulDto } from './dto/pengepul.dto';
import { Pengepul } from './entity/pengepul.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Pengepul)
    private pengepulRepository: Repository<Pengepul>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async savePengepul(data: PengepulDto): Promise<string> {
    try {
      await this.pengepulRepository.save(data)
      return "Success"
    } catch (e) {
      throw new Error(e);

    }
  }

  async showAllPengepul(): Promise<any[]> {
    try {
      return await this.pengepulRepository.find()
    } catch (e) {
      throw new Error(e);

    }
  }

  async showbyidPengepul(id: number): Promise<any> {
    try {
      return await this.pengepulRepository.findOneBy({ id })
    } catch (e) {
      throw new Error(e);

    }
  }

  async deletePengepul(id: number): Promise<any> {
    try {
      return await this.pengepulRepository.delete(id)
    } catch (e) {
      throw new Error(e);

    }
  }
}
