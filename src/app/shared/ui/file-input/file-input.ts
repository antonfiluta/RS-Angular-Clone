import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-input.html',
  styleUrl: './file-input.scss',
})
export class FileInput {
  @Input() label!: string;
  preview: string | ArrayBuffer | null = null;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => (this.preview = reader.result);
      reader.readAsDataURL(file);
    }
  }
}
