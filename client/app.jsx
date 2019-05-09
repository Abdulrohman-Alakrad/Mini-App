// import 

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            isHidden: true,
            isHiddenCh:false
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    toggleHiddenCh(){
        this.setState({
            isHidden :!this.state.isHidden,
            isHiddenCh:this.state.isHiddenCh 
        }) 
    }

    render () {
        return (
        <div> 
            <h1>Mini App</h1>
            <button onClick={this.toggleHidden.bind(this)}>Checkout</button>
            {!this.state.isHidden && <Form1 to={this.toggleHiddenCh.bind(this)}/>}
        </div>
    )}
}

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isHidden: true,
            fullName:'',
            password:'',
            email:''
        }
    }
    fullName(e){
        this.setState({
            fullName:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    onClick(e){
        e.preventDefault();

        var data={
            fullname: this.state.fullName,
            email:this.state.email,
            pass:this.state.password
        }
        console.log(data)
    }
    render(){
        return (
        <div className='modal'>
          
          <div id="form1">
            <form>
                Full Name:
                <input type="text" onChange={this.fullName.bind(this)}id="firstname" placeholder = "Ahmad" required/>
                Email:
                <input type="email" onChange={this.email.bind(this)}id="email" size="30" maxLength="30"  placeholder = "default@example.com" required/>
                Password:
                <input type="password"onChange={this.password.bind(this)} id="password"  required/>
                <button onClick={this.onClick.bind(this)} >Submit</button>
                <button onClick={this.toggleHidden.bind(this)}>Next Form</button>
            </form>
          </div>
          {!this.state.isHidden && <Form2/>}
        </div>
        )
    }
}
class Form2 extends React.Component {
    render(){
        return (
            <div>
                <h2>Hello World</h2>      
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

