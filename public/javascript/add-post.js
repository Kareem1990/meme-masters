console.log("anything!!!!!");
async function newFormHandler(event) {
  console.log("SOMETHING");
  event.preventDefault();

  const img_url = document.querySelector('input[name="post-url"]').value;
  const title = document.querySelector('input[name="title"]').value;
  const to_user_email = document.querySelector('input[name="share-to"]').value;


  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      img_url,
      title,
      to_user_email,
      
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
