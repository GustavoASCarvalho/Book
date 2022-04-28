import { AbstractControl, FormGroup } from '@angular/forms';

export function minusculoValidator(control: AbstractControl) {
  const valor = control.value as string;
  if (valor !== valor.toLocaleLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
