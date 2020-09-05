import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  constructor(private  route: ActivatedRoute) {
  }

  city: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.city = params.city;
    });
  }
}
