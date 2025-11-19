
import { useLoaderData ,
    useNavigation, 
    Form,
    useActionData,
    redirect
} from "react-router-dom"
import { loginUser } from "../Api"

export function Loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function Action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

   try{ const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)
    //window.location.href = pathname
    const response = redirect(pathname)
response.body = true  // It's silly, but it works
return response
   } catch (error) {
    console.error("❌ Login failed:", error);
       return { error: "Failed to log in" }
   }
}


export default function Login() {
const message = useLoaderData()
const navigation = useNavigation()
const errorMessage = useActionData()


    return (
        <div className="login-container">
          <div className="login-box">
            <h1 className="login-title">Sign in to your account</h1>
            {message && <p className="login-message">{message}</p>}
            {errorMessage?.error && <p className="login-message">{errorMessage.error}</p>}
            <Form
                method="post"
                className="login-form" 
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="login-input"
                   
                />
                <input
                    name="password"
                    type="password"
                    
                    placeholder="Password"
                    className="login-input"
                    
                />
                <button
                    disabled={navigation.state=== "submitting"}
                    type="submit"
                    className="login-btn"
                >
                  {navigation.state === "submitting" ? "logging in..." : "log in"}
                </button>
            </Form>
            <p className="login-footer">
          Don’t have an account?{" "}
          <a href="#" className="login-link">
            Create one now
          </a>
        </p>
            </div>
        </div>
    )
}






