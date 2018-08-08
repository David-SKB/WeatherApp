// import preact
//<iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=10&center=51.5074,-0.1278&key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts" allowfullscreen></iframe>
//51.5240671,-0.0425632
//<iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse" allowfullscreen></iframe>
//<iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse" allowfullscreen></iframe>
//            <iframe width="350" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse" allowfullscreen></iframe>
//<iframe width="350" height="300" frameborder="0" style="border:0" src={this.state.url}  allowfullscreen></iframe>
//alert('text is: ' + this.state.value);



import { h, render, Component } from 'preact';
import style from '../iphone/style';
export default class Search extends Component {

    constructor(props)
    {
        super(props);
        this.state.text = "";
        this.state.workpls = "";
        this.state.value = "";
        this.state.url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+limehouse";
        this.state.map = "";

        /* we bind here in the constructor instead of the render() --> to increase performance */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   /* this method gets the text box value + stores in text variable */
   handleText = (e) => {
   this.setState({text: e.target.value});
    }
    
    render()
    {
        return (
            <div>
                <h1 class={ style.h420 }>Search Nearby Courts</h1>


                <form onSubmit ={this.handleSubmit}>

                <input type="text"  value={this.state.value} onChange={this.handleChange}/>

                <input type="submit" value="Search"/>
                </form>

                <div class ={style.h20}>
                <iframe width="370" height="580" frameborder="0" style="border:0" src={this.state.url} allowfullscreen></iframe>
                </div>
            </div>

        );
    }

    handleChange(event)
    {

        this.setState({value: event.target.value}) ;

    }

    /* this method allows us to submit the search query */
    handleSubmit(event)
    {

        this.state.url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=tennis+courts+near+" + this.state.value;
        console.log(this.state.url);
        event.preventDefault();
        this.setState(this.url);

    }

}
