import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getBitcoinPrice(
    @Query('de') de: String,
    @Query('a') a: String,
    ){
    return this.appService.getBitcoinPriceUSD(de,a);
    //return 'de: '+de+'a: '+a;
  }
}
