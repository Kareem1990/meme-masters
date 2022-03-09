console.log("anything!!!!!");
async function newFormHandler(event) {
  console.log("SOMETHING");
  event.preventDefault();

  const title = document.querySelector('input[name="user-handle"]').value;
  const img_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      img_url
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
