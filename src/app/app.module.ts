import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


// import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import {ConsentComponent} from './settings/consent.component';
import {WidgetConfiguratorComponent} from './settings/widget.configurator.component'
import {DragulaModule} from 'ng2-dragula';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
export * from './material.imports';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

// import {CoursesComponent} from './courses/courses.component';
// import {CoursesPageComponent} from './courses/course.page.component';

//services
import {MockConsentService} from './services/mock/consent.service'
import {CourseTemplateService} from './services/template.service'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MediaMatcher} from '@angular/cdk/layout';

import { ThemeModule } from './navigation/navigation.module';
// import {CourseModule} from './courses/course.module';

import {AppRouterModule} from './app.router.module';
import {VizModule} from './viz/viz.module';

@NgModule({
  imports: [
    ChartsModule,
    DragulaModule,
    BrowserModule,
    FormsModule,

    // MatButtonModule, 
    MatCheckboxModule,BrowserAnimationsModule,NoopAnimationsModule,
    MatGridListModule,MatToolbarModule,
    MatSidenavModule,
    MatIconModule,MatMenuModule,MatListModule,
    MatExpansionModule,MatCardModule,MatDividerModule,
    ThemeModule.forRoot(),
    VizModule,
    AppRouterModule,
    // RouterModule.forRoot([
    //   // { path: '', component: CoursesComponent },
    //   { path: 'data', component: ConsentComponent },
    //   { path: 'functionality', component: ConsentComponent },
    //   { path: 'widget', component: WidgetConfiguratorComponent },
    //   { path: 'consent', component: ConsentComponent },
    //   {path: 'course', loadChildren: 'app/courses/course.module#CourseModule'},
    //   // { path: 'courses', component: CoursesComponent },
    //   // { path: 'course/:courseid', component: CoursesPageComponent },

    //   { path: 'widgetConfig', component: WidgetConfiguratorComponent },

      
    // ])
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    
    ConsentComponent,
    WidgetConfiguratorComponent,
    // CoursesComponent,
    // CoursesPageComponent

  ],
  providers: [
    { provide: MockConsentService, useClass: MockConsentService },
    { provide: CourseTemplateService, useClass: CourseTemplateService }, 
    MediaMatcher
    
    ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
