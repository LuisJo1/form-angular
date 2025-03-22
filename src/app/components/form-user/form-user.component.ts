import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]], 
      surname: [''], 
      country_id: [187, [Validators.required]], 
      status_id: [20, ],
      phone: [''], 
      email: ['', [Validators.email]], 
      kyc_filled: [false], 
      zip: [''], 
      city: [''], 
      province: [''],
      address: [''], 
      whats_app: [''],
      affiliate_code: [''],
      buying_status: [''], 
      account_type_id: [null], 
      account_level_id: [null], 
      commission_level: [''],
      show_on_dashboard: [false], 
      show_on_contacts: [false], 
      docusign_filled: [false], 
      disabled: [false], 
      role: [''], 
      avatar_photo: [null] 
    });
  }

  onSubmit() {
    console.log('Formulario enviado:', this.userForm.value);
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      // Enviar los datos a la API
      this.http.post('https://admincmsbe.slaff.io/api/v1/users', formData).subscribe({
        next: (response) => {
          console.log('Datos enviados con éxito:', response);
          alert('Usuario creado con éxito');
        },
        error: (error) => {
          console.error('Error al enviar los datos:', error);
          alert('Hubo un error al enviar los datos');
        }
      });
    } else {
      alert('Por favor, completa el formulario correctamente');
    }
  }


}
