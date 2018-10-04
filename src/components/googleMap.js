import React, { Component }  from 'react'

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // this.refs.map to get direct reference to this div with ref of map
    return <div ref="map" />
  }
}

export default GoogleMap