import React from 'react'
import NavigationHome from '../components/shared/NavigationHome'
import LogButton from '../components/shared/LogButton'
import RegisterButton from '../components/shared/RegisterButton'

const HomePage = () => {
  return (
    <div className='Home'>
        <NavigationHome/>
        <div className='About'>
            <div className='Head'>
                <h1>📮Send Messages To Your Future Self</h1>
            </div>
            <div className='description'>
                <p>Create time capsules with messages, photos, and memories to be revealed at the perfect moment</p>
            </div>
            <div className='Buttons'>
                <RegisterButton/>
                <LogButton/>
            </div>
            <div className='FeatureCards'>
                <div className='MainFeature'>
                    <p>⏰
                        Time-Locked
                        Messages
                        Set future dates for 
                        your messages to be 
                        revealed</p>
                </div>
                <div className='SecondaryFeature'>
                    <p>🌍
                        Share with the
                        World
                        Make your capsules 
                        public or keep them 
                        private</p>
                </div>
                <div className='TertiaryFeature'>
                    <p>📱
                        Rich Media
                        Add photos, audio, and
                        documents to your
                        capsules</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage