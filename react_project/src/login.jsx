export const Login=()=>{
    return(
        <div id="main">
       <form id="form">
        <h1><i>Welcome </i></h1>
        <p><i>A Complete Pet Shop</i></p>
        <input type="email" placeholder="Username" required /> <br></br>
        <input type="password" required placeholder="Password"/><br></br>
       
        <button>Sign In</button>
        <small><label htmlFor="rembember">Forget password</label></small>
    
       </form>
       <div id="image ">
        <img src="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" alt="A Dog image" />
       </div>
       </div>
    )

}