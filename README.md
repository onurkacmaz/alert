# alert.show();
 Simple, responsive, highly customizable Javascript popup boxes.
 
 # Requirements
 - Jquery
 - FontAweSome
 - Animate.css(optional)
 - Bootstrap(optional)

# Usage
First you need to include the necessary files. You must then create an Alert object and specify the necessary settings as parameters.

# Options
```javascript
Alert.show({
    type: 'success|info|warning|error',
    title: 'Your Title',
    text: 'Your Text',
    form: {
        form_name:'demo_form',
        form_id:'demo_form_id',
        form_action:'url',
        inputs: [
            {
                type:'text',
                name:'name',
                id:'name',
                placeholder: 'Name and Surname',
                value:"Onur Kaçmaz",
                class:'form-control col-12 mt-2'
            },
            {
                type:'email',
                name:'email_name',
                id:'email_id',
                placeholder: 'Email',
                value:"kacmaz.onur@hotmail.com",
                class:'form-control col-12 mt-2'
            },
            {
                type:'number',
                name:'phone',
                id:'phone',
                placeholder: 'Phone',
                value:"XXX XXX XX XX",
                class:'form-control col-12 mt-2'
            }
        ]
    },
    openAnimateClass: 'jackInTheBox',
    closeAnimateClass: 'fadeOut',
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: 'Ok',
    confirmButtonText: 'Cancel',
    okFunction: function () {
        Alert.show({
            type: 'success',
            title: 'Success Title',
            text: 'Success Text',
            openAnimateClass: 'jackInTheBox',
            closeAnimateClass: 'fadeOut',
            showConfirmButton: true,
            showCancelButton: true,
        });
    }
});
