document.addEventListener('DOMContentLoaded', () => {

  function forEach( list, callback ) {
    Array.prototype.forEach.call( list, callback );
  }


  forEach(document.querySelectorAll('.tab'), function(item) {
    item.addEventListener('click', function(e) {

      let value = item.getAttribute('data-tab');

      let itemsShow = document.querySelectorAll(
        `.content[data-tab="${value}"]`
      );
      let itemsHide = document.querySelectorAll(
        `.content:not([data-tab="${value}"]`
      );


      for (const item of itemsShow) {
          item.classList.add('show');
      }

      for (const item of itemsHide) {
          item.classList.remove('show');
      }

      if (e.target.classList.contains('tab')) {
        let tab = document.querySelectorAll('.tab');
        tab.forEach((item) => item.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });

});