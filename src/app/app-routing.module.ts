import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'livro', component: BookComponent },
    { path: 'autor', component: AuthorComponent },
    { path: 'assunto', component: SubjectComponent },
    { path: 'pagamento', component: PaymentComponent },
    { path: 'tipo-de-pagamentos', component: PaymentTypeComponent },
    // { path: '**', redirectTo: '', pathMatch: 'full' } // Rota curinga para redirecionar para a Home
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
