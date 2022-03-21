'use strict';

const e = React.createElement;

class Forge extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comic: { "honk": "hoink" } };

    }

    makeComic = (str) => {
        try {
            let cc = JSON.parse(str)

            this.setState(prevState => ({
                comic: cc
            }));
        } catch (e) {
            console.log("didn;t work")
        }
    }


    render() {
        return ( <
            div > { this.state.comic.title || '' } < br / > { this.state.comic.desc || '' } <
            textarea onInput = {
                (e) => this.makeComic(e.target.value) } >
            <
            /textarea> <
            /div>
        )
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(LikeButton), domContainer);