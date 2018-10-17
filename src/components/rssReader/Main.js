import React, { Component } from 'react';
import Config from './Config';
import './rss.css';
const inter = "https://api.rss2json.com/v1/api.json?api_key=bssiimvtna0ymul2p5wz0exrejvcwqujo0icirjr&rss_url=";

class Weather extends Component {
  
    constructor() {
        super()
        this.state = {
            news: [],
            actualnews:[]
        }
        this.renderInterval = null;
    }
    componentDidMount() {
        this.loadNews();
        setInterval(() => this.loadNews(), 3600000);
    }
    extractData(data) {
        var ANew = [];
        data.items.map(async flux => {
            let dataFlux = {
              content:flux.content.replace(/<[^>]*>/g,""),
              title: flux.title,
              date: new Date(flux.pubDate).toLocaleString(Config.date.local, Config.date.format),
              src: data.feed.description
            };
            ANew.push(dataFlux);
          })
        
        return ANew;
      }
    loadNews(){
        clearInterval(this.renderInterval);
        this.setState({news:[]});
        Promise.all(
            Config.rss.map(url => 
              fetch(inter+url)
              .then(response => response.json())
              .then(responseData => {
                this.setState((prevState, props) => ({ news: [...prevState.news, ...this.extractData(responseData)] }))
              })
              .catch(err => /* handle errors here */ console.error(err))
            )
          ).then(()=>{
            let item = this.state.news[Math.floor(Math.random() * this.state.news.length)];
                this.setState({actualnews : item });
            this.renderInterval = setInterval(() => {
                let item = this.state.news[Math.floor(Math.random() * this.state.news.length)];
                this.setState({actualnews : item });
            }, 120000);
          })
    }
    render() {
        return (
            <div className="app_rssreader">
                <div class="rss-info">{this.state.actualnews.src}</div>
                <div class="rss-date">{this.state.actualnews.date}</div>
                <h2 class="rss-title">{this.state.actualnews.title}</h2><p class="rss-content">{this.state.actualnews.content}</p>
            </div>
        )
    }
}
export default Weather;

