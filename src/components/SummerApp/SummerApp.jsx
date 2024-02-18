import './SummerApp.css';
import logo from '../assets/logo.jpg';
import search_icon from "../assets/search-icon.png";
import wind_icon from "../assets/windspeed.png"
import humidity_icon from "../assets/humidity.png"
import cloud_icon from "../assets/cloud.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import clear_icon from "../assets/clearday.png"
import sl_icon from "../assets/severitylevel.png"
import allergen_icon from "../assets/allergen.png"
import React, { useEffect, useState } from "react";


//import React from 'react'

const SummerApp = () => {

    let api_key ="dd94f859a0e52d6e4767fddf735f04a7";
    const [wicon, setWicon] = useState(cloud_icon);
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
           return 0;

        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        const density = document.getElementsByClassName("allergen-density");
        const severity = document.getElementsByClassName("allergen-severity");
        const temperature = document.getElementsByClassName("welcome-msg");
        const location = document.getElementsByClassName("location"); 

        density[0].innerHTML = data.main.humidity+"%"; //humidity
        severity[0].innerHTML = Math.floor(data.wind.speed)+" km/h"; //windspeed
        temperature[0].innerHTML = Math.floor(data.main.temp)+" °C"; //tmp
        location[0].innerHTML = data.name; //city name

        //severity levels and list of allergens
        const SL = document.getElementsByClassName("allergen-SL"); //severity level
        const List = document.getElementsByClassName("allergen-list");

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")  //CLEAR
        {
            setWicon(clear_icon); //logo for NOW, CHANGE SOON
            if(data.main.humidity < 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Pollen";
            } 
            else if (data.main.humidity >= 30 && data.main.humidity <= 50) {
                SL[0].innerHTML = "Low";
                List[0].innerHTML = "You're Safe!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Dust Mites! Yikes";
            }
        }
        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n") { //CLEAR
            setWicon(cloud_icon);

            if(data.main.humidity < 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Pollen";
            } 
            else if (data.main.humidity>= 30 && data.main.humidity <= 50) {
                SL[0].innerHTML = "Low";
                List[0].innerHTML = "You're Safe!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Dust Mites! Yikes";
            }
        }
        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n") { //CLEAR
            setWicon(rain_icon);

            if(data.main.humidity < 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Pollen";
            } 
            else if (data.main.humidity >= 30 && data.main.humidity<= 50) {
                SL[0].innerHTML = "Low";
                List[0].innerHTML = "You're Safe!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Dust Mites! Yikes";
            }
        }
        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n") { //CLEAR
            setWicon(rain_icon);

            if(data.main.humidity< 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Pollen";
            } 
            else if (data.main.humidity >= 30 && data.main.humidity <= 50) {
                SL[0].innerHTML = "Low";
                List[0].innerHTML = "You're Safe!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Dust Mites! Yikes";
            }
        }
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n") { //RAIN
            setWicon(rain_icon);

            if(data.main.humidity < 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Mold";
            } 
            else if (data.main.humidity >= 30 && data.main.humidity <= 50) {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Mold, yikes!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Mildew! Yikes";
            }
        }
        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n") { //RAIN
            setWicon(rain_icon);

            if(data.main.humidity < 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Mold, ah!";
            } 
            else if (data.main.humidity >= 30 && data.main.humidity <= 50) {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Mold, yikes!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Mildew! Yikes";
            }
        }
        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n") { //HEAVY RAIN
            setWicon(snow_icon);

            if(data.main.humidity < 30)
            {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Mold";
            } 
            else if (data.main.humidity >= 30 && data.main.humidity <= 50) {
                SL[0].innerHTML = "Moderate";
                List[0].innerHTML = "Mold, yikes!";
            }
            else {
                SL[0].innerHTML = "High";
                List[0].innerHTML = "Mold and Mildew! Yikes";
            }
        } 
        else 
        {
            <div className='logo-adjust'>setWicon(clear_icon);</div>

            SL[0].innerHTML = "Seems good!";
                List[0].innerHTML = "Have a great day!"
        }
    }
  return (
    <div>
        <div className="title-box">
        <div className="title">Sensitive Summer</div>
        </div>

      <div className='container'>
      <div className="type-image">
        </div>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Search Any Location!' />
            
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
      <div className='weather-image'> 
        <img src={wicon} alt="" />
      </div>
        <div className="welcome-msg">Welcome!</div>

        <div className="location">Let's Explore the World</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                <div className="type">Humidity</div>
                    <div className="allergen-density">Hot!</div>
                    
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                <div className="type">Wind Speeds</div>
                    <div className="allergen-severity">Whoosh!</div>
                    
                </div>
            </div>
        </div>
        
        <div className="data-container">
            <div className="element">
                <img src={sl_icon} alt="" className="icon" />
                <div className="data">
                <div className="type">Allergen Severity Level</div>
                    <div className="allergen-SL">Uh oh!</div>
                </div>
            </div>
            <div className="element">
                <img src={allergen_icon} alt="" className="icon" />
                <div className="data">
                <div className="type">Allergens</div>
                    <div className="allergen-list">Achoo!</div>
                    
                </div>
            </div>   
        </div>
        
    </div>
    </div>
  );
}

export default SummerApp;
