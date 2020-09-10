// to make sure our app.js is loaded
console.log('running');

// grab the app div
const app = $('#app');

// render the form to the page
const renderForm = () => {
  app.append($(`
    <form id="search" method="POST" action="/bananas">
      <label for="some-input">Some Input</label>
      <input type="text" name="some-input" placeholder="enter something">
    </form>
  `));
};

// attach submit listener for the search form
$('#app').on('submit', '#search', async function(event) {
  // prevent the default behavior of the form
  event.preventDefault();
  const myVal = $(this).find('input').val();
  console.log('myVal: ', myVal);
  try {
    // send the data from the form
    const response = await fetch('/bananas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        myVal
      })
    });
    const data = await response.json();
    console.log('data: ', data);
    
  } catch (error) {
    console.error(error)
  }
})

// if we don't call this, we won't see the form on the page!
renderForm();