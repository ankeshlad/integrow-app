import React from 'react';
import BackgroundImage from '../../components/backgroundImage/BackgroundImage'
import Card from '../../components/cardAuth/Card'
import Text from '../../components/text/Text'
import Input from '../../components/input/Input'
import ButtonCircular from '../../components/button/Button';
import Toggle from 'react-toggle'

const Register = () => {

    return(
        <div>
            <BackgroundImage />
            <div style={{padding:"50px",marginTop:"-55%"}}>
            
            <Card>
                <Text title="Integrow" fontSize={70} fontWeight={700} margin={0} />
                <Text title="ART . WORK . LIFE" fontSize={25} fontWeight={700} margin={0} marginTop={12} />
                <Input type="text" placeholder="Email ID" />
                <Input type="text" placeholder="Password" />
                <Text title="Remember me" fontSize={15} float={"left"} margin={"0"} marginLeft={"7%"} />
                <Text title="Forgot Password?" fontSize={15} margin={"0"} marginRight={"-45%"}  />
                <ButtonCircular title="Sign in" borderRadius="10px" backgroundColor="#6EA642" color="#fff" height="10%" width="37%"
                marginTop="20px" border="none" fontSize="20px" float= "right" marginRight= "42px" />
               <br></br><br></br><br></br> <Text title="Don't have account yet?" fontSize={15} float={"left"} marginLeft={"7%"} />
                <Text title="Sign up here" fontSize={15} float={"left"} marginLeft={"2%"} color={"#6EA642"} textDecorationLine={"underlined"}  />
                <Text title="If you are part of Integrow Asset Management, please sign in" fontSize={15} float={"left"} marginLeft={"7%"} />
                <Text title="here" fontSize={15} float={"left"} marginLeft={"1%"} color={"#6EA642"} />
            
            </Card>
        </div>
        </div>
       
    )
}

export default Register