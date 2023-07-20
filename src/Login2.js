import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import './Login.css'

function Login2() {
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>User Name</label>
                    <input placeholder='First Name' type='text' />
                </Form.Field>
                <Form.Field>
                    <label>Password </label>
                    <input placeholder='Enter Password' type='password'/>
                </Form.Field>
               
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Login2
