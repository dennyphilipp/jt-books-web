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
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

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
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxPaginationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
