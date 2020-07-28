import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Duane', bio: 'A diligent worker'}),

      new AdItem(HeroProfileComponent, {name: 'Maria', bio: 'Intelligent as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Yoshi', bio: 'Very focused'}),

      new AdItem(HeroProfileComponent, {name: 'Amber', bio: 'Smart as a whip'}),

      new AdItem(HeroProfileComponent, {name: 'Ryu', bio: 'A super worker'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today!'}),
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
