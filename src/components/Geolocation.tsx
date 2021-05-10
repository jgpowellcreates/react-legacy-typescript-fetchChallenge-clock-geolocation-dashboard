import React, {Component} from 'react';
/* type WeatherStatus = {
    locationName: string,
    description: string,
    temp: number,
    feelsLike: number,
    tempHi: number,
    tempLo: number,
} */

type WeatherState = {
    description: string,
    temp: number
}

interface Results {
    base: string;
    weather: Weather[];

}

interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}



export default class Geolocation extends Component <{},WeatherState> {
    constructor(props : object) {
        super(props)
        this.state = {
            description: '',    //data type is inferred here... can I remove these lines? or remove the type passed in?
            temp: 0,
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((data)  => {
            let latitude : number = data.coords.latitude;
            let longitude : number = data.coords.longitude;
            console.log(latitude, longitude);
            let API_key : string = "e624b789e7c37f5a9ec98c6b096de061"

            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data, "Feels like:", data.main.feels_like, "Description:", data.weather[0].description)
                this.setState({
                    temp: data.main.temp, //this DOES check for a string data type
                    description: data.weather[0].description     //this DOES check for a number data type
                    })
            })
            .catch(err => console.log(err))
        })
    }
    
    render() {
        return(
            <div>
                <WeatherDisplay temp={this.state.temp} description={this.state.description}/>
            </div>
        )
    }
}

type WeatherDisplayProp = {
    temp: number,
    description: string
}

const WeatherDisplay = (props : WeatherDisplayProp) => {

    let {temp, description} = props; 

    return(
        <>
            <h2>{description}</h2>
            <h4>{`It is currently ${temp} degrees outside`}</h4>
        </>
    )
}