import React from 'react';
import styled from 'styled-components'
import lagosPng from '../images/lagos.png'

const Nav = styled.nav`
	display: flex;
	margin:0;
	padding: 0;
	background-color: #ffc400;
align-items: center;
height: 70px;



@media all and (max-width : 630px) {

    ul li {
		display:flex;
		width: 94%;
	}

}

`

const Tab = styled.div`
	display: flex;
		justify-content: space-between;
`
const Logo = styled.img`
	display: block;
	padding: 10px 20px;
	float: left;
	font-size:20px;
	line-height: 60px;
	max-width: 80px;
	color: white;
    @media all and (max-width : 630px) {
    
    	display: block;
		padding: 10px 20px;
		float: left;
		font-size:20px;
		line-height: 60px;
		max-width: 80px;
		color: white;
    }

`

const Drop = styled.input`
&:checked{
    Li{
    display: block;
    }
}
display: block;




`

const Label = styled.label`
&:hover{
    background-color: #000000;

}




display: none;
		background-color: #ffc400;
		padding:14px 20px;	
		color:#FFF;
		font-size:17px;
		text-decoration:none;
		border:none;

        @media all and (max-width : 630px) {
        display: block;
        }

`

const Menu = styled.ul`
display: flex;
@media all and (max-width : 630px) {
display: none;
}

`

const Li = styled.li`
margin: 10px;
list-style: none;
`



class Header extends React.Component {

    render() {
        return (

            <Nav>
                <Tab >

                    <Logo src={lagosPng}/>
                        <Label for="drop" ><svg id="hamb" viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20" rx="8"></rect>
                            <rect y="30" width="100" height="20" rx="8"></rect>
                            <rect y="60" width="100" height="20" rx="8"></rect>
                        </svg>

                        </Label>
        </Tab>
                    <Drop type="checkbox" />
                    <Menu>
                        <Li><a href="#">SIMULE AQUI</a></Li>
                        <Li><a href="#">CONTATO</a></Li>
                        <Li><a href="#">SERVIÇOS</a></Li>

                    </Menu>


          </Nav>
        )
    }
}



export default Header