import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user-model';
import { CardComponent } from '../shared/card/card.component';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //decorative input
  // @Input({required:true}) avatar!: string
  // @Input({required:true}) name!: string
  // @Input({required:true}) id!: string
  //signal input
  // avatar = input.required<string>()
  // name = input.required<string>()
  // select = output<string>()

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

//zone.js
// export class UserComponent {
//    selectedeUser = DUMMY_USERS[randomIndex]
//    get imagePath(){
//     return 'assets/users/' + this.selectedeUser.avatar
//    }
//    onSelectUser(){
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     this.selectedeUser = DUMMY_USERS[randomIndex]

//    }
// }

// //signals
// export class UserComponent {
//   selectedeUser =signal( DUMMY_USERS[randomIndex])
//   imagePath=computed(()=>'assets/users/' + this.selectedeUser().avatar)

//   onSelectUser(){
//    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//    this.selectedeUser.set( DUMMY_USERS[randomIndex])

//   }
// }
