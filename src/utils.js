
/*import { redirect } from "react-router-dom";


export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname;
    const isLoggedIn = localStorage.getItem("loggedin");

    if (!isLoggedIn) {

        const response = redirect(
            `/login?message=you must log in to access.&redirectTo=${pathname}`
        )
        response.body=true
        throw response
    }
    return null
}*/


import { redirect } from "react-router-dom"

// Mirage swaps in a fetch polyfill whose Response has no `body`, so React Router
// doesn't recognise redirects unless `body` is set. A real browser Response has a
// read-only `body`, so setting it must be guarded or it throws.
export function safeRedirect(url) {
  const response = redirect(url)
  try {
    response.body = true
  } catch {
    // native Response: already recognised by React Router, nothing to do
  }
  return response
}

export async function requireAuth(request) {
  // 🧠 Add a base origin to support relative URLs in dev
  const url = new URL(request.url, window.location.origin)
  const pathname = url.pathname
  const isLoggedIn = localStorage.getItem("loggedin")

  if (!isLoggedIn) {
    throw safeRedirect(
      `/login?message=You must log in to access that page.&redirectTo=${pathname}`
    )
  }

  return null
}



