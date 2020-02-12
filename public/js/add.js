const storeForm     = document.getElementById('store-form');
const storeID       = document.getElementById('store-id');
const storeAddress  = document.getElementById('store-address');

// Send POST
async function addStore(e) {
  e.preventDefault();

  if(storeID.value === '' || storeAddress.value === '') {
    alert('Please fill in fields');
  }

  const sendBody = {
    storeId: storeID.value,
    address: storeAddress.value
  }

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if(res.status === 400) {
      throw Error('Store already exists');
    }

    storeID.value       = '';
    storeAddress.value  = '';

    alert('Store added');
  } catch (error) {
    alert(error);
  }
}

storeForm.addEventListener('submit', addStore);