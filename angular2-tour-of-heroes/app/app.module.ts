import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService} from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing,
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent,
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }