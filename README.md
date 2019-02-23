# alert.show();
 Simple, responsive, highly customizable Javascript popup boxes.
 
 # Requirements;
 - Jquery
 - FontAweSome
 - Animate.css(optional)
 - Bootstrap(optional)

# Usage
First you need to include the necessary files. You must then create an Alert object and specify the necessary settings as parameters.

# Options
```javascript
Alert.show({
  type: 'success|warning|error',
  title: 'Your Title',
  text: 'Your text',
  openAnimateClass: 'Popup box open animation(animate.css)',
  closeAnimateClass: 'Popup box close animation(animate.css)',
  showConfirmButton: true|false,
  showCancelButton: true|false,
  cancelButtonText: 'Your button text',
  confirmButtonText: 'Your button text'
});
