const Keyboard = {
  elements: {
    main: null,
    container: null,
    keys: [],
  },

  handlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
    lang: 'ru',
  },

  init() {
    // Создание главного элемента
    this.elements.main = document.createElement('div');
    this.elements.container = document.createElement('div');
    this.elements.textField = document.createElement('textarea');

    // Настройка главного элемента
    this.elements.main.classList.add('keyboard');
    this.elements.container.classList.add('keys');
    this.elements.textField.classList.add('text__window');
    this.elements.container.appendChild(this.createKeys());
    this.elements.keys = this.elements.container.querySelectorAll('.keyDown');

    // Добавление в DOM
    this.elements.main.appendChild(this.elements.container);
    document.body.appendChild(this.elements.textField);
    document.body.appendChild(this.elements.main);

    // Установка текущего значения textArea
    const textArea = document.querySelector('.text__window');
    textArea.addEventListener('focus', () => {
      this.open(textArea.value, (currentValue) => {
        textArea.value = currentValue;
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      {
        keycode: 'Backquote',
        engDown: '`',
        engUp: '~',
        ruDown: 'ё',
        ruUp: '',
      },
      {
        keycode: 'Digit1',
        engDown: '1',
        engUp: '!',
        ruDown: '1',
        ruUp: '!',
      },
      {
        keycode: 'Digit2',
        engDown: '2',
        engUp: '@',
        ruDown: '2',
        ruUp: '"',
      },
      {
        keycode: 'Digit3',
        engDown: '3',
        engUp: '#',
        ruDown: '3',
        ruUp: '№',
      },
      {
        keycode: 'Digit4',
        engDown: '4',
        engUp: '$',
        ruDown: '4',
        ruUp: ';',
      },
      {
        keycode: 'Digit5',
        engDown: '5',
        engUp: '%',
        ruDown: '5',
        ruUp: '%',
      },
      {
        keycode: 'Digit6',
        engDown: '6',
        engUp: '^',
        ruDown: '6',
        ruUp: ':',
      },
      {
        keycode: 'Digit7',
        engDown: '7',
        engUp: '&',
        ruDown: '7',
        ruUp: '?',
      },
      {
        keycode: 'Digit8',
        engDown: '8',
        engUp: '*',
        ruDown: '8',
        ruUp: '*',
      },
      {
        keycode: 'Digit9',
        engDown: '9',
        engUp: '(',
        ruDown: '9',
        ruUp: '(',
      },
      {
        keycode: 'Digit0',
        engDown: '0',
        engUp: ')',
        ruDown: '0',
        ruUp: ')',
      },
      {
        keycode: 'Minus',
        engDown: '-',
        engUp: '_',
        ruDown: '-',
        ruUp: '_',
      },
      {
        keycode: 'Equal',
        engDown: '=',
        engUp: '+',
        ruDown: '=',
        ruUp: '+',
      },
      {
        keycode: 'Backspace',
        engDown: 'Backspace',
        engUp: '',
        ruDown: 'Backspace',
        ruUp: '',
      },
      {
        keycode: 'Tab',
        engDown: 'Tab',
        engUp: '',
        ruDown: 'Tab',
        ruUp: '',
      },
      {
        keycode: 'KeyQ',
        engDown: 'q',
        engUp: '',
        ruDown: 'й',
        ruUp: '',
      },
      {
        keycode: 'KeyW',
        engDown: 'w',
        engUp: '',
        ruDown: 'ц',
        ruUp: '',
      },
      {
        keycode: 'KeyE',
        engDown: 'e',
        engUp: '',
        ruDown: 'у',
        ruUp: '',
      },
      {
        keycode: 'KeyR',
        engDown: 'r',
        engUp: '',
        ruDown: 'к',
        ruUp: '',
      },
      {
        keycode: 'KeyT',
        engDown: 't',
        engUp: '',
        ruDown: 'е',
        ruUp: '',
      },
      {
        keycode: 'KeyY',
        engDown: 'y',
        engUp: '',
        ruDown: 'н',
        ruUp: '',
      },
      {
        keycode: 'KeyU',
        engDown: 'u',
        engUp: '',
        ruDown: 'г',
        ruUp: '',
      },
      {
        keycode: 'KeyI',
        engDown: 'i',
        engUp: '',
        ruDown: 'ш',
        ruUp: '',
      },
      {
        keycode: 'KeyO',
        engDown: 'o',
        engUp: '',
        ruDown: 'щ',
        ruUp: '',
      },
      {
        keycode: 'KeyP',
        engDown: 'p',
        engUp: '',
        ruDown: 'з',
        ruUp: '',
      },
      {
        keycode: 'BracketLeft',
        engDown: '[',
        engUp: '{',
        ruDown: 'х',
        ruUp: '',
      },
      {
        keycode: 'BracketRight',
        engDown: ']',
        engUp: '}',
        ruDown: 'ъ',
        ruUp: '',
      },
      {
        keycode: 'Delete',
        engDown: 'Del',
        engUp: '',
        ruDown: 'Del',
        ruUp: '',
      },
      {
        keycode: 'CapsLock',
        engDown: 'CapsLock',
        engUp: '',
        ruDown: 'CapsLock',
        ruUp: '',
      },
      {
        keycode: 'KeyA',
        engDown: 'a',
        engUp: '',
        ruDown: 'ф',
        ruUp: '',
      },
      {
        keycode: 'KeyS',
        engDown: 's',
        engUp: '',
        ruDown: 'ы',
        ruUp: '',
      },
      {
        keycode: 'KeyD',
        engDown: 'd',
        engUp: '',
        ruDown: 'в',
        ruUp: '',
      },
      {
        keycode: 'KeyF',
        engDown: 'f',
        engUp: '',
        ruDown: 'а',
        ruUp: '',
      },
      {
        keycode: 'KeyG',
        engDown: 'g',
        engUp: '',
        ruDown: 'п',
        ruUp: '',
      },
      {
        keycode: 'KeyH',
        engDown: 'h',
        engUp: '',
        ruDown: 'р',
        ruUp: '',
      },
      {
        keycode: 'KeyJ',
        engDown: 'j',
        engUp: '',
        ruDown: 'о',
        ruUp: '',
      },
      {
        keycode: 'KeyK',
        engDown: 'k',
        engUp: '',
        ruDown: 'л',
        ruUp: '',
      },
      {
        keycode: 'KeyL',
        engDown: 'l',
        engUp: '',
        ruDown: 'д',
        ruUp: '',
      },
      {
        keycode: 'Semicolon',
        engDown: ';',
        engUp: ':',
        ruDown: 'ж',
        ruUp: '',
      },
      {
        keycode: 'Quote',
        engDown: "'",
        engUp: '"',
        ruDown: 'э',
        ruUp: '',
      },
      {
        keycode: 'Backslash',
        engDown: '\\',
        engUp: '|',
        ruDown: '\\',
        ruUp: '|',
      },
      {
        keycode: 'Enter',
        engDown: 'Enter',
        engUp: '',
        ruDown: 'Enter',
        ruUp: '',
      },
      {
        keycode: 'ShiftLeft',
        engDown: 'shift',
        engUp: '',
        ruDown: 'shift',
        ruUp: '',
      },
      {
        keycode: 'KeyZ',
        engDown: 'z',
        engUp: '',
        ruDown: 'я',
        ruUp: '',
      },
      {
        keycode: 'KeyX',
        engDown: 'x',
        engUp: '',
        ruDown: 'ч',
        ruUp: '',
      },
      {
        keycode: 'KeyC',
        engDown: 'c',
        engUp: '',
        ruDown: 'с',
        ruUp: '',
      },
      {
        keycode: 'KeyV',
        engDown: 'v',
        engUp: '',
        ruDown: 'м',
        ruUp: '',
      },
      {
        keycode: 'KeyB',
        engDown: 'b',
        engUp: '',
        ruDown: 'и',
        ruUp: '',
      },
      {
        keycode: 'KeyN',
        engDown: 'n',
        engUp: '',
        ruDown: 'т',
        ruUp: '',
      },
      {
        keycode: 'KeyM',
        engDown: 'm',
        engUp: '',
        ruDown: 'ь',
        ruUp: '',
      },
      {
        keycode: 'Comma',
        engDown: ',',
        engUp: '<',
        ruDown: 'б',
        ruUp: '',
      },
      {
        keycode: 'Period',
        engDown: '.',
        engUp: '>',
        ruDown: 'ю',
        ruUp: '',
      },
      {
        keycode: 'Slash',
        engDown: '/',
        engUp: '?',
        ruDown: '.',
        ruUp: ',',
      },
      {
        keycode: 'ShiftRight',
        engDown: 'Rshift',
        engUp: '',
        ruDown: 'Rshift',
        ruUp: '',
      },
      {
        keycode: 'ArrowUp',
        engDown: '^',
        engUp: '',
        ruDown: '^',
        ruUp: '',
      },
      {
        keycode: 'ControlLeft',
        engDown: 'ctrl',
        engUp: '',
        ruDown: 'ctrl',
        ruUp: '',
      },
      {
        keycode: 'MetaLeft',
        engDown: 'fn',
        engUp: '',
        ruDown: 'fn',
        ruUp: '',
      },
      {
        keycode: 'AltLeft',
        engDown: 'alt',
        engUp: '',
        ruDown: 'alt',
        ruUp: '',
      },
      {
        keycode: 'Space',
        engDown: 'space',
        engUp: '',
        ruDown: 'space',
        ruUp: '',
      },
      {
        keycode: 'AltLeft',
        engDown: 'alt',
        engUp: '',
        ruDown: 'alt',
        ruUp: '',
      },
      {
        keycode: 'MetaLeft',
        engDown: 'fn',
        engUp: '',
        ruDown: 'fn',
        ruUp: '',
      },
      {
        keycode: 'ControlRight',
        engDown: 'Rctrl',
        engUp: '',
        ruDown: 'Rctrl',
        ruUp: '',
      },
      {
        keycode: 'ArrowLeft',
        engDown: '<',
        engUp: '',
        ruDown: '<',
        ruUp: '',
      },
      {
        keycode: 'ArrowDown',
        engDown: 'down',
        engUp: '',
        ruDown: 'down',
        ruUp: '',
      },
      {
        keycode: 'ArrowRight',
        engDown: '>',
        engUp: '',
        ruDown: '>',
        ruUp: '',
      },
    ];

    const createKeysName = (keys_nameUp, keys_nameDown) => `<span class="keyUp">${keys_nameUp}</span><span class="keyDown">${keys_nameDown}</span>`;

    keyLayout.forEach((key) => {
      const addNewLine = ['Backspace', 'Delete', 'Enter', 'ArrowUp', 'Rctrl'].indexOf(key.keycode) !== -1;
      const keyElement = document.createElement('button');
      const capsIndicator = document.createElement('div');
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('key');
      this.properties.lang == 'eng'
        ? keyElement.innerHTML = createKeysName(key.engUp, key.engDown)
        : keyElement.innerHTML = createKeysName(key.ruUp, key.ruDown);

      keyElement.textContent.toLowerCase();

      switch (key.engDown) {
        case 'Backspace':
          keyElement.classList.add('key--wide');
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
          });
          break;

        case 'CapsLock':
          keyElement.classList.add('key--medium');
          capsIndicator.classList.add('key__caps');
          keyElement.appendChild(capsIndicator);
          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('key__caps--active', this.properties.capsLock);
          });
          break;
        case 'Enter':
          keyElement.classList.add('key--wide');
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });
          break;
        case 'space':
          keyElement.classList.add('key__space');
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });
          break;
        case 'Tab':
          keyElement.classList.add('key--medium');
          keyElement.addEventListener('click', () => {
            this.properties.value += '        ';
            this.triggerEvent('oninput');
          });
          break;
        case 'shift':
          keyElement.classList.add('key--shift');
          break;
        case 'Rshift':
          keyElement.classList.add('key--shift');
          break;
        case 'alt':
          keyElement.classList.add('key--medium');
          break;
        case 'Ralt':
          keyElement.classList.add('key--medium');
          break;
        case 'ctrl':
          keyElement.classList.add('key--medium');
          break;
        case 'Rctrl':
          keyElement.classList.add('key--medium');
          break;
        default:

          if (this.properties.lang === 'eng') {
            keyElement.addEventListener('click', () => {
              this.properties.value += this.properties.capsLock
                ? key.engDown.toUpperCase()
                : key.engDown.toLowerCase();
              this.triggerEvent('oninput');
            });
          } else if (this.properties.lang === 'ru') {
            keyElement.addEventListener('click', () => {
              this.properties.value += this.properties.capsLock
                ? key.ruDown.toUpperCase()
                : key.ruDown.toLowerCase();
              this.triggerEvent('oninput');
              console.log(this.properties.value);
            });
          }
      }

      fragment.appendChild(keyElement);

      if (addNewLine) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  triggerEvent(handlerName) {
    console.log(`Event Triggered! Event Name: ${handlerName}`);
    console.log(this.properties.value);
    if (typeof this.handlers[handlerName] === 'function') {
      this.handlers[handlerName](this.properties.value);
    }
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (key.textContent.length == 1) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.handlers.oninput = oninput;
    this.handlers.onclose = onclose;
  },

  close() {
    this.properties.value = '';
    this.handlers.oninput = oninput;
    this.handlers.onclose = onclose;
  },

};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});

// function runOnKeys(func, ...codes) {
//   const pressed = new Set();

//   document.addEventListener('keydown', (event) => {
//     pressed.add(event.code);

//     for (const code of codes) {
//       if (!pressed.has(code)) {
//         return;
//       }
//     }

//     pressed.clear();

//     func();
//   });

//   document.addEventListener('keyup', (event) => {
//     pressed.delete(event.code);
//   });
// }

// runOnKeys(
//   () => {
//     Keyboard.properties.lang === 'eng' ? Keyboard.properties.lang = 'ru' : Keyboard.properties.lang = 'eng';
//     console.log(Keyboard.properties.lang);
//     Keyboard.createElement();
//   },
//   'KeyQ',
//   'KeyW',
// );

// document.onkeydown = function(event) {
//   console.log(event.charCode)
// }
// document.onkeydown = function(event) {
//   console.log(event);
//   keyboardList.push(event.code)
//   console.log(event.key)

// }
