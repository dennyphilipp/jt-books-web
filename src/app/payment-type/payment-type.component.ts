import { Component } from '@angular/core';
import { PaymentTypeService } from './payment-type.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentType } from './payment-type.model';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css']
})
export class PaymentTypeComponent {
  payment: PaymentType = new PaymentType(0, '');
  payments: any[] = [];
  p: number = 1;

  constructor(private paymentTypeService: PaymentTypeService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.paymentTypeService.getAll().subscribe(
      data => {
        this.payments = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os autores em tabela.");
      }
    );
  }

  onEdit(payment: PaymentType): void {
    this.payment = new PaymentType(payment.id, payment.name);;
  }

  onDelete(id: number): void {
    this.paymentTypeService.delete(id).subscribe(
      response => {
        this.toastr.success('Autor removido com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  edit(payment: PaymentType): void {
    this.paymentTypeService.update(payment).subscribe(
      response => {
        this.payment = new PaymentType(0, '');
        this.toastr.success('Autor alterado com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  save(): void {
    this.paymentTypeService.create(this.payment.name).subscribe(
      response => {
        this.payment.name = '';
        this.toastr.success('Autor cadastro com sucesso.');
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
}
