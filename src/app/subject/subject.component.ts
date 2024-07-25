import { Component } from '@angular/core';
import { SubjectService } from './subject.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  subject: Subject = new Subject(0, '');
  subjects: any[] = [];
  p: number = 1;

  constructor(private subjectService: SubjectService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subjectService.getAll().subscribe(
      data => {
        this.subjects = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os assuntos em tabela.");
      }
    );
  }

  onEdit(subject: Subject): void {
    this.subject = new Subject(subject.id, subject.description);;
  }

  onDelete(id: number): void {
    this.subjectService.delete(id).subscribe(
      response => {
        this.toastr.success('Assunto removido com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  edit(subject: Subject): void {
    this.subjectService.update(subject).subscribe(
      response => {
        this.subject = new Subject(0, '');
        this.toastr.success('Assunto alterado com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  save(): void {
    this.subjectService.create(this.subject.description).subscribe(
      response => {
        this.subject.description = '';
        this.toastr.success('Assunto cadastro com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  onSave(): void {
    if (this.subject.id > 0)
      this.edit(this.subject);
    else
      this.save();
  }
}
