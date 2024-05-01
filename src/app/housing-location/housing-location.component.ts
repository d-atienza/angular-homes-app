import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- template treats the src attribute of img as a string-->
      <!-- to resolve this, we need to use angular feature called property binding-->
      <!-- this tells angular that the value in quotes should be an actual property from the component class-->
    <img class="listing-photo" [src]="housingLocation.photo" alt="exterior photo of {{housingLocation.name}}"> 
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  //property of class, type HousingLocation
  // the ! is a non-null assertion operator and tells ts the value will not be null or undefined
  @Input() housingLocation!: HousingLocation; 
}
