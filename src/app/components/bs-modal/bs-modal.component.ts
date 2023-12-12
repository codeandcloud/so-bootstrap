import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrl: './bs-modal.component.scss',
})
export class BsModalComponent {
  openModal = () => {
    const exampleModal = new Modal('#exampleModal');
    exampleModal.show();
  };
}
