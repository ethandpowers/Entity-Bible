import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTab, MatTabsModule} from '@angular/material/tabs';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EastonComponent } from './Components/easton/easton.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { EastonResultComponent } from './Components/easton-result/easton-result.component';
import { TestDataComponent } from './Components/test-data/test-data.component';
import { ResourcesComponent } from './Components/resources/resources.component';
import { EntitySearchComponent } from './Components/entity-search/entity-search.component';
import { EntityResultComponent } from './Components/entity-result/entity-result.component';

const fireBaseConfig = {
  apiKey: "AIzaSyCVQhRPtS9o0ORW0aaT9bjvrbGy1Ptrco4",
    authDomain: "bibleresearchapp.firebaseapp.com",
    projectId: "bibleresearchapp",
    storageBucket: "bibleresearchapp.appspot.com",
    messagingSenderId: "485881278793",
    appId: "1:485881278793:web:560499e631fee67bdc6a98",
    measurementId: "G-CX9YQ3XCVL"
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    EastonComponent,
    NotFoundComponent,
    EastonResultComponent,
    TestDataComponent,
    ResourcesComponent,
    EntitySearchComponent,
    EntityResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
