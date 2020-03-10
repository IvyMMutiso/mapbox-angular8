import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
// import { MapService } from './services/map.service';
import { GeoJson, FeatureCollection } from './models/map';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mapbox-angular8';

  map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/outdoors-v9';
  // lat = 37.75;
  // lng = -122.41;
  message = 'Hello World!';
  style: 'mapbox://styles/mapbox/light-v9';

  // data
  source: any;
  markers: any;

  // lat = 13.0569951;
  // lng = 80.20929129999999;

  // Kenya
  lat = 36.2667;
  lng = 0.8000;

  constructor() {}

  ngOnInit() {
    // this.markers = this.mapService.getMarkers();
    // this.initializeMap();

    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      // Navigation
      style: 'mapbox://styles/mwonge/ck7luy1ee078j1imfutcdttha',
      // Monochrome
      // style: 'mapbox://styles/mwonge/ck7lznxi80zzh1iuora69djgp',
      zoom: 5.5,
      // center: [-122.420679, 37.772537],
      center: [this.lat, this.lng]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    console.log('this.map : ', this.map);
  }
}
