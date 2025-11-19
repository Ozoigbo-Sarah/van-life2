
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

export async function requireAuth(request) {
  // 🧠 Add a base origin to support relative URLs in dev
  const url = new URL(request.url, window.location.origin)
  const pathname = url.pathname
  const isLoggedIn = localStorage.getItem("loggedin")

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You must log in to access that page.&redirectTo=${pathname}`
    )
    response.body = true
    throw response
  }

  return null
}



