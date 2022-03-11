async function deleteFormHandler(event) {
  event.preventDefault();
  console.log(event.target.dataset);
  const id = event.target.dataset.id;
  console.log(id);
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
