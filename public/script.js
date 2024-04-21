function readURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email')
  const password = urlParams.get('pass')
  return { email, password }
}
