import { Component } from '@angular/core';
import { SubjectService } from './subject.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  description: string = '';
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

  onSave(): void {
    this.subjectService.createSubject(this.description).subscribe(
      response => {
        this.description = '';
        this.toastr.success('Assunto cadastro com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }
}
