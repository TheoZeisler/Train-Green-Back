import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/:de/:a')
  getBitcoinPrice(@Param('de') de: string, @Param('a') a: string){
    return this.appService.getBitcoinPriceUSD(de,a);
  }
}
