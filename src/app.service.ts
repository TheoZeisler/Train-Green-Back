import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {map} from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService){}

  async getBitcoinPriceUSD(de:String,a:String) {
    let deLatLong, aLatLong;

  console.log(de,a)
  await this.http
      .get('https://adab0936-27cd-4086-a699-d5797ca35fef@api.navitia.io/v1/places?q=' + de)
      .pipe(map((response) => response.data))
      .forEach((data) => deLatLong = data.places[0].id);

  console.log(deLatLong)

  await this.http
      .get('https://adab0936-27cd-4086-a699-d5797ca35fef@api.navitia.io/v1/places?q=' + a)
      .pipe(map((res) => res.data))
      .forEach((data) => aLatLong = data.places[0].id);
  
  console.log(aLatLong)

   return this.http
      .get('https://adab0936-27cd-4086-a699-d5797ca35fef@api.navitia.io/v1/coverage/fr-ne/journeys?from=' + deLatLong + '&to=' + aLatLong)
      .pipe(
        map((res) => { 
          console.log(res.data?.journeys)
          return res.data?.journeys;
        }),
      )
  }
}