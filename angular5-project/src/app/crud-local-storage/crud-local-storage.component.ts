import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs/operator/concat';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-local-storage',
  templateUrl: './crud-local-storage.component.html',
  styleUrls: ['./crud-local-storage.component.css']
})
export class CrudLocalStorageComponent implements OnInit {
  @LocalStorage('pessoa')
  pessoaAttribute;

  pessoa = {
    id: '',
    name: '',
    email: '',
    photo: ''
  };

  // TODO filter
  term = '';

  listUser = [];

  constructor(
    private storage: LocalStorageService,
    private toastr: ToastrService
  ) { }

  save() {
    const listLocal = this.storage.retrieve('pessoa');
    if (!this.pessoa.id) {
      this.pessoa.id = new Date().getTime().toString();
      this.listUser = listLocal === null ? [] : listLocal;
      this.listUser.push(this.pessoa);
      this.storage.store('pessoa', this.listUser);
      this.list();
      this.toastr.success('Cadastro efetuado com sucesso!', `Pessoa  ${this.pessoa.name}`);
      this.pessoa = {
        id: '',
        name: '',
        email: '',
        photo: ''
      };
    } else {
      this.update(this.pessoa.id);
      this.toastr.success('Edição efetuada com sucesso!', `Pessoa  ${this.pessoa.name}`);
      this.pessoa = {
        id: '',
        name: '',
        email: '',
        photo: ''
      };
    }
  }

  update(id) {
    const usersTemp = this.list();
    for (let index = 0; index < usersTemp.length; index++) {
      if (usersTemp[index].id === id) {
        usersTemp[index].name = this.pessoa.name;
        usersTemp[index].email = this.pessoa.email;
        usersTemp[index].photo = this.pessoa.photo;
      }
    }
    this.storage.store('pessoa', usersTemp);
  }

  list() {
    if (this.storage.retrieve('pessoa') !== null && this.storage.retrieve('pessoa').length > 0) {
      return this.storage.retrieve('pessoa');
    } else {
      return [];
    }
  }

  deleteAll() {
    if (window.confirm('Hê doido quer remover todo mundo mesmo?') === true) {
      this.toastr.success('Remoção da galera efetuada com sucesso!');
      this.storage.clear('pessoa');
      const listLocal = this.storage.store('pessoa', []);
    }
  }

  getById(id: string) {
    const usersTemp = this.list();
    for (let index = 0; index < usersTemp.length; index++) {
      if (usersTemp[index].id === id) {
        return usersTemp[index];
      }
    }
  }

  edit(id: string) {
    this.pessoa = this.getById(id);
  }

  remove(id: string) {
    const usersTemp = this.list();
    for (let index = 0; index < usersTemp.length; index++) {
      if (usersTemp[index].id === id) {
        if (window.confirm('Deseja realmente remover o ' + usersTemp[index].name + ' ?') === true) {
          this.toastr.success('Remoção efetuada com sucesso!', `Pessoa  ${usersTemp[index].name}`);
          usersTemp.splice(index, 1);
        }
      }
    }
    this.storage.store('pessoa', usersTemp);
    this.pessoa = {
      id: '',
      name: '',
      email: '',
      photo: ''
    };

  }

  ngOnInit() {
    this.list();
  }

}
