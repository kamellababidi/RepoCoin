import React from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ProfileStyle'
import { Images } from 'App/Theme'
import ProfileHeader from 'App/Components/ProfileHeader/ProfileHeader'
import AnimatedNumber from 'App/Components/AnimatedNumber/AnimatedNumber'
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
                    size={170}
                    width={15}
                    fill={this.state.completed}
                    tintColor="rgb(220, 222, 226, 0.2)"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    duration={3000}
                    rotation={-360}
            />
            <View style={Style.prgressBar}>
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
            </View>
            <View style={Style.insideCircle}>
                <Text style={Style.percintageText}>{this.state.completed}%</Text>
                <Text style={Style.completedText}>Completed</Text>
            </View>
        </View>
        <View style={Style.counterContainer}>
            <View style={Style.counter}>
                <AnimatedNumber
                    start={0}
                    end={285}
                />
                <Text style={Style.discText}>Repo Points</Text>
            </View>
            <View style={Style.counter}>
                <AnimatedNumber
                    start={0}
                    end={68}
                />
                <Text style={Style.discText}>Scanned Cars Today</Text>
            </View>
        </View>
     
        <ImageBackground style={Style.levelContainer}>
            <Image style={Style.levelImage} source={Images.levelBackground} resizeMode={'contain'} />
            <View style={Style.levelDescContainer}>
                <Text style={Style.levelText}>Level : </Text>
                <Text style={Style.beginerText}>Beginer</Text>
            </View>
        </ImageBackground>
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
