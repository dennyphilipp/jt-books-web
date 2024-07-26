import { Component } from '@angular/core';
import { PaymentService } from './payment.service';
import { PaymentTypeService } from '../payment-type/payment-type.service';
import { BookService } from '../book/book.service';


import { ToastrService } from 'ngx-toastr';
import { Payment } from './payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment: Payment = new Payment(0, 0, 0, 0);
  payments: any[] = [];
  types: any[] = [];
  books: any[] = [];
  selectedBook: any;
  p: number = 1;

  constructor(private paymentService: PaymentService,
    private toastr: ToastrService,
    private paymentTypeService: PaymentTypeService,
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllPaymentTypes();
    this.getAllBooks();
  }

  getAll(): void {
    this.paymentService.getAll().subscribe(
      data => {
        this.payments = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os pagamentos em tabela.");
      }
    );
  }

  getAllPaymentTypes(): void {
    this.paymentTypeService.getAll().subscribe(
      data => {
        this.types = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os tipos de pagamentos.");
      }
    );
  }

  getAllBooks(): void {
    this.bookService.getAll().subscribe(
      data => {
        this.books = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os livros.");
      }
    );
  }

  onEdit(payment: Payment): void {
    this.payment = new Payment(payment.id, payment.typeId, payment.bookId, payment.value);
  }

  onDelete(id: number): void {
    this.paymentService.delete(id).subscribe(
      response => {
        this.toastr.success('Pagamento removido com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  edit(payment: Payment): void {
    this.paymentService.update(payment).subscribe(
      response => {
        this.payment = new Payment(0, 0, 0, 0);
        this.toastr.success('Pagamento alterado com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  save(): void {
    this.paymentService.create(this.payment).subscribe(
      response => {
        this.payment = new Payment(0, 0, 0, 0);
        this.toastr.success('Pagamento cadastro com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  onSave(): void {
    if (this.payment.id > 0)
      this.edit(this.payment);
    else
      this.save();
  }

  onSelectType(id: number): void {
    this.payment.typeId = id;
  }

  onSelectBook(id: any): void {
    console.log(id);
    // this.payment.bookId = id;
  }
}
