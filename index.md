---
title: My First Page
layout: default
published: true
---
### Alert.show();

Simple, responsive, highly customizable Javascript popup boxes.

### Requirements
- Jquery
- FontAweSome
- Animate.css(optional)
- Bootstrap(optional)

### Usage

> First you need to include the necessary files. You must then create an Alert object and specify the necessary settings as parameters.

### Alert.show();

```js
Alert.show({
    type: 'info',
    title: 'Hi :)',
    text: 'Hi This is Alert.show();',
    openAnimateClass: 'wobble',
    closeAnimateClass: 'fadeOut',
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Ok',
    form: {
        form_name: 'demo_form',
        form_id: 'demo_form_id',
        form_action: 'url',
        inputs: [
            {
                type: 'text',
                name: 'name',
                id: 'name',
                placeholder: 'Name and Surname',
                value: "Onur Kaçmaz",
                class: 'form-control col-12 mt-2'
            },
            {
                type: 'email',
                name: 'email_name',
                id: 'email_id',
                placeholder: 'Email',
                value: "kacmaz.onur@hotmail.com",
                class: 'form-control col-12 mt-2'
            },
            {
                type: 'number',
                name: 'phone',
                id: 'phone',
                placeholder: 'Phone',
                value: "XXX XXX XX XX",
                class: 'form-control col-12 mt-2'
            }
        ]
    },
    okFunction: function () {
        // Ok Function
    }
});
```

### Alert.little();

```js
Alert.little({
  type: 'info',
  title: 'Success',
  text: 'This is success box. Will close after 2000 ms.',
  delay: 2000
});
```