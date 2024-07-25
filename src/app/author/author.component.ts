import { Component } from '@angular/core';
import { AuthorService } from './author.service';
import { ToastrService } from 'ngx-toastr';
import { Author } from './author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  author: Author = new Author(0, '');
  authors: any[] = [];
  p: number = 1;

  constructor(private AuthorService: AuthorService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.AuthorService.getAll().subscribe(
      data => {
        this.authors = data;
      },
      error => {
        this.toastr.warning("Falha ao carregar os autores em tabela.");
      }
    );
  }

  onEdit(author: Author): void {
    this.author = new Author(author.id, author.name);;
  }

  onDelete(id: number): void {
    this.AuthorService.delete(id).subscribe(
      response => {
        this.toastr.success('Autor removido com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  edit(author: Author): void {
    this.AuthorService.update(author).subscribe(
      response => {
        this.author = new Author(0, '');
        this.toastr.success('Autor alterado com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  save(): void {
    this.AuthorService.create(this.author.name).subscribe(
      response => {
        this.author.name = '';
        this.toastr.success('Autor cadastro com sucesso.');
        this.getAll();
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  onSave(): void {
    if (this.author.id > 0)
      this.edit(this.author);
    else
      this.save();
  }
}
