import React from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ProfileStyle'
import { Images } from 'App/Theme'
import ProfileHeader from 'App/Components/ProfileHeader/ProfileHeader'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        completed: 72
    }
  }

  render() {
    return (
      <ImageBackground style={Style.container} source={Images.profileBackground}>
        <ProfileHeader/>
        <View style={Style.prgressBarContainer}>
            <AnimatedCircularProgress
                size={165}
                width={10}
                fill={this.state.completed}
                tintColor="#fa9d44"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#90b4ed"
                duration={3000}
                rotation={-360}
            />
            <View style={Style.insideCircle}>
                <Text style={Style.percintageText}>{this.state.completed}%</Text>
                <Text style={Style.completedText}>Completed</Text>
            </View>
        </View>
        <View style={Style.levelContainer} source={Images.levelBackground}>
            <Image style={Style.levelImage} source={Images.levelBackground} resizeMode={'contain'} />
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
