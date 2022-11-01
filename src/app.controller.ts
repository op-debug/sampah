import { Body, Delete, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PengepulDto } from './dto/pengepul.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('savepengepul')
  async savePengepul(@Body() data: PengepulDto): Promise<string> {
    return await this.appService.savePengepul(data)
  }

  @Get('showallpengepul')
  async ahowAllPengepul(): Promise<any[]> {
    return await this.appService.showAllPengepul()
  }

  @Get('showbyidpengepul/:id')
  async ahowbyidPengepul(@Param('id') id: number): Promise<any[]> {
    return await this.appService.showbyidPengepul(id)
  }

  @Delete('deletebyidpengepul/:id')
  async deletePengepul(@Param('id') id: number): Promise<string> {
    return await this.appService.deletePengepul(id)
  }


}
