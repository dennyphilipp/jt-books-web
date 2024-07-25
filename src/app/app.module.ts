import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BookComponent,
        AuthorComponent,
        PaymentComponent,
        PaymentTypeComponent,
        SubjectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
