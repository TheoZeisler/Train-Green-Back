import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {map} from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService){}

  async getBitcoinPriceUSD(de,a) {
    let aLatLong, deLatLong
    this.http
      .get('https://adab0936-27cd-4086-a699-d5797ca35fef@api.navitia.io/v1/places?q=' + de)
      .pipe(
        map((res) => res.data?.places),
        map((places) => { 
          deLatLong =  places?.id;
        }),
      )

      this.http
      .get('https://adab0936-27cd-4086-a699-d5797ca35fef@api.navitia.io/v1/places?q=' + a)
      .pipe(
        map((res) => res.data?.places),
        map((places) => { 
          aLatLong =  places?.id;
        }),
      )

    return this.http
      .get('https://adab0936-27cd-4086-a699-d5797ca35fef@api.navitia.io/v1/coverage/fr-ne/journeys?from=' + deLatLong + '&to=' + aLatLong + '&')
      .pipe(
        
        map((res) => { 
          return res.data?.journeys;
        }),
      )
  }
}