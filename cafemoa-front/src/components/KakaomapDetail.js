/*global kakao*/

import React, { Component } from 'react'

export default class KakaomapDetail extends Component {
    componentDidMount() {
        const lat = this.props.latitude
        const long = this.props.longitude
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(lat, long), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        };
        let marker = new window.daum.maps.Marker({
            position: options.center
        });
        // 마커가 지도 위에 표시되도록 설정합니다  
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        marker.setMap(map);
    }
    render() {
        return (
            <div>
                <div id="map" style={{width:'300px', height:'240px'}}></div>
            </div>
        )
    }
}
