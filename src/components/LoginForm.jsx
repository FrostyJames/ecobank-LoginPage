import react, {useState} from "react";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    } 
    console.log("logging in with", username, password);
    // this is where the login logic is 
}
}

return (
    <div className="login-form">
        
    </div>
)