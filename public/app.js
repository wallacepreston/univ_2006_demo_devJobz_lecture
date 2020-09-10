console.log('running');

const app = $('#app');

const renderForm = () => {
  app.append($(`
    <form id="search" method="POST" action="/bananas">
      <label for="some-input">Some Input</label>
      <input type="text" name="some-input" placeholder="enter something">
    </form>
  `));
};

$('#app').on('submit', '#search', async function(event) {
  event.preventDefault();
  const myVal = $(this).find('input').val();
  console.log('myVal: ', myVal);
  try {
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

renderForm();