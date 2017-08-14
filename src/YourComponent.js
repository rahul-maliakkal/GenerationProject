import React, { Component } from 'react';
import axios from 'axios';
import FavPlaces from "./favorite_places";


/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      places:[]
    };
    this.state.finishedCount =0;
    this.state.totalStores = 0;
  }

  shouldComponentUpdate(){
    return true;
  }

  componentDidMount(){
    let map =  new google.maps.Map(this.refs.map,{
      center : { lat: 19.4326, lng: -99.1332},
      zoom:8
    });

    axios.get('./store_directory.json').then((response)=>{
      let stores = response.data;
      this.setState({totalStores:stores.length});
      let geocoder = new google.maps.Geocoder();
      

// Used to create Map Markers

      const createMarker = (results,store) =>{
        
        var loc = results[0].geometry.location
          var marker = new google.maps.Marker({
              map: map,
              position: loc,
              //animation: google.maps.Animation.DROP,
              name:store["Name"]
            });
          var infowindow = new google.maps.InfoWindow({
                content: marker.name
              });
          marker.addListener("click",() => {
            console.log(this.state.places);
              infowindow.open(map, marker);
              console.log(marker.name);
              var arrayvar = this.state.places.slice();
              arrayvar.push(marker.name);
              this.setState({ places: arrayvar });
              console.log(this.state.places);
          });
          marker.addListener('mouseover', function() {
              infowindow.open(map, this);
          }); 
          marker.addListener('mouseout', function() {
              infowindow.close(map, this);
          });
      }

// GeoCode the Address and also used setTimeOut to avoid OVER_QUERY_LIMIT
      const geoCodeAddress = (store)=>{
        geocoder.geocode({
          'address':store['Address']
        },(results,status)=>{
          if(status === google.maps.GeocoderStatus.OK){
            this.setState({finishedCount:this.state.finishedCount+1});
            createMarker(results,store);
           
          }
          else if(status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
            setTimeout(function(){
              geoCodeAddress(store);
            },100)
          }
          else{
            console.log("Geocode of " + store + " failed:" + status);
          }
        })
      }

      stores.map((store,index)=>{
        geoCodeAddress(store);
      });

    });
  }

  

  render() {
    return (
      <div id = "map_container">
              <h5 style={{float:'bottom'}}>Number of Places Mapped : {this.state.finishedCount}</h5><br/>
              <h5 style={{float:'bottom'}} >     Total Places to be Mapped : {this.state.totalStores}</h5>
        <div id="map" ref="map"/>
       
        
        <FavPlaces stores={this.state.places}/>
        
      </div>
    );
  }
}

