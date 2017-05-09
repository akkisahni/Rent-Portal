﻿import { Component, OnInit } from '@angular/core';

//import { User } from '../_models/index';
//import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
   // currentUser: User;
   // users: User[] = [];
users:Object[];
    constructor() {
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(_id: string) {
       // this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        return this.users;
        //this.userService.getAll().subscribe(users => { this.users = users; });
    }
}