import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormUserComponent } from './components/form-user/form-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-users';
}
