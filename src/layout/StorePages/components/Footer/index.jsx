import React from 'react'
import Style from './style'
import { Body1 } from '../../../../components/Typography'
import Container from '../../../../components/Container'

// images
import fullLogo from '../../../../assets/images/full_logo.png'
import appStore from '../../../../assets/images/footer/appStore.png'
import googlePlay from '../../../../assets/images/footer/googlePlay.png'

// icons
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <Style>
            <Container className='grid'>
                <div>
                    <img src={fullLogo} alt="logo" />
                    <Body1 color='gray/600'>Best information about the company gies here but now lorem ipsum is</Body1>
                    <div>
                        <a href="https://www.facebook.com/" className='social_icon'>
                            <ImFacebook />
                        </a>
                        <a href="http://twitter.com/" className='social_icon'>
                            <BsTwitter />
                        </a>
                        <a href="https://www.linkedin.com/" className='social_icon'>
                            <TfiLinkedin />
                        </a>
                        <a href="https://www.instagram.com/" className='social_icon'>
                            <RiInstagramFill />
                        </a>
                        <a href="https://www.youtube.com/" className='social_icon'>
                            <AiFillYoutube />
                        </a>
                    </div>
                </div>
                <div className='footer__lists'>
                    <div className='footer__list'>
                        <Body1 weight={500} margin="0 0 10px">About</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">About Us</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Find store</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Categories</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Blogs</Body1>
                    </div>
                    <div className='footer__list'>
                        <Body1 weight={500} margin="0 0 10px">Partnership</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">About Us</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Find store</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Categories</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Blogs</Body1>
                    </div>
                    <div className='footer__list'>
                        <Body1 weight={500} margin="0 0 10px">Information</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Help Center</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Money Refund</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Shipping</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Contact us</Body1>
                    </div>
                    <div className='footer__list'>
                        <Body1 weight={500} margin="0 0 10px">For users</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Login</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Register</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">Settings</Body1>
                        <Body1 color="gray/500" margin="0 0 3px">My Orders</Body1>
                    </div>
                    <div className='footer__list'>
                        <Body1 weight={500} margin="0 0 10px">Get app</Body1>
                        <Body1 color="gray/500" margin="0 0 8px">
                            <img src={appStore} alt="App Store" />
                        </Body1>
                        <Body1 color="gray/500" margin="0 0 8px">
                            <img src={googlePlay} alt="Google Play" />
                        </Body1>
                    </div>
                </div>
            </Container>
        </Style>
    )
}

export default Footer