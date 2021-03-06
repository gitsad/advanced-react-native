import React from 'react';
import {
    View,
    Animated,
    PanResponder
} from 'react-native';

export class Deck extends React.Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: () => {}
        });
        this.state = { panResponder, position };
    }
    renderCards = () => {
        return this.props.data.map(item => this.props.renderCard(item));
    }
    render() {
        return(
            <Animated.View
                {...this.state.panResponder.panHandlers}
                style={this.state.position.getLayout()}
            >
                {this.renderCards()}
            </Animated.View>
        )
    }
}