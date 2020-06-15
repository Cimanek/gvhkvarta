//!Heslo

function passConfirm() {
  var pass = document.getElementById('pass').value;
  console.log(pass);
  document.getElementById('confirm').href = pass;
}

// To co jsem stealnul

import { MDCTextField } from '@material/ripple';
import { MDCTextField } from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
